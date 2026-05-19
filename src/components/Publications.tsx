"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

// Image Imports
import researchgateLogo from "@/assets/images/researchgate.webp";
import ssrnLogo from "@/assets/images/ssrn-logo.jpg";

interface Publication {
  id: number;
  title: string;
  publisher: string;
  description: string;
  link: string;
  date: string;
  logo: any;
  tags: string[];
}

const publicationsList: Publication[] = [
  {
    id: 1,
    title: "Justice-As-A-Protocol: AI-driven ODR Platform",
    publisher: "ResearchGate / India Legal",
    description: "Co-authored a paper on an AI-driven Online Dispute Resolution (ODR) platform for India, integrating key legal statutes and smart contracts to automate dispute resolution and enhance access to justice.",
    link: "https://www.researchgate.net/publication/393324377_Justice-as-a-Protocol_Designing_a_Stateless_Scalable_and_Self-Enforcing_Online_Dispute_Resolution_ODR_System_for_21st_Century_India",
    date: "Jul 2025",
    logo: researchgateLogo,
    tags: ["Artificial Intelligence", "Smart Contracts", "LegalTech", "Web3"]
  },
  {
    id: 2,
    title: "Enterprise AI Agent Ecosystems: Architecture, Economics, and the Composition Gap",
    publisher: "SSRN / SPPU / Northeastern University",
    description: "Co-authored a paper analyzing enterprise AI ecosystems, decomposing architectural, protocol, and economic layers. Identifies the 'composition gap' and proposes a federated Trust-Aware Ranking System (TARS) to govern agentic environments.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6622601",
    date: "May 2026",
    logo: ssrnLogo,
    tags: ["AI Agents", "Multi-Agent Systems", "TARS", "Agentic Web", "Economics"]
  }
];

export default function Publications() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Initially show 2 publications, click expand to show all
  const visiblePublications = isExpanded ? publicationsList : publicationsList.slice(0, 2);

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
    <section id="publications" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative Radial Gradients for Premium Mix */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-[0.65rem] font-mono text-primary uppercase tracking-[0.25em]">
              Scholarly Works
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Publications
          </h2>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visiblePublications.map((pub) => (
              <motion.a
                key={pub.id}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                layout
                whileHover={{ y: -4, scale: 1.005 }}
                className="p-4 sm:p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md hover:border-primary/40 transition-all duration-300 flex flex-col gap-3 shadow-md group relative overflow-hidden"
              >
                {/* Visual Accent Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Main Content Area - Full Width */}
                <div className="flex flex-col gap-2.5 relative z-10 w-full">
                  {/* Header: Logo, Publisher & Date */}
                  <div className="flex justify-between items-center gap-2 flex-wrap w-full">
                    <div className="flex items-center gap-2.5">
                      {/* Integrated inline branding logo */}
                      <div className="w-8 h-8 rounded bg-white border border-border/40 flex items-center justify-center p-1 flex-shrink-0 shadow-sm">
                        <Image
                          src={pub.logo}
                          alt={pub.publisher}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                        {pub.publisher}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground font-semibold">
                      {pub.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug tracking-tight">
                    {pub.title}
                  </h3>

                  {/* Description Container */}
                  <div className="p-2.5 rounded-lg bg-secondary/15 border border-border/20 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pub.description}
                  </div>

                  {/* Skills/Tags Footer */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-accent-foreground/5 w-full">
                    {pub.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand Trigger Button with animated \/ icon - only shown if not expanded and there are more publications than visible initially */}
        {!isExpanded && publicationsList.length > 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-6 py-3 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-[0_0_20px_rgba(59,130,246,0.15)] group"
            >
              <span>Show More</span>
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
            stroke="url(#publicationsNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="publicationsNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#publicationsNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="publicationsNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
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
