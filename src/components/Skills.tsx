"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type SkillCategory = {
  name: string;
  items: string[];
};

type SkillsData = {
  categories: SkillCategory[];
};

const categoryStyles: Record<string, { pill: string; heading: string; span: string }> = {
  "Leadership & Management": {
    pill: "bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20",
    heading: "text-[#3b82f6]",
    span: "sm:col-span-2",
  },
  "Technical & Scientific": {
    pill: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    heading: "text-emerald-400",
    span: "sm:col-span-2",
  },
  "Regulatory & Compliance": {
    pill: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    heading: "text-amber-400",
    span: "sm:col-span-1",
  },
  "Programming & Tools": {
    pill: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    heading: "text-violet-400",
    span: "sm:col-span-2",
  },
  "Languages": {
    pill: "bg-green-500/10 text-green-400 border border-green-500/20",
    heading: "text-green-400",
    span: "sm:col-span-1",
  },
};

const fallbackStyle = {
  pill: "bg-zinc-800 text-zinc-300 border border-zinc-700",
  heading: "text-zinc-400",
  span: "sm:col-span-1",
};

export default function Skills({ skills }: { skills: SkillsData }) {
  return (
    <div id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-6">
        {skills.categories.map((cat, ci) => {
          const style = categoryStyles[cat.name] ?? fallbackStyle;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.07 }}
              className={`rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 ${style.span}`}
            >
              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${style.heading}`}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: ci * 0.07 + i * 0.02 }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${style.pill}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
