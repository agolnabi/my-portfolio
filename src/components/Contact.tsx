"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type ContactData = {
  name: string;
  email: string;
  linkedin: string;
  openTo: string[];
};

export default function Contact({ hero }: { hero: ContactData }) {
  return (
    <div id="contact">
      <SectionHeading>Contact</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-[#ededed]">Let&apos;s Connect</h3>
        <p className="mt-3 text-zinc-400 max-w-md mx-auto">
          Open to leadership roles in MedTech R&D, life sciences, and healthcare technology.
          Feel free to reach out directly.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {hero.openTo.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:${hero.email}`}
            className="px-6 py-3 rounded-full bg-[#3b82f6] text-white text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            {hero.email}
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </div>
  );
}
