"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import XCard from "../components/XCard";
import SubstackCard from "../components/SubstackCard";
import LinkedInCard from "../components/LinkedInCard";
const MapsCard = dynamic(() => import("../components/MapsCard"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/10 rounded-lg animate-pulse" />
  ),
});
import GitHubCard from "../components/GitHubCard";
import WhoAmICard from "../components/WhoAmICard";
import ConsultationCard from "../components/ConsultationCard";
import X402Card from "../components/X402Card";
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
      className={`min-h-screen flex flex-col transition-colors duration-500 bg-background text-foreground font-clash-display`}
    >
      <CyberOverlay />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row items-start justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
          <div className="mb-6 sm:mb-10 lg:mb-12 flex justify-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg border-4 border-card">
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
            className={`text-lg sm:text-xl font-clash-display-regular mb-4 sm:mb-6 max-w-md text-left transition-colors duration-300 text-muted-foreground`}
          >
            {theme === "day"
              ? "Senior Software Engineer | AI Engineering Consultant | Fintech Enthusiast"
              : "Product Engineer | Serial Builder | Night Owl"}
          </h2>
          <p
            className={`text-base sm:text-lg font-clash-display-regular mb-4 sm:mb-5 max-w-md text-left transition-colors duration-300 text-foreground/80`}
          >
            {theme === "day"
              ? "By day, I build conversational AI at on.com."
              : "By night, I ship products and explore new interesting tech."}
          </p>
          <p
            className={`text-base sm:text-lg font-clash-display-regular mb-8 sm:mb-10 max-w-md text-left transition-colors duration-300 text-foreground/80`}
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
          className="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0"
        >
          <motion.div variants={item} className="col-span-2 lg:col-span-3">
            <WhoAmICard />
          </motion.div>
          <motion.div
            variants={item}
            className="col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <ConsultationCard />
          </motion.div>
          <motion.div variants={item} className="col-span-1">
            <XCard />
          </motion.div>
          <motion.div variants={item} className="col-span-1">
            <LinkedInCard />
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <X402Card />
          </motion.div>
          <motion.div
            variants={item}
            className="col-span-2 lg:col-span-1 h-64 sm:h-auto lg:h-full"
          >
            <MapsCard />
          </motion.div>

          <motion.div variants={item} className="col-span-2 lg:col-span-1">
            <GitHubCard />
          </motion.div>
          <motion.div variants={item} className="col-span-2 lg:col-span-3">
            <SubstackCard />
          </motion.div>
        </motion.div>
      </main>

      <footer className="text-center py-8 sm:py-12 text-muted-foreground font-clash-display-light text-sm sm:text-base">
        © {new Date().getFullYear()} Patrick Barattin. All rights reserved.
      </footer>
    </div>
  );
}
