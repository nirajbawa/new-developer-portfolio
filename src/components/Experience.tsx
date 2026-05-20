"use client";

import { useState, useEffect } from "react";
import { cvData, WorkExperience } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useAnimateBypass } from "@/app/providers";
import { Portal } from "@/components/Portal";

// Company logo imports
import inventursLogo from "@/assets/images/inventurs_logo.jpg";
import vrindaLogo from "@/assets/images/vrinda_papers_private_limited_logo.jpg";
import dreamcareLogo from "@/assets/images/dreamcare_developerss_logo.jpg";
import neuronexLogo from "@/assets/images/neuronex_developers_logo.jpg";

// Map company names to their logos and website URLs
const companyMeta: Record<string, { logo: StaticImageData; url: string; techStack: string[] }> = {
  "NEURONEX DEVELOPERS": {
    logo: neuronexLogo,
    url: "https://www.neuronexdevelopers.com/",
    techStack: ["WhatsApp API", "AWS", "Python", "RAG", "FastAPI", "React Native"],
  },
  "DREAMCARE DEVELOPERS": {
    logo: dreamcareLogo,
    url: "https://www.dreamcaredevelopers.com/",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Nginx", "Redis"],
  },
  "INVENTURS CUBE LLP": {
    logo: inventursLogo,
    url: "https://inventurs.com/",
    techStack: ["React", "Node.js", "FastAPI", "Python", "Flask", "MongoDB"],
  },
  "VRINDA PAPERS PRIVATE LIMITED": {
    logo: vrindaLogo,
    url: "https://vrindapapers.com/",
    techStack: ["PHP", "WordPress", "Google Apps Script", "MySQL"],
  },
};

// Group experiences by company for the modal view
function groupByCompany(experiences: WorkExperience[]) {
  const groups: Record<string, WorkExperience[]> = {};
  for (const exp of experiences) {
    if (!groups[exp.company]) groups[exp.company] = [];
    groups[exp.company].push(exp);
  }
  return groups;
}

// Interactive detailed experience modal with blur backdrop
function ExperienceModal({
  experience,
  onClose,
}: {
  experience: WorkExperience;
  onClose: () => void;
}) {
  const { company, role, location, duration, bullets, link } = experience;
  const meta = companyMeta[company];
  const companyUrl = meta?.url || link || "#";

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Blurred Backdrop */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />

        {/* Modal Card Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[80dvh] overflow-y-auto rounded-2xl border border-accent-foreground/15 bg-background/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Company Header */}
          <div className="flex items-center gap-4">
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-border/50 bg-white p-2.5 flex items-center justify-center shadow-md hover:border-primary/50 transition-all duration-300"
            >
              {meta?.logo ? (
                <Image
                  src={meta.logo}
                  alt={`${company} logo`}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-lg font-bold rounded-lg">
                  {company.charAt(0)}
                </div>
              )}
            </a>
            <div>
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-foreground hover:text-primary transition-colors"
              >
                {company}
              </a>
              <p className="text-xs text-muted-foreground">
                {role}
              </p>
            </div>
          </div>

          {/* Position Details */}
          <div className="space-y-5">
            <div className="relative pl-5 border-l-2 border-primary/30">
              {/* Position Dot */}
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
              
              <div className="space-y-2">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{role}</h4>
                  <p className="text-[0.65rem] font-mono text-muted-foreground/70 uppercase tracking-wider">
                    {duration} · {location}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5">
                  {bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          {meta?.techStack && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
              {meta.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[0.55rem] font-mono font-medium rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Certificate Button */}
          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary text-xs font-bold font-mono uppercase tracking-wider hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M16 13H8M16 17H8M10 9H8" />
              </svg>
              View Certificate
            </a>
          )}
        </motion.div>
      </motion.div>
    </Portal>
  );
}

