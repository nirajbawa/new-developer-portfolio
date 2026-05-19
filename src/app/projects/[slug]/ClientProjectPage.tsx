"use client";

import { useState } from "react";
import { ProjectDetail, projectDetailsList } from "@/data/projectDetails";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ClientProjectPageProps {
  project: ProjectDetail;
}

export default function ClientProjectPage({ project }: ClientProjectPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? project.carouselImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === project.carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  // Dynamically select suggested projects (excluding the current one)
  const suggestedProjects = projectDetailsList
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  // Hardcoded premium blog suggestions to give the personal hub an active publication vibe
  const suggestedBlogs = [
    {
      title: "Building Offline-First Police Tech: A Cybersecurity Case Study",
      date: "May 2026",
      readTime: "8 min read",
      topic: "Cybersecurity"
    },
    {
      title: "Local LLMs in EdTech: DeepSeek vs GPT-4 API Performance Tests",
      date: "Mar 2026",
      readTime: "5 min read",
      topic: "Generative AI"
    },
    {
      title: "GPS-Denied Aerial SLAM: Implementing Flight Navigation Protocols",
      date: "Jan 2026",
      readTime: "11 min read",
      topic: "Robotics"
    }
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-primary-foreground antialiased">
      
      {/* Background Cybernetic Grid & Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-primary/5 dark:bg-primary/[0.01] blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-1/4 left-0 w-[45rem] h-[45rem] rounded-full bg-primary/5 dark:bg-primary/[0.01] blur-[180px] -translate-x-1/2" />
      </div>

      {/* Modern Sticky Glassmorphic Header */}
      <header className="sticky top-0 left-0 w-full z-50 border-b border-border/10 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto max-w-[76rem] h-16 px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Showcase
          </Link>

          <span className="text-[0.62rem] font-mono font-bold text-muted-foreground uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full border border-border/10">
            Case Study // {project.category}
          </span>
        </div>
      </header>

      {/* Main Blog Post Structure */}
      <article className="container mx-auto max-w-[76rem] px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        
        {/* Blog Post Header Info */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8 text-left max-w-[50rem]"
        >
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.68rem] font-mono text-muted-foreground uppercase tracking-widest border-b border-border/10 pb-3">
            <span className="text-primary font-bold">{project.category}</span>
            <span>/</span>
            <span>{project.duration}</span>
            {project.collab && (
              <>
                <span>/</span>
                <span className="text-emerald-500/90 font-semibold">{project.collab}</span>
              </>
            )}
          </div>

          {/* Main Large Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-snug">
            {project.title}
          </h1>

          {/* Elegant Subtitle Tagline */}
          {project.tagline && (
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-2xl font-normal">
              {project.tagline}
            </p>
          )}

          {/* Inline Action Buttons (Like a high-end Tech Post) */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1.5 text-xs font-mono">
            {project.link && project.link !== "#" && project.link.trim() !== "" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-wider"
              >
                Code Repository
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline transition-all font-bold uppercase tracking-wider"
              >
                View Live Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                </svg>
              </a>
            )}
          </div>
        </motion.header>

        {/* Dynamic Multi-Image Carousel Slider (Centered like a Medium Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full mb-8 sm:mb-12"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-accent-foreground/10 bg-background/30 overflow-hidden shadow-2xl group">
            <Image
              src={project.carouselImages[activeImageIndex]}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 ease-out"
            />

            {/* Dark glass backdrop bottom bar */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex justify-between items-center z-20">
              <span className="text-[0.62rem] font-mono font-bold text-muted-foreground bg-background/70 px-2.5 py-1 rounded-md border border-border/10 backdrop-blur-sm">
                Exhibit {activeImageIndex + 1} of {project.carouselImages.length}
              </span>
              <button
                onClick={() => setIsZoomed(true)}
                className="w-8 h-8 rounded-lg bg-background/70 hover:bg-background border border-border/10 hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all backdrop-blur-sm shadow-md"
                aria-label="Zoom image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </button>
            </div>

            {/* Slide Navigation Dots */}
            {project.carouselImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-background/70 border border-border/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg">
                {project.carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImageIndex === idx
                        ? "bg-primary w-5"
                        : "bg-muted-foreground/45 hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Carousel Side Navigation Arrows */}
            {project.carouselImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/10 bg-background/40 hover:bg-background/80 flex items-center justify-center text-muted-foreground hover:text-foreground backdrop-blur-md shadow-lg z-20 transition-all"
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/10 bg-background/40 hover:bg-background/80 flex items-center justify-center text-muted-foreground hover:text-foreground backdrop-blur-md shadow-lg z-20 transition-all"
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* 12-Column Asymmetric Grid Layout combining main column with sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: The dynamic blog post body contents (8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 space-y-12 sm:space-y-16 text-left"
          >
            
            {/* SECTION 1: The Friction & Problem Statement */}
            {project.problem && (
              <section id="context" className="space-y-4 scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase tracking-wider font-mono">
                  The Context & Problem
                </h2>
                <div className="h-[2px] w-12 bg-primary/45 mb-4" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
                  {project.problem}
                </p>
              </section>
            )}

            {/* SECTION 2: The Core Challenge Ask */}
            {project.ask && (
              <section className="rounded-2xl border border-primary/10 bg-primary/[0.02] p-6 sm:p-8 space-y-4">
                <h3 className="text-sm font-mono font-extrabold text-primary uppercase tracking-widest">
                  The Brief / System Requirements
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  {project.ask}
                </p>
              </section>
            )}

            {/* SECTION 3: The Architecture Deep Dive */}
            <section id="tech-stack" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase tracking-wider font-mono">
                The Architecture & Implementation
              </h2>
              <div className="h-[2px] w-12 bg-primary/45 mb-4" />
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans font-normal mb-8">
                {project.solutionDesc}
              </p>

              {/* Categorized Technical Architecture Board */}
              <div className="rounded-2xl border border-border/10 bg-secondary/10 p-6 sm:p-8 space-y-6">
                <h3 className="text-xs font-mono font-extrabold text-foreground uppercase tracking-widest">
                  Technical Stack & Infrastructure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Object.entries(project.techStack).map(([category, items]) => (
                    <div key={category} className="space-y-2 text-left">
                      <h4 className="text-[0.62rem] font-mono font-extrabold text-muted-foreground uppercase tracking-wider">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[0.58rem] font-mono font-bold rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4: Key Platform Features & Capabilities */}
            <section id="capabilities" className="space-y-6 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase tracking-wider font-mono">
                Key Capabilities & Features
              </h2>
              <div className="h-[2px] w-12 bg-primary/45 mb-6" />

              <div className="space-y-6">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-xl border border-border/10 bg-background/20 hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="text-2xl mt-0.5 select-none">{feature.icon || "✓"}</span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-foreground tracking-tight uppercase leading-snug">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: Roles & Responsibilities (If applicable) */}
            {project.roles && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase tracking-wider font-mono">
                  System Stakeholders & Roles
                </h2>
                <div className="h-[2px] w-12 bg-primary/45 mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.roles.map((role, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-border/15 bg-secondary/15 space-y-2">
                      <h3 className="text-xs font-mono font-extrabold text-primary uppercase tracking-widest">
                        {role.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                        {role.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 6: Citizen Benefits (If applicable) */}
            {project.benefits && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase tracking-wider font-mono">
                  Citizen Benefits & Access
                </h2>
                <div className="h-[2px] w-12 bg-primary/45 mb-6" />
                <ul className="space-y-3 pl-1">
                  {project.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-sans">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* SECTION 7: Outcomes & Achievements */}
            {(project.outcome || project.achievements) && (
              <section id="outcomes" className="space-y-6 border-t border-border/15 pt-12 sm:pt-16 scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase tracking-wider font-mono">
                  Real-World Impact & Outcomes
                </h2>
                <div className="h-[2px] w-12 bg-primary/45 mb-6" />
                
                {project.outcome && (
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
                    {project.outcome}
                  </p>
                )}

                {project.achievements && (
                  <ul className="space-y-3.5 pt-4">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-sm sm:text-base text-emerald-500/90 dark:text-emerald-400/90">
                        <span className="flex-shrink-0 text-lg sm:text-xl leading-none select-none">🏆</span>
                        <span className="font-sans font-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

          </motion.div>

          {/* RIGHT COLUMN: Sticky, elegant blog sidebar (4 columns) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-10 lg:pl-8 lg:border-l border-border/10 text-left">
            
            {/* Widget 1: Document Table of Contents Menu links */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-extrabold text-foreground uppercase tracking-widest">
                In this case study
              </h3>
              <nav className="flex flex-col gap-2.5 text-xs font-mono">
                {project.problem && (
                  <a
                    href="#context"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    Context & Problem
                  </a>
                )}
                <a
                  href="#tech-stack"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Tech Stack & Arch
                </a>
                <a
                  href="#capabilities"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  System Capabilities
                </a>
                {(project.outcome || project.achievements) && (
                  <a
                    href="#outcomes"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    Impact & Outcomes
                  </a>
                )}
              </nav>
            </div>

            {/* Widget 2: Suggested Projects */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-extrabold text-foreground uppercase tracking-widest">
                Suggested Projects
              </h3>
              <div className="space-y-3.5">
                {suggestedProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="block p-3.5 rounded-xl border border-border/10 bg-secondary/15 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <span className="text-[0.55rem] font-mono text-primary uppercase tracking-wider block mb-1">
                      {p.category}
                    </span>
                    <h4 className="text-xs font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2 uppercase">
                      {p.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 3: Suggested Blogs / Deep Dives */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-extrabold text-foreground uppercase tracking-widest">
                Suggested Deep Dives
              </h3>
              <div className="space-y-4">
                {suggestedBlogs.map((blog, idx) => (
                  <div key={idx} className="space-y-1 group cursor-pointer">
                    <div className="flex items-center gap-2 text-[0.55rem] font-mono text-muted-foreground">
                      <span className="text-primary font-semibold">{blog.topic}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h4 className="text-xs font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {blog.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* Footer Blog Signoff */}
        <footer className="max-w-[76rem] mx-auto border-t border-border/10 mt-16 sm:mt-24 pt-8 text-center text-xs font-mono text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} Niraj Bawa Case Studies // Code crafted for maximum performance.</p>
        </footer>

      </article>

      {/* Lightbox / Zoomed image Modal overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20"
              aria-label="Close zoomed view"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div
              className="relative w-full max-w-[85vw] max-h-[85vh] aspect-[16/10] sm:aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.carouselImages[activeImageIndex]}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
