"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroData = {
  name: string;
  title: string;
  pitch: string;
  profileImage: string;
  email: string;
  linkedin: string;
  openTo: string[];
};

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <div id="about">
      <div className="flex flex-col-reverse sm:flex-row gap-10 items-center sm:items-start">
        {/* Left: name, title, pitch */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ededed] tracking-tight leading-tight">
            {hero.name}
          </h1>
          <p className="mt-3 text-lg text-[#3b82f6] font-medium">{hero.title}</p>
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-xl">{hero.pitch}</p>
        </motion.div>

        {/* Right: photo + badges + buttons */}
        <motion.div
          className="shrink-0 flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-72 h-72 sm:w-[352px] sm:h-[352px] rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src={hero.profileImage}
              alt={hero.name}
              width={352}
              height={352}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 w-full">
            {hero.openTo.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex gap-3 justify-center w-full">
            <a
              href={`mailto:${hero.email}`}
              className="px-5 py-2.5 rounded-full bg-[#3b82f6] text-white text-sm font-medium hover:bg-blue-500 transition-colors"
            >
              Email Me
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
