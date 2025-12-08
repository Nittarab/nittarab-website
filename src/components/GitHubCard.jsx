"use client";

import { useState, useEffect, useRef } from "react";
import { fetchGithubContributions } from "../app/actions/fetchGithubContributions";
import Card from "./ui/Card";

export default function GitHubCard({ className, onLoad }) {
  const [contributionData, setContributionData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const containerRef = useRef(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    fetchGithubContributions().then((result) => {
      setContributionData(result);
      if (onLoad) onLoad();
    });
  }, [onLoad]);

  const getColorClass = (count) => {
    if (count === 0) return "bg-muted";
    if (count < 2) return "bg-green-300 dark:bg-green-900";
    if (count < 4) return "bg-green-400 dark:bg-green-700";
    if (count < 6) return "bg-green-500 dark:bg-green-500";
    return "bg-green-600 dark:bg-green-400";
  };

  const handleMouseEnter = (event, date, count) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setHoverInfo({ date, count, x, y });
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  useEffect(() => {
    if (hoverInfo && popoverRef.current) {
      const popover = popoverRef.current;
      const rect = popover.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      let left = hoverInfo.x;
      let top = hoverInfo.y - rect.height - 10;

      if (left + rect.width > containerRect.width) {
        left = containerRect.width - rect.width;
      }
      if (top < 0) {
        top = hoverInfo.y + 10;
      }

      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;
    }
  }, [hoverInfo]);

  if (!contributionData) {
    return (
      <Card className={`p-4 ${className}`}>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-5 h-5 bg-muted rounded-full animate-pulse"></div>
          <div className="h-6 w-20 bg-muted rounded animate-pulse"></div>
        </div>
        <div className="mb-4 relative">
          <div className="grid grid-cols-[repeat(17,_minmax(0,1fr))] gap-1">
            {[...Array(17)].map((_, colIndex) => (
              <div key={colIndex} className="grid grid-rows-7 gap-1">
                {[...Array(7)].map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="aspect-square rounded-lg bg-muted animate-pulse"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="h-5 w-48 bg-muted rounded mb-3 animate-pulse"></div>
        <div className="h-10 w-full bg-muted rounded-full animate-pulse"></div>
      </Card>
    );
  }

  return (
    <Card className={`p-4 ${className}`} ref={containerRef}>
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-foreground z-10"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </div>
        <p className="text-xl font-clash-display-medium text-foreground">
          GitHub
        </p>
      </div>
      <div className="mb-4 relative">
        <div className="grid grid-cols-[repeat(17,_minmax(0,1fr))] gap-1">
          {contributionData.contributions.map((column, columnIndex) => (
            <div key={columnIndex} className="grid grid-rows-7 gap-1">
              {column.map((day, dayIndex) => (
                <div
                  key={`${columnIndex}-${dayIndex}`}
                  className={`aspect-square rounded-lg ${getColorClass(
                    day.count
                  )} `}
                  onMouseEnter={(e) => handleMouseEnter(e, day.date, day.count)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          ))}
        </div>

        {hoverInfo && (
          <div
            ref={popoverRef}
            className="absolute bg-popover text-popover-foreground p-2 rounded-md text-sm z-10 shadow-md border border-border"
          >
            {`${hoverInfo.date}: ${hoverInfo.count} contributions`}
          </div>
        )}
      </div>
      <div className="text-base text-muted-foreground mb-3 font-clash-display-regular">
        Total contributions: {contributionData.totalContributions} in 17 weeks
      </div>
      <a
        href="https://github.com/nittarab"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-primary text-primary-foreground text-center py-2 px-4 rounded-full font-clash-display-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 text-base">Follow</span>
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </a>
    </Card>
  );
}
