"use client";

import Image from "next/image";
import Card from "./ui/Card";

export default function WhoAmICard() {
  return (
    <a
      href="https://whoamion.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
    >
      <Card className="h-full p-6">
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-green-900/10 dark:to-blue-900/10"></div>

        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-clash-display-semibold transition-colors text-foreground group-hover:text-primary">
              Who Am I on AI?
            </h3>
            <span className="px-3 py-1 text-xs font-clash-display-medium rounded-full transition-colors bg-blue-100 text-blue-600 dark:bg-green-900/30 dark:text-green-400 dark:border dark:border-green-800">
              New Project
            </span>
          </div>

          <p className="font-clash-display-medium mb-6 leading-relaxed transition-colors text-muted-foreground">
            Discover what models know about brand and product.
          </p>

          <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-inner border transition-colors mt-auto border-muted group-hover:border-primary/50">
            <Image
              src="/whoami_preview.webp"
              alt="Who Am I on AI Preview"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </Card>
    </a>
  );
}
