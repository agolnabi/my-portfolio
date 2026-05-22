import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";
import { checkRateLimit } from "@/lib/rate-limiter";

// Read once at module startup — not on every request
const systemPrompt = readFileSync(join(process.cwd(), "src/data/system-prompt.txt"), "utf-8");
const profileData = readFileSync(join(process.cwd(), "src/data/content.json"), "utf-8");
const systemMessage = `${systemPrompt}\n\nPROFILE DATA:\n${profileData}`;

const client = new Anthropic();

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const { allowed, remaining } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before sending more messages." },
      { status: 429, headers: { "X-RateLimit-Remaining": "0" } }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { message } = body as { message?: unknown };

  // Validate
  if (typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { error: "message must be a non-empty string." },
      { status: 400 }
    );
  }
  if (message.length > 500) {
    return NextResponse.json(
      { error: "message must be 500 characters or fewer." },
      { status: 400 }
    );
  }

  const sanitized = stripHtml(message).trim();

  // Call Claude
  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      system: systemMessage,
      messages: [{ role: "user", content: sanitized }],
    });

    const reply =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json(
      { reply },
      { headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
