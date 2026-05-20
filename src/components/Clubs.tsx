"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useAnimateBypass } from "@/app/providers";

// Image Imports
import matrixLogo from "@/assets/images/team_matrixs_logo.jpg";
import fossLogo from "@/assets/images/foss_club_logo.jpg";

interface Club {
  id: number;
  name: string;
  role: string;
  duration: string;
  description: string;
  logo: any;
  tags: string[];
}

const clubsList: Club[] = [
  {
    id: 1,
    name: "MATRIX ROBOTICS TEAM",
    role: "Web Team Head",
    duration: "2024 - Present",
    description: "Active member contributing to the design and development of robotics and autonomous systems, collaborating across domains to build innovative engineering solutions and participate in national-level competitions; also leading the team’s website development and management.",
    logo: matrixLogo,
    tags: ["Robotics", "Web Dev", "ROS", "Leadership"]
  },
  {
    id: 2,
    name: "FOSS Club",
    role: "OS Project Lead",
    duration: "2025 - Present",
    description: "Engaged in promoting open-source culture through collaboration, contributing to technical discussions, and supporting community-driven learning initiatives and events; currently leading the development of a club project focused on building an open-source Linux-based operating system.",
    logo: fossLogo,
    tags: ["Open Source", "Linux", "OS Dev", "Community"]
  }
];

export default function Clubs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const bypass = useAnimateBypass();

  // Initially show 2 clubs
  const visibleClubs = isExpanded ? clubsList : clubsList.slice(0, 2);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="clubs" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative Radial Gradients for Premium Mix */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={bypass ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-[0.65rem] font-mono text-primary uppercase tracking-[0.25em]">
              Communities & Leadership
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Clubs & Societies
          </h2>
        </motion.div>

        {/* Clubs Grid */}
        <motion.div
          variants={containerVariants}
          initial={bypass ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleClubs.map((club) => (
              <motion.div
                key={club.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -4, scale: 1.005 }}
                className="h-full p-4 sm:p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md hover:border-primary/40 transition-all duration-300 flex flex-col gap-3 shadow-md group relative overflow-hidden"
              >
                {/* Visual Accent Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Main Content Area - Full Width */}
                <div className="flex flex-col gap-2.5 relative z-10 w-full flex-1">
                  
                  {/* Header: Logo and Details */}
                  <div className="flex items-start gap-3 w-full">
                    {/* Column 1: Logo */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white border border-border/40 flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
                      <Image
                        src={club.logo}
                        alt={club.name}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    
                    {/* Column 2: Details */}
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex justify-between items-center gap-2 flex-wrap w-full">
                        <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20 truncate">
                          {club.role}
                        </span>
                        <span className="text-[0.65rem] sm:text-xs font-mono text-muted-foreground font-semibold shrink-0">
                          {club.duration}
                        </span>
                      </div>
                      
                      {/* Name of Club */}
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug tracking-tight">
                        {club.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description Container */}
                  <div className="flex-1 p-2.5 rounded-lg bg-secondary/15 border border-border/20 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {club.description}
                  </div>

                  {/* Skills/Tags Footer */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-accent-foreground/5 w-full">
                    {club.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand Trigger Button with animated \/ icon - only shown if not expanded and there are more clubs than visible initially */}
        {!isExpanded && clubsList.length > 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-6 py-3 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-[0_0_20px_rgba(59,130,246,0.15)] group"
            >
              <span>Expand</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-4 h-4 text-primary animate-bounce"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Creative SVG Transition Section Connector (Desktop) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-24 text-primary/10 fill-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Main sweeping curve connecting the timeline axis */}
          <path
            d="M0 60 C300 60, 450 20, 600 20 C750 20, 900 60, 1200 60"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          {/* A glowing secondary neon wave line */}
          <path
            d="M0 80 C400 80, 500 40, 600 40 C700 40, 800 80, 1200 80"
            stroke="url(#clubsNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="clubsNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="65%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Creative SVG Transition Section Connector (Mobile) */}
      <div className="block md:hidden absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-20 text-primary/10 fill-none"
          viewBox="0 0 327 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C 80 60, 120 100, 163 100 C 206 100, 247 60, 327 60"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          <path
            d="M0 80 C 80 80, 120 120, 163 120 C 206 120, 247 80, 327 80"
            stroke="url(#clubsNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="clubsNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
