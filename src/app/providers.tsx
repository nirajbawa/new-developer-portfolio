"use client";

import { Provider, useSelector } from "react-redux";
import { store, persistor } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { selectTheme } from "@/redux/themeSlice";
import { PersistGate } from "redux-persist/integration/react";

import { usePathname } from "next/navigation";
import FeedbackPopup from "@/components/FeedbackPopup";

function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    // Snaps browser to top instantly on pathname change, bypassing standard smooth scroll lags
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      html.style.scrollBehavior = "smooth";
    }, 100);

    return () => clearTimeout(timer);
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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeSync />
            <ScrollFix />
            {children}
            <FeedbackPopup />
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
