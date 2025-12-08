import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500
        bg-white/60 backdrop-blur-xl shadow-bento ring-1 ring-black/5 text-card-foreground
        hover:scale-[1.02] hover:shadow-xl hover:bg-white/80
        dark:bg-card dark:bg-opacity-70 dark:backdrop-blur-md dark:shadow-glow dark:ring-0 dark:border dark:border-border
        ${className}
      `}
    >
      {children}
    </div>
  );
}
