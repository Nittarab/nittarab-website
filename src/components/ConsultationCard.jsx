"use client";

import { useState, useRef } from "react";
import Card from "./ui/Card";

export default function ConsultationCard() {
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("p.barattin@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />

      {/* Shimmer Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

      <div className="relative p-6 h-full flex flex-col justify-between overflow-hidden z-20">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-500 group-hover:bg-blue-500/20"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-muted rounded-lg border border-border group-hover:border-purple-500/50 transition-colors">
              <svg
                className="w-6 h-6 text-purple-500 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-clash-display-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
              AI Engineering
            </h3>
          </div>

          <p className="text-muted-foreground text-base mb-6 leading-relaxed">
            Transform your team with{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              AI Agents
            </span>
            ,{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Copilot
            </span>
            , and{" "}
            <span className="text-green-600 dark:text-green-400 font-medium">
              Cursor
            </span>
            . Expert guidance on context engineering and workflow optimization.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          <a
            href="https://calendar.app.google/qt6ytm3NXidsqPYr8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-foreground text-background py-2.5 px-4 rounded-xl font-clash-display-medium text-sm text-center hover:opacity-90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
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
          <button
            onClick={handleCopyEmail}
            className="flex-1 bg-muted text-foreground py-2.5 px-4 rounded-xl font-clash-display-medium text-sm text-center hover:bg-accent transition-all border border-border hover:border-muted-foreground/50 flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <span className="text-green-600 dark:text-green-400">
                  Copied!
                </span>
                <svg
                  className="w-4 h-4 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Email Me</span>
                <svg
                  className="w-4 h-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </Card>
  );
}
