"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type ExperienceItem = {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
};

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <div id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="pl-7 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#3b82f6] bg-[#0a0a0a]" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5">
                <div>
                  <h3 className="font-semibold text-[#ededed]">{job.title}</h3>
                  <p className="text-[#3b82f6] text-sm font-medium">{job.company}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-xs text-zinc-400">{job.dates}</p>
                  <p className="text-xs text-zinc-600">{job.location}</p>
                </div>
              </div>

              <ul className="mt-2.5 space-y-1.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
