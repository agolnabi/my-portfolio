"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type EducationItem = {
  institution: string;
  degree: string;
  years: string;
};

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <div id="education">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-4">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 py-3 border-b border-zinc-800 last:border-0"
          >
            <div>
              <h3 className="font-semibold text-[#ededed]">{edu.degree}</h3>
              <p className="text-sm text-[#3b82f6]">{edu.institution}</p>
            </div>
            <p className="text-sm text-zinc-500 shrink-0">{edu.years}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
