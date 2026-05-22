import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";
import { createRateLimiter } from "@/lib/rate-limiter";

const checkRateLimit = createRateLimiter(5, 60_000);

const profileData = readFileSync(join(process.cwd(), "src/data/content.json"), "utf-8");

const client = new Anthropic();

const systemPrompt = `You are an expert technical recruiter and career coach. Compare the candidate's profile against the provided job description.

Return ONLY valid JSON in this exact shape:
{
  "score": <integer 0-100>,
  "verdict": "<one sentence overall assessment>",
  "strongMatches": ["<match 1>", "<match 2>", ...],
  "gaps": ["<gap 1>", "<gap 2>", ...],
  "recommendations": ["<recommendation 1>", "<recommendation 2>", ...]
}

CANDIDATE PROFILE:
${profileData}`;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { jobDescription } = body as { jobDescription?: unknown };

  if (typeof jobDescription !== "string" || jobDescription.trim().length === 0) {
    return NextResponse.json(
      { error: "jobDescription must be a non-empty string." },
      { status: 400 }
    );
  }
  if (jobDescription.length > 5000) {
    return NextResponse.json(
      { error: "jobDescription must be 5000 characters or fewer." },
      { status: 400 }
    );
  }

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `Analyze this job description against my profile:\n\n${jobDescription}`,
        },
      ],
    });

    const raw = response.content[0].type === "text" ? response.content[0].text : "{}";
    const result = JSON.parse(raw);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 }
    );
  }
}
