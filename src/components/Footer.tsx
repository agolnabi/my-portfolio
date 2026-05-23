import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24 py-8 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} {content.hero.name}.
    </footer>
  );
}
