"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import XCard from "../components/XCard";
import SubstackCard from "../components/SubstackCard";
import LinkedInCard from "../components/LinkedInCard";
import MapsCard from "../components/MapsCard";
import GitHubCard from "../components/GitHubCard";
import WhoAmICard from "../components/WhoAmICard";
import ConsultationCard from "../components/ConsultationCard";
import IdentityGlitch from "../components/IdentityGlitch";
import CyberOverlay from "../components/CyberOverlay";
import { useTheme } from "./providers";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === "night" ? "bg-black text-green-400" : "bg-white font-clash-display"}`}
    >
      <CyberOverlay />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row items-start justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
          <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center lg:justify-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/nittarab_profile.webp"
                alt="Patrick Barattin"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <IdentityGlitch />

          <h2
            className={`text-lg sm:text-xl font-clash-display-medium mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left transition-colors duration-300 ${theme === "night" ? "text-green-300" : "text-gray-800"}`}
          >
            {theme === "day"
              ? "Senior Software Engineer | AI Engineering Consultant | Fintech Enthusiast"
              : "Product Engineer | Serial Builder | Night Owl"}
          </h2>
          <p
            className={`text-sm sm:text-base font-clash-display-regular mb-4 sm:mb-5 max-w-md mx-auto lg:mx-0 text-center lg:text-left transition-colors duration-300 ${theme === "night" ? "text-green-500/80" : "text-gray-600"}`}
          >
            {theme === "day"
              ? "By day, I build conversational AI at on.com."
              : "By night, I ship products and explore new interesting tech."}
          </p>
          <p
            className={`text-sm sm:text-base font-clash-display-regular mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 text-center lg:text-left transition-colors duration-300 ${theme === "night" ? "text-green-500/80" : "text-gray-600"}`}
          >
            {theme === "day"
              ? "By night, I build AI agents and write about the future of software development on my Substack."
              : "Turning ideas into reality. One commit at a time."}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full lg:w-2/3 grid gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0"
        >
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 auto-rows-auto gap-6">
            <motion.div variants={item} className="col-span-3">
              <WhoAmICard />
            </motion.div>
            <motion.div variants={item} className="col-span-2 row-span-2">
              <ConsultationCard />
            </motion.div>
            <motion.div variants={item} className="col-span-1">
              <XCard />
            </motion.div>
            <motion.div variants={item} className="col-span-1">
              <LinkedInCard />
            </motion.div>

            <motion.div variants={item} className="col-span-2">
              <GitHubCard />
            </motion.div>
            <motion.div variants={item} className="col-span-1 h-full">
              <MapsCard />
            </motion.div>

            <motion.div variants={item} className="col-span-3">
              <SubstackCard />
            </motion.div>
          </div>

          {/* Mobile-Tablet Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
            <motion.div variants={item} className="col-span-2">
              <WhoAmICard />
            </motion.div>
            <motion.div variants={item} className="col-span-2">
              <ConsultationCard />
            </motion.div>
            <motion.div variants={item} className="col-span-1">
              <XCard />
            </motion.div>
            <motion.div variants={item} className="col-span-1">
              <LinkedInCard />
            </motion.div>
            <motion.div variants={item} className="col-span-2">
              <GitHubCard />
            </motion.div>
            <motion.div variants={item} className="col-span-2">
              <SubstackCard />
            </motion.div>
            <motion.div variants={item} className="col-span-2 h-64 sm:h-80">
              <MapsCard />
            </motion.div>
          </div>
        </motion.div>
      </main>

      <footer className="text-center py-8 sm:py-12 text-gray-500 font-clash-display-light text-sm sm:text-base">
        © {new Date().getFullYear()} Patrick Barattin. All rights reserved.
      </footer>
    </div>
  );
}
