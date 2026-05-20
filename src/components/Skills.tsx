"use client";

import React from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Skills() {
  const { skills } = cvData;

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10"
    >
      {/* Dynamic Cyber Ambient Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-[20%] right-[10%] w-[32rem] h-[32rem] rounded-full bg-primary/5 dark:bg-primary/[0.02] blur-[130px] -z-10" />
        <div className="absolute bottom-[20%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.02] blur-[130px] -z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[64rem]">
        {/* Section Heading & Cyber Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-[0.65rem] font-mono text-primary uppercase tracking-[0.25em]">
              Expertise & Technologies
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Skills Mind Map
          </h2>
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className="relative w-full mt-4 sm:mt-10">
          {/* Central Vertical Axis Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/40 to-transparent -translate-x-1/2 z-0" />

          {/* Root Node on Axis */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-start md:justify-center mb-16 z-20 pl-[48px] md:pl-0"
          >
            {/* Mobile Axis Point for Root */}
            <div className="md:hidden absolute left-[24px] top-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-primary -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(var(--primary),0.6)] z-20" />
            {/* Mobile Connector */}
            <div className="md:hidden absolute left-[24px] top-1/2 w-6 h-[2px] bg-primary/40 z-0 -translate-y-1/2" />

            <div className="px-8 py-3 rounded-2xl border-2 border-primary/50 bg-background/90 backdrop-blur-md shadow-[0_0_20px_rgba(var(--primary),0.3)] relative group">
              <span className="text-lg font-black text-primary uppercase tracking-widest relative z-10">
                Core Skills
              </span>
              <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-0" />
            </div>
          </motion.div>

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-6 pb-24">
            {skills.map((category, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={category.category}
                  className={`relative flex flex-col md:flex-row items-center w-full z-10 ${
                    idx > 0 ? "md:-mt-6" : ""
                  }`}
                >
                  {/* Glowing Node Point directly on Axis */}
                  <div className="absolute left-[24px] md:left-1/2 top-8 w-4 h-4 rounded-full bg-background border-[3px] border-primary -translate-x-1/2 shadow-[0_0_12px_rgba(var(--primary),0.6)] z-20 transition-transform duration-300 hover:scale-125" />

                  {/* Left Column Spacer or Card Container */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-12 md:pl-0 pl-16 flex md:justify-end justify-start relative ${!isEven ? 'hidden md:flex' : ''}`}>
                    {isEven && (
                      <>
                        {/* Mobile Horizontal Connector */}
                        <div className="md:hidden absolute left-[24px] top-8 w-10 h-[2px] bg-primary/30 z-0" />
                        <motion.div
                          initial={{ opacity: 0, x: "var(--slide-from-x, -30px)", y: 10 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full max-w-md group p-6 rounded-2xl border border-border/40 bg-background/60 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col gap-4 relative will-change-transform [--slide-from-x:30px] md:[--slide-from-x:-30px]"
                        >
                          {/* Connecting Line to Axis (Desktop) */}
                          <div className="hidden md:block absolute top-[2.3rem] right-[-3rem] w-12 h-[2px] bg-primary/30 z-0" />
                          
                          <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                            {category.category}
                          </h3>
                          <div className="flex flex-wrap gap-2.5">
                            {category.items.map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-lg border border-accent-foreground/10 bg-secondary/20 text-xs font-semibold text-muted-foreground group-hover:border-primary/40 hover:!bg-primary/10 hover:!text-primary transition-colors duration-300 shadow-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Middle Axis Space */}
                  <div className="hidden md:block w-0" />

                  {/* Right Column Spacer or Card Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-12 pr-0 flex justify-start relative ${isEven ? 'hidden md:flex' : ''}`}>
                    {!isEven && (
                      <>
                        {/* Mobile Horizontal Connector */}
                        <div className="md:hidden absolute left-[24px] top-8 w-10 h-[2px] bg-primary/30 z-0" />

                        <motion.div
                          initial={{ opacity: 0, x: "var(--slide-from-x, 30px)", y: 10 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full max-w-md group p-6 rounded-2xl border border-border/40 bg-background/60 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col gap-4 relative will-change-transform [--slide-from-x:30px]"
                        >
                          {/* Connecting Line to Axis (Desktop) */}
                          <div className="hidden md:block absolute top-[2.3rem] left-[-3rem] w-12 h-[2px] bg-primary/30 z-0" />

                          <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                            {category.category}
                          </h3>
                          <div className="flex flex-wrap gap-2.5">
                            {category.items.map((item, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-lg border border-accent-foreground/10 bg-secondary/20 text-xs font-semibold text-muted-foreground group-hover:border-primary/40 hover:!bg-primary/10 hover:!text-primary transition-colors duration-300 shadow-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Creative SVG Transition Section Connector (Desktop) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-24 text-primary/10 fill-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C 300 60, 400 100, 600 100 C 800 100, 900 60, 1200 60"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          <path
            d="M0 80 C 300 80, 400 120, 600 120 C 800 120, 900 80, 1200 80"
            stroke="url(#skillsNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="skillsNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#skillsNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="skillsNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
