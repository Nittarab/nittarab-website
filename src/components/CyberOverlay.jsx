"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../app/providers";

export default function CyberOverlay() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {theme === "day" && (
        <motion.div
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_500px_at_var(--x)_var(--y),rgba(255,255,255,0.6),transparent_80%)]"
          animate={{
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          style={{ mixBlendMode: "soft-light" }}
        />
      )}

      {theme === "night" && (
        <>
          {/* Grid Background */}
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `
                  linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
                `,
              backgroundSize: "40px 40px",
              backgroundPosition: "center center",
              transform:
                "perspective(500px) rotateX(20deg) scale(1.5) translateY(-100px)",
              opacity: 0.2,
            }}
          />

          {/* Dynamic Flashlight/Glow */}
          <motion.div
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_600px_at_var(--x)_var(--y),rgba(0,180,50,0.25),transparent_70%)]"
            animate={{
              "--x": `${mousePosition.x}px`,
              "--y": `${mousePosition.y}px`,
            }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            style={{ opacity: 1, mixBlendMode: "screen" }}
          />

          {/* Scanlines */}
          <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />

          {/* Vignette */}
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6))]" />
        </>
      )}
    </div>
  );
}
