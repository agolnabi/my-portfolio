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
  googleScholar: string;
  openTo: string[];
};

const pillClass =
  "px-3 py-1 rounded-full text-xs font-medium bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20";
const btnOutline =
  "px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-xs font-medium hover:border-zinc-500 hover:text-white transition-colors";

export default function Hero({ hero }: { hero: HeroData }) {
  const locationBadges = hero.openTo.slice(0, 3);
  const citizenBadge = hero.openTo[3];

  return (
    <div id="about">
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 gap-10 items-start">
        {/* Left — 2/3 width: name, title, pitch */}
        <motion.div
          className="sm:col-span-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ededed] tracking-tight leading-tight">
            {hero.name}
          </h1>
          <p className="mt-3 text-lg text-[#3b82f6] font-medium">{hero.title}</p>
          <p className="mt-4 text-zinc-400 leading-relaxed">{hero.pitch}</p>
        </motion.div>

        {/* Right — 1/3 width: photo, badges, buttons */}
        <motion.div
          className="flex flex-col items-center gap-3 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-48 h-48 sm:w-full sm:h-auto sm:aspect-square rounded-2xl overflow-hidden border border-zinc-800 mx-auto">
            <Image
              src={hero.profileImage}
              alt={hero.name}
              width={352}
              height={352}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Remote · Hybrid · Greater NYC / NJ */}
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {locationBadges.map((badge) => (
              <span key={badge} className={pillClass}>{badge}</span>
            ))}
          </div>

          {/* US Citizen — No Sponsorship */}
          {citizenBadge && (
            <span className={pillClass}>{citizenBadge}</span>
          )}

          {/* Email · LinkedIn · Google Scholar */}
          <div className="flex flex-wrap justify-center gap-2 w-full mt-1">
            <a
              href={`mailto:${hero.email}`}
              className="px-4 py-2 rounded-full bg-[#3b82f6] text-white text-xs font-medium hover:bg-blue-500 transition-colors"
            >
              Email Me
            </a>
            <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className={btnOutline}>
              LinkedIn
            </a>
            <a href={hero.googleScholar} target="_blank" rel="noopener noreferrer" className={btnOutline}>
              Google Scholar
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
