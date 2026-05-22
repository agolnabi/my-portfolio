"use client";

export default function Nav({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-zinc-900 text-sm">{name}</span>
        <nav className="hidden sm:flex gap-6 text-sm text-zinc-500">
          {["Experience", "Skills", "Projects", "Education", "Recommendations"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="hover:text-zinc-900 transition-colors"
            >
              {s}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
