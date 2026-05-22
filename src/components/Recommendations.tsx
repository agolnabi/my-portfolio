"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Recommendation = {
  name: string;
  title: string;
  date: string;
  text: string;
};

export default function Recommendations({ recommendations }: { recommendations: Recommendation[] }) {
  return (
    <section id="recommendations">
      <SectionHeading>Recommendations</SectionHeading>
      <div className="space-y-8">
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-xl border border-zinc-200 p-6"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
              <div>
                <p className="font-semibold text-zinc-900">{rec.name}</p>
                <p className="text-sm text-blue-700">{rec.title}</p>
              </div>
              <p className="text-sm text-zinc-400 shrink-0">{rec.date}</p>
            </div>
            <div className="text-sm text-zinc-600 leading-relaxed space-y-3">
              {rec.text.split("\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
