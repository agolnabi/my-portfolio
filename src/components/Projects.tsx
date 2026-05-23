"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  impact: string;
  tags: string[];
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div id="projects">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 flex flex-col gap-3 hover:border-zinc-700 transition-colors"
          >
            <h3 className="font-semibold text-[#ededed]">{project.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
            <p className="text-sm text-[#3b82f6] font-medium">{project.impact}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs bg-zinc-800 text-zinc-400 border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
