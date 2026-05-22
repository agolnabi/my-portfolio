"use client";

import { useState } from "react";
import Link from "next/link";

type FitResult = {
  score: number;
  verdict: string;
  strongMatches: string[];
  gaps: string[];
  recommendations: string[];
};

function ScoreColor(score: number) {
  if (score >= 70) return "text-green-400";
  if (score >= 40) return "text-yellow-400";
  return "text-red-400";
}

export default function FitAnalyzerPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FitResult | null>(null);
  const [error, setError] = useState("");

  async function analyze() {
    if (!jobDescription.trim() || loading) return;
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/fit-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Analysis failed. Please try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to dashboard
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-[#ededed]">Job Fit Analyzer</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Paste a job description to see how well your profile matches.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-3">
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here…"
            rows={10}
            maxLength={5000}
            className="w-full rounded-xl bg-zinc-900 border border-zinc-800 text-[#ededed] text-sm px-4 py-3 outline-none focus:ring-1 focus:ring-[#3b82f6] resize-y placeholder-zinc-600"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-600">{jobDescription.length}/5000</span>
            <button
              onClick={analyze}
              disabled={loading || !jobDescription.trim()}
              className="px-6 py-2.5 rounded-lg bg-[#3b82f6] text-white text-sm font-medium hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Analyzing…" : "Analyze Fit"}
            </button>
          </div>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        {/* Results */}
        {result && (
          <div className="mt-10 space-y-8">
            {/* Score */}
            <div className="text-center">
              <p className={`text-7xl font-bold tabular-nums ${ScoreColor(result.score)}`}>
                {result.score}
              </p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">Fit Score</p>
              <p className="mt-3 text-[#ededed] text-base max-w-xl mx-auto">{result.verdict}</p>
            </div>

            {/* Strong matches */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                Strong Matches
              </h2>
              <div className="flex flex-wrap gap-2">
                {result.strongMatches.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Gaps */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                Gaps
              </h2>
              <div className="flex flex-wrap gap-2">
                {result.gaps.map((g, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                Recommendations
              </h2>
              <ul className="space-y-2">
                {result.recommendations.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
