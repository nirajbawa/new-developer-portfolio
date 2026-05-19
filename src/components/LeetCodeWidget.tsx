"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/themeSlice";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

// Custom LeetCode SVG Logo Icon (correct official path)
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export function LeetCodeWidget() {
  const reduxTheme = useSelector(selectTheme);
  const [mounted, setMounted] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchCalendar = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch("/api/leetcode-calendar?username=nirajbava222");
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        if (data.activities && data.activities.length > 0) {
          setActivities(data.activities);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendar();
  }, [mounted]);

  const isDark =
    reduxTheme === "dark" ||
    (reduxTheme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (!mounted) {
    return (
      <div className="h-44 animate-pulse bg-muted/20 rounded-xl border border-border/10" />
    );
  }

  // LeetCode-branded warm orange-yellow theme
  const customTheme = {
    light: ["#f1f5f9", "#fef3c7", "#fcd34d", "#f59e0b", "#d97706"],
    dark: ["#1e293b", "#451a03", "#92400e", "#d97706", "#fbbf24"],
  };

  return (
    <div
      className="relative p-5 md:p-6 space-y-4 rounded-xl border backdrop-blur-md transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? "rgba(3, 7, 18, 0.5)" : "rgba(255, 255, 255, 0.75)",
        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(203, 213, 225, 0.8)",
        boxShadow: isDark ? "none" : "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
      }}
    >
      {/* LeetCode orange accent bar */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#FFA116] via-amber-500 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFA116]/10 text-[#FFA116] border border-[#FFA116]/20">
            <LeetCodeIcon className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="text-[0.62rem] font-bold font-mono text-[#FFA116] uppercase tracking-widest">
              Live_LeetCode_Grid
            </div>
            <a
              href="https://leetcode.com/u/nirajbava222/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-foreground hover:text-[#FFA116] transition-colors"
            >
              @nirajbava222
            </a>
          </div>
        </div>

        <span className="flex items-center gap-1 text-[0.6rem] font-bold font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live Embed
        </span>
      </div>

      {/* Calendar */}
      <div className="relative space-y-2">
        <div className="text-[0.58rem] font-mono text-muted-foreground px-0.5">
          LeetCode submission calendar:
        </div>

        <div className="w-full overflow-hidden p-1 select-none pointer-events-none">
          {loading && (
            <div className="h-24 animate-pulse bg-muted/20 rounded-lg" />
          )}

          {error && !loading && (
            <div className="h-16 flex items-center justify-center text-[0.65rem] font-mono text-muted-foreground border border-border/10 rounded-lg bg-secondary/5">
              Could not load submission data
            </div>
          )}

          {!loading && !error && activities.length > 0 && (
            <>
              <ActivityCalendar
                data={activities}
                colorScheme={isDark ? "dark" : "light"}
                theme={customTheme}
                blockSize={12}
                blockMargin={3}
                showTotalCount={false}
                showColorLegend={false}
                labels={{
                  totalCount: "{{count}} submissions this year",
                }}
              />
              {/* Hide any scrollbar from inner SVG */}
              <style dangerouslySetInnerHTML={{__html: `
                .react-activity-calendar {
                  max-width: 100% !important;
                  overflow: hidden !important;
                }
                .react-activity-calendar svg {
                  max-width: 100% !important;
                  height: auto !important;
                }
              `}} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
