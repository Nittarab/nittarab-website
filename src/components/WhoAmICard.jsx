"use client";

import Image from "next/image";
import { useTheme } from "../app/providers";

export default function WhoAmICard() {
  const { theme } = useTheme();

  return (
    <a
      href="https://whoamion.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className={`block h-full p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden ${
        theme === "night"
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          theme === "night"
            ? "bg-gradient-to-r from-green-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100"
            : "bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100"
        }`}
      ></div>

      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3
            className={`text-2xl font-clash-display-semibold transition-colors ${
              theme === "night"
                ? "text-white group-hover:text-green-400"
                : "text-gray-900 group-hover:text-blue-600"
            }`}
          >
            Who Am I on AI?
          </h3>
          <span
            className={`px-3 py-1 text-xs font-clash-display-medium rounded-full transition-colors ${
              theme === "night"
                ? "bg-green-900/30 text-green-400 border border-green-800"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            New Project
          </span>
        </div>

        <p
          className={`font-clash-display-medium mb-6 leading-relaxed transition-colors ${
            theme === "night" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Discover what models know about brand and product.
        </p>

        <div
          className={`relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-inner border transition-colors mt-auto ${
            theme === "night"
              ? "border-gray-700 group-hover:border-green-500/50"
              : "border-gray-200 group-hover:border-blue-200"
          }`}
        >
          <Image
            src="/whoami_preview.webp"
            alt="Who Am I on AI Preview"
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </a>
  );
}
