"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Card from "./ui/Card";

export default function X402Card() {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Card
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-full group p-0"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
        }}
      />

      {/* Shimmer Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

      <div className="relative p-6 h-full flex flex-col justify-between overflow-hidden z-20">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-green-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-500 group-hover:bg-emerald-500/20"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-muted rounded-lg border border-border group-hover:border-green-500/50 transition-colors">
              <svg
                className="w-6 h-6 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-clash-display-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
              X402 Integration
            </h3>
          </div>

          <p className="text-muted-foreground text-base mb-6 leading-relaxed">
            Monetize your content with{" "}
            <span className="text-green-600 dark:text-green-400 font-medium">
              micropayments
            </span>
            . Implement{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              X402 Protocol
            </span>{" "}
            for seamless pay-per-access — no subscriptions, no intermediaries.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          <a
            href="https://calendar.app.google/qt6ytm3NXidsqPYr8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-foreground text-background py-2.5 px-4 rounded-xl font-clash-display-medium text-sm text-center hover:opacity-90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/10 hover:shadow-green-500/20"
          >
            <span>Book Call</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </a>
          <Link
            href="/secret"
            className="flex-1 bg-muted text-foreground py-2.5 px-4 rounded-xl font-clash-display-medium text-sm text-center hover:bg-accent transition-all border border-border hover:border-muted-foreground/50 flex items-center justify-center gap-2"
          >
            <span>Try X402 Live</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
}
