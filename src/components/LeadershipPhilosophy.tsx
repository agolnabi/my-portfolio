"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function LeadershipPhilosophy({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div id="leadership">
      <SectionHeading>Leadership Philosophy</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
      >
        <div className="border-l-2 border-[#3b82f6] pl-5 flex flex-col gap-5">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
