"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../app/providers";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function IdentityGlitch() {
  const { theme, toggleTheme } = useTheme();
  const [text, setText] = useState("Patrick Barattin");
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const dayName = "Patrick Barattin";
  const targetNightName = "Nittarab";

  useEffect(() => {
    if (theme === "day") {
      setText(dayName);
    } else {
      setText(targetNightName);
    }
  }, [theme]);

  const triggerGlitch = (finalText) => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= finalText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  // Auto-glitch effect to attract attention
  useEffect(() => {
    const autoGlitch = setInterval(() => {
      // We removed the !isHovering check to handle mobile "sticky hover".
      // On mobile, tapping sets isHovering=true and it stays there.
      // By allowing this interval to run, we ensure the text eventually
      // "glitches back" to its default state even if 'hovered',
      // creating a temporary reveal effect on touch.
      if (theme === "day") {
        triggerGlitch(dayName);
      } else {
        triggerGlitch(targetNightName);
      }
    }, 4000); // Glitch every 4 seconds

    return () => clearInterval(autoGlitch);
  }, [theme, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (theme === "day") {
      triggerGlitch(targetNightName);
    } else {
      triggerGlitch(dayName);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (theme === "day") {
      triggerGlitch(dayName);
    } else {
      triggerGlitch(targetNightName);
    }
  };

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div
      className="relative inline-block group cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-clash-display-semibold mb-4 sm:mb-6 transition-colors duration-300 text-foreground dark:text-green-400 dark:font-mono dark:tracking-wider dark:shadow-green-500/50 dark:drop-shadow-md"
        layout
      >
        {text}
      </motion.h1>
      {/* Glitch Overlay Effect on Hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-red-500/20 mix-blend-overlay -z-10 blur-sm"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
