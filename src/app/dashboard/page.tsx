import Link from "next/link";

const tools = [
  {
    href: "/dashboard/fit-analyzer",
    title: "Job Fit Analyzer",
    description: "Paste a job description and get an AI-powered match score, strengths, gaps, and recommendations.",
    icon: "🎯",
  },
  {
    href: "/dashboard/resume-tailor",
    title: "Resume Tailor",
    description: "Tailor your resume bullets to a specific role using your experience data.",
    icon: "📝",
    comingSoon: true,
  },
  {
    href: "/dashboard/cover-letter",
    title: "Cover Letter Generator",
    description: "Generate a targeted cover letter from your profile and a job description.",
    icon: "✉️",
    comingSoon: true,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to portfolio
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-[#ededed]">Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-400">Private tools powered by Claude.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div key={tool.href} className="relative">
              {tool.comingSoon ? (
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 opacity-50 cursor-not-allowed">
                  <span className="text-2xl">{tool.icon}</span>
                  <h2 className="mt-3 font-semibold text-[#ededed]">{tool.title}</h2>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{tool.description}</p>
                  <span className="mt-4 inline-block text-xs text-zinc-500 border border-zinc-700 rounded-full px-2.5 py-0.5">
                    Coming soon
                  </span>
                </div>
              ) : (
                <Link
                  href={tool.href}
                  className="block rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <h2 className="mt-3 font-semibold text-[#ededed]">{tool.title}</h2>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{tool.description}</p>
                  <p className="mt-4 text-xs text-[#3b82f6]">Open →</p>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
