"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Award = {
  title: string;
  detail: string;
  year: string;
};

export default function Awards({ awards }: { awards: Award[] }) {
  return (
    <div id="awards">
      <SectionHeading>Awards & Honors</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-3">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 hover:border-zinc-700 transition-colors"
          >
            <span className="mt-0.5 text-amber-400 shrink-0">★</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#ededed] leading-snug">{award.title}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{award.detail}</p>
            </div>
            <span className="text-xs text-zinc-500 shrink-0 pt-0.5 whitespace-nowrap">{award.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
