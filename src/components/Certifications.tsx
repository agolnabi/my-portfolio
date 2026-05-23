"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Certification = {
  title: string;
  organization: string;
  date: string;
};

export default function Certifications({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <div id="certifications">
      <SectionHeading>Certifications & Professional Development</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 hover:border-zinc-700 transition-colors"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#ededed] leading-snug">{cert.title}</p>
              <p className="text-xs text-[#3b82f6] mt-0.5">{cert.organization}</p>
            </div>
            <span className="text-xs text-zinc-500 shrink-0 pt-0.5 whitespace-nowrap">{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
