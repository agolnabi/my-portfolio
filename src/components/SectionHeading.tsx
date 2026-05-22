export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-[#ededed] mb-8 pb-3 border-b border-zinc-800">
      {children}
    </h2>
  );
}
