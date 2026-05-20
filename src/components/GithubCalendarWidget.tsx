"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/themeSlice";
import { GitHubCalendar } from "react-github-calendar";

// Stable high-fidelity local vector SVG components
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FlameIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const GitCommitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="21" y2="12" />
  </svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
  </svg>
);

export function GithubCalendarWidget() {
  const reduxTheme = useSelector(selectTheme);
  const [mounted, setMounted] = useState(false);

  // Avoid SSR hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark =
    reduxTheme === "dark" ||
    (reduxTheme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (!mounted) {
    return (
      <div className="h-[240px] animate-pulse bg-muted/20 rounded-xl border border-border/10" />
    );
  }

  // High-intensity vibrant cyber-cyan theme to make all contribution levels pop brilliantly
  const customTheme = {
    light: ["#f1f5f9", "#a5f3fc", "#22d3ee", "#06b6d4", "#0891b2"],
    dark: ["#1e293b", "#0e7490", "#06b6d4", "#22d3ee", "#67e8f9"],
  };

  return (
    <div
      className="relative p-4 space-y-3 rounded-xl border backdrop-blur-md transition-all duration-300 overflow-hidden h-[240px]"
      style={{
        backgroundColor: isDark ? "rgba(3, 7, 18, 0.5)" : "rgba(255, 255, 255, 0.75)",
        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(203, 213, 225, 0.8)",
        boxShadow: isDark ? "none" : "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
      }}
    >
      {/* Sleek Vertical Technical Side-bar */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 via-primary to-transparent" />

      {/* Widget Header Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <GithubIcon className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="text-[0.62rem] font-bold font-mono text-cyan-400 uppercase tracking-widest">
              Live_Contribution_Grid
            </div>
            <a
              href="https://github.com/nirajbawa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-foreground hover:text-cyan-400 transition-colors"
            >
              @nirajbawa
            </a>
          </div>
        </div>

        <span className="flex items-center gap-1 text-[0.6rem] font-bold font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live Embed
        </span>
      </div>

      {/* Embedded Live GitHub Activity Grid */}
      <div className="relative space-y-2">


        {/* Outer container with absolutely no scrollbar */}
        <div className="w-full overflow-hidden no-scrollbar p-1 -mb-3 flex justify-center items-center select-none pointer-events-none min-h-[112px]">
          <div className="w-full flex justify-center no-scrollbar min-h-[112px] items-center">
            <GitHubCalendar
              username="nirajbawa"
              colorScheme={isDark ? "dark" : "light"}
              theme={customTheme}
              transformData={(data: import("react-github-calendar").Activity[]) => data.slice(-140)}
              blockSize={12}
              blockMargin={3}
              showTotalCount={true}
              showColorLegend={false}
              labels={{
                totalCount: "{{count}} contributions in recent months",
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Bulletproof CSS injection to hide all inner webkit & standard scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow: hidden !important;
          max-width: 100% !important;
        }
        .no-scrollbar svg {
          max-width: 100% !important;
          height: auto !important;
        }
        .react-activity-calendar {
          max-width: 100% !important;
          overflow: hidden !important;
        }
        .react-activity-calendar svg {
          max-width: 100% !important;
          height: auto !important;
        }
      `}} />
    </div>
  );
}