export function Experience() {
  const { experience } = cvData;
  const bypass = useAnimateBypass();
  const [showAll, setShowAll] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null);

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedExperience]);

  // Default to showing only 4 timeline events at single time
  const visibleExperiences = showAll ? experience : experience.slice(0, 4);

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5"
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
          initial={bypass ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-[0.65rem] font-mono text-primary uppercase tracking-[0.25em]">
              Professional History
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Work Experience
          </h2>
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className="relative w-full">
          {/* Central Vertical Axis Line */}
          <div className="absolute left-[24px] md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent -translate-x-1/2 z-0" />

          {/* Timeline Nodes */}
          <div className="space-y-6">
            {visibleExperiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const meta = companyMeta[exp.company];
              const companyUrl = meta?.url || exp.link || "#";

              return (
                <div
                  key={`${exp.company}-${idx}`}
                  className={`relative flex flex-col md:flex-row items-stretch w-full z-10 ${idx > 0 ? "md:-mt-16" : ""}`}
                >
                  {/* Glowing Node Point directly on Axis */}
                  <div className="absolute left-[24px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-background border-[3px] border-primary -translate-x-1/2 shadow-[0_0_12px_rgba(var(--primary),0.6)] z-20 flex items-center justify-center transition-transform duration-300 hover:scale-125" />

                  {/* Left Column Spacer or Card Container */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 md:pl-0 pl-12 flex md:justify-end justify-start">
                    {isEven ? (
                      <motion.div
                        initial={bypass ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-md group p-6 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-4 cursor-pointer will-change-[transform,opacity]"
                        onClick={() => setSelectedExperience(exp)}
                      >
                        {/* Company Logo, Name & Meta (Logo on right, text on left) */}
                        <div className="flex items-start justify-between gap-4 flex-row-reverse text-left">
                          <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-shrink-0 w-11 h-11 rounded-xl overflow-hidden border border-border/50 bg-white p-1.5 flex items-center justify-center shadow-sm hover:border-primary/50 hover:shadow-[0_0_12px_rgba(var(--primary),0.3)] transition-all duration-300"
                          >
                            {meta?.logo ? (
                              <Image
                                src={meta.logo}
                                alt={`${exp.company} logo`}
                                width={44}
                                height={44}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-sm font-bold rounded-lg">
                                {exp.company.charAt(0)}
                              </div>
                            )}
                          </a>
                          <div className="flex-1 min-w-0">
                            <a
                              href={companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-sm font-bold text-foreground hover:text-primary transition-colors duration-200 line-clamp-1"
                            >
                              {exp.company}
                            </a>
                            <p className="text-xs text-muted-foreground font-medium mt-0.5 line-clamp-1">
                              {exp.role}
                            </p>
                            <p className="text-[0.6rem] font-mono text-muted-foreground/70 uppercase tracking-wider mt-1">
                              {exp.duration}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Highlight */}
                        {meta?.techStack && (
                          <div className="flex flex-wrap gap-1.5">
                            {meta.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 text-[0.55rem] font-mono font-medium rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="text-[0.65rem] text-primary font-mono font-bold mt-1 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                          Show Details
                          <span>&rarr;</span>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden md:block w-full h-full" />
                    )}
                  </div>

                  {/* Middle Axis Space (for layout alignment) */}
                  <div className="hidden md:block w-0" />

                  {/* Right Column Spacer or Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 pr-0 flex justify-start">
                    {!isEven ? (
                      <motion.div
                        initial={bypass ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-md group p-6 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-4 cursor-pointer will-change-[transform,opacity]"
                        onClick={() => setSelectedExperience(exp)}
                      >
                        <div className="flex items-start gap-4">
                          <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-shrink-0 w-11 h-11 rounded-xl overflow-hidden border border-border/50 bg-white p-1.5 flex items-center justify-center shadow-sm hover:border-primary/50 hover:shadow-[0_0_12px_rgba(var(--primary),0.3)] transition-all duration-300"
                          >
                            {meta?.logo ? (
                              <Image
                                src={meta.logo}
                                alt={`${exp.company} logo`}
                                width={44}
                                height={44}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-sm font-bold rounded-lg">
                                {exp.company.charAt(0)}
                              </div>
                            )}
                          </a>
                          <div className="flex-1 min-w-0">
                            <a
                              href={companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-sm font-bold text-foreground hover:text-primary transition-colors duration-200 line-clamp-1"
                            >
                              {exp.company}
                            </a>
                            <p className="text-xs text-muted-foreground font-medium mt-0.5 line-clamp-1">
                              {exp.role}
                            </p>
                            <p className="text-[0.65rem] font-mono text-muted-foreground/70 uppercase tracking-wider mt-1">
                              {exp.duration}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Highlight */}
                        {meta?.techStack && (
                          <div className="flex flex-wrap gap-1.5">
                            {meta.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 text-[0.55rem] font-mono font-medium rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="text-[0.65rem] text-primary font-mono font-bold mt-1 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                          Show Details
                          <span>&rarr;</span>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden md:block w-full h-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expand / Collapse Action Trigger */}
        {experience.length > 4 && (
          <motion.div
            initial={bypass ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-14"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md text-xs font-bold font-mono text-foreground uppercase tracking-wider hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </>
              ) : (
                <>
                  Show All ({experience.length})
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>

      {/* Detail Modal Component */}
      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal
            experience={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>

      {/* Creative SVG Transition Section Connector (Desktop) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-24 text-primary/10 fill-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Main sweeping curve connecting the timeline axis */}
          <path
            d="M600 0 C600 40, 500 80, 0 80 M600 0 C600 40, 700 80, 1200 80"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          {/* A glowing secondary neon wave line */}
          <path
            d="M600 0 C600 60, 450 100, 0 100 M600 0 C600 60, 750 100, 1200 100"
            stroke="url(#neonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
      <div className="block md:hidden absolute bottom-0 left-[48px] right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-20 text-primary/10 fill-none"
          viewBox="0 0 327 120"
          preserveAspectRatio="none"
        >
          {/* Main sweeping curve connecting the timeline axis at x = 0 */}
          <path
            d="M0 0 C0 40, 100 80, 327 80"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          {/* A glowing secondary neon wave line */}
          <path
            d="M0 0 C0 60, 120 100, 327 100"
            stroke="url(#neonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="neonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
