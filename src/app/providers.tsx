"use client";

import { Provider, useSelector } from "react-redux";
import { store, persistor } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState, createContext, useContext } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { selectTheme } from "@/redux/themeSlice";
import { PersistGate } from "redux-persist/integration/react";

import { usePathname } from "next/navigation";
import FeedbackPopup from "@/components/FeedbackPopup";

// Create context to bypass entrance animations globally if they have already run once
const AnimateBypassContext = createContext<boolean>(false);

export function useAnimateBypass() {
  return useContext(AnimateBypassContext);
}

function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href");
        if (href && (href.startsWith("#") || href.includes("#"))) {
          // Enable smooth scroll only for local anchor targets
          document.documentElement.style.scrollBehavior = "smooth";
        } else {
          // Snap instantly for route transitions
          document.documentElement.style.scrollBehavior = "auto";
        }
      }
    };

    window.addEventListener("click", handleAnchorClick, { capture: true });
    return () => window.removeEventListener("click", handleAnchorClick, { capture: true });
  }, []);

  useEffect(() => {
    // Snaps browser to top instantly on pathname change
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ThemeSync() {
  const reduxTheme = useSelector(selectTheme);
  const { theme: nextTheme, setTheme: setNextTheme } = useTheme();

  // Synchronize Redux theme changes with next-themes
  useEffect(() => {
    if (reduxTheme && reduxTheme !== nextTheme) {
      setNextTheme(reduxTheme);
    }
  }, [reduxTheme, nextTheme, setNextTheme]);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  const [animationsPlayed, setAnimationsPlayed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).__portfolio_animations_played) {
        setAnimationsPlayed(true);
      } else {
        // Set to true after a timeout of 2.5 seconds to allow initial page animations to finish playing.
        const timer = setTimeout(() => {
          (window as any).__portfolio_animations_played = true;
          setAnimationsPlayed(true);
        }, 2500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AnimateBypassContext.Provider value={animationsPlayed}>
              <ThemeSync />
              <ScrollFix />
              {children}
              <FeedbackPopup />
            </AnimateBypassContext.Provider>
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
