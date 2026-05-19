"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Code2, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-accent-foreground/20 dark:border-white/25 bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "border-b border-transparent bg-transparent py-5 shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Left Signature Logo */}
        <a href="/#home" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="font-sans text-lg font-bold tracking-tight text-foreground">
            NIRAJ <span className="text-accent-foreground">BAVA</span>
          </span>
        </a>

        {/* Center Navigation Menu (Centered Menu Buttons) */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent-foreground hover:bg-secondary/40 rounded-lg"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Actions & Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <a
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-semibold shadow-sm rounded-lg px-4 py-2 flex items-center justify-center"
            )}
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 border-b border-border bg-background/95 backdrop-blur-lg px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-2.5 text-base font-medium text-foreground border-b border-border/40 hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full mt-4 bg-primary text-primary-foreground font-semibold text-center block py-2.5 rounded-lg flex items-center justify-center"
              )}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
