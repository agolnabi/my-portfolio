"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type SkillsData = {
  strong: string[];
  moderate: string[];
  gaps: string[];
};

const categories = [
  {
    key: "strong" as const,
    label: "Strong",
    pillClass: "bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20",
  },
  {
    key: "moderate" as const,
    label: "Moderate",
    pillClass: "bg-zinc-800 text-zinc-300 border border-zinc-700",
  },
  {
    key: "gaps" as const,
    label: "Growth Areas",
    pillClass: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  },
];

export default function Skills({ skills }: { skills: SkillsData }) {
  return (
    <div id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid sm:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.08 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[cat.key].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: ci * 0.08 + i * 0.03 }}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${cat.pillClass}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
