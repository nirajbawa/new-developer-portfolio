"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "@/redux/themeSlice";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const dispatch = useDispatch();
  const reduxTheme = useSelector(selectTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9" aria-label="Loading theme..." />;
  }

  // Determine active theme (handle "system" by reading media queries)
  const isDark =
    reduxTheme === "dark" ||
    (reduxTheme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    dispatch(setTheme(isDark ? "light" : "dark"));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 text-foreground rounded-lg transition-colors hover:bg-secondary hover:text-secondary-foreground"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-slate-800 transition-transform duration-300 hover:-rotate-12" />
      )}
    </Button>
  );
}
