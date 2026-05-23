"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Recommendation = {
  name: string;
  title: string;
  date: string;
  text: string;
};

export default function Recommendations({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  return (
    <div id="recommendations">
      <SectionHeading>Recommendations</SectionHeading>
      <div className="flex flex-col gap-5">
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors"
          >
            <svg
              className="text-[#3b82f6] opacity-60 shrink-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="flex flex-col gap-2">
              {rec.text.split("\n").map((para, j) => (
                <p key={j} className="text-sm text-zinc-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="flex items-start justify-between gap-4 pt-2 border-t border-zinc-800">
              <div>
                <p className="text-sm font-semibold text-[#ededed]">{rec.name}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{rec.title}</p>
              </div>
              <span className="text-xs text-zinc-500 shrink-0 pt-0.5">{rec.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
