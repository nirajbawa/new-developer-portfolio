"use client";

import { useState, useEffect } from "react";
import { cvData, Achievement } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Image Imports
import pict0 from "@/assets/images/ACHIEVEMENTS-pict-0.jpeg";
import pict1 from "@/assets/images/ACHIEVEMENTS-pict-1.jpeg";
import nasa0 from "@/assets/images/ACHIEVEMENTS-nasa-0.jpeg";
import nasa1 from "@/assets/images/ACHIEVEMENTS-nasa-1.jpeg";
import nasa2 from "@/assets/images/ACHIEVEMENTS-nasa-2.jpeg";
import amruth0 from "@/assets/images/ACHIEVEMENTS-amruth-vahini-0.jpeg";
import amruth1 from "@/assets/images/ACHIEVEMENTS-amruth-vahini-1.jpeg";
import amruth2 from "@/assets/images/ACHIEVEMENTS-amruth-vahini-2.jpeg";
import invoara0 from "@/assets/images/ACHIEVEMENTS-invoara-0.jpeg";
import invoara1 from "@/assets/images/ACHIEVEMENTS-invoara-1.jpeg";

// Fallbacks for ISRO and Rakshak
import anav1 from "@/assets/images/anav-1.jpg";
import anav2 from "@/assets/images/anav-2.jpg";
import rakshak1 from "@/assets/images/rakshak-1.jpeg";
import rakshak2 from "@/assets/images/rakshak-2.jpeg";

const achievementImages: Record<string, any[]> = {
  "PICT’S IMPETUS INTERNATIONAL LEVEL PROJECT EXHIBITION": [pict0, pict1],
  "RECOGNITION FOR RAKSHAK AI CHATBOT DEVELOPMENT": [rakshak1, rakshak2],
  "ISRO ROBOTICS CHALLENGE 2025": [anav1, anav2],
  "PCU’S NATIONAL LEVEL HACKATHON": [invoara0, invoara1],
  "NASA Space Apps Challenge 2025": [nasa0, nasa1, nasa2],
  "Tech Pragyan National Level Hackathon 2025": [amruth0, amruth1, amruth2]
};

// Custom Image Viewer / Carousel
function ImageCarousel({ images, alt }: { images: any[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return (
    <div className="w-full h-full min-h-[12rem] bg-secondary/10 flex items-center justify-center">
      <span className="text-muted-foreground font-mono text-xs">Image Unavailable</span>
    </div>
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full min-h-[12rem] group/carousel flex items-center justify-center overflow-hidden bg-background/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`${alt} slide ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover/carousel:scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay for modern UI feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 w-8 h-8 rounded-full bg-background/50 backdrop-blur-md border border-border/40 text-foreground flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-background hover:text-primary hover:border-primary/50"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 translate-x-[-1px]">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 w-8 h-8 rounded-full bg-background/50 backdrop-blur-md border border-border/40 text-foreground flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-background hover:text-primary hover:border-primary/50"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 translate-x-[1px]">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-3 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-primary w-4" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Achievements() {
  const { achievements } = cvData;

  // Helper to parse duration string and return a timestamp for sorting
  const parseDate = (duration: string) => {
    // Expected formats: "Mar 2025", "Jan 2025"
    const parts = duration.split(/[-–]/).map(s => s.trim());
    const endDateStr = parts[parts.length - 1];
    if (endDateStr.toLowerCase() === "present") return Date.now();
    
    const date = new Date(endDateStr);
    return isNaN(date.getTime()) ? 0 : date.getTime();
  };

  // Sort achievements descending (newest first) based on the parsed duration
  const sortedAchievements = [...achievements].sort((a, b) => {
    return parseDate(b.duration) - parseDate(a.duration);
  });

  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>(sortedAchievements[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Detect mobile screen sizes dynamically
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 2 : 3;

  // Safely reset current page if it exceeds total pages on resize
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);
  
  const totalPages = Math.ceil(sortedAchievements.length / itemsPerPage);
  
  const currentItems = sortedAchievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      id="achievements"
      className="relative min-h-screen pt-24 pb-12 lg:pb-24 px-4 sm:px-6 overflow-hidden bg-background"
    >
      {/* Dynamic Cyber Ambient Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-[20%] right-[20%] w-[32rem] h-[32rem] rounded-full bg-primary/5 dark:bg-primary/[0.02] blur-[120px] -z-10" />
        <div className="absolute bottom-[20%] left-[20%] w-[32rem] h-[32rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.02] blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10 w-full max-w-[80rem]">
        {/* Section Heading */}
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
              Milestones & Recognition
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Achievements
          </h2>
        </motion.div>

        {/* 2-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Master Big Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky top-28 flex flex-col gap-4"
          >
            {selectedAchievement && (
              <div className="w-full rounded-2xl border border-accent-foreground/20 bg-background/50 backdrop-blur-md shadow-xl overflow-hidden p-3 sm:p-5 flex flex-col gap-4 group/master transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)]">
                
                {/* Top: Image Highlights Box */}
                <div className="w-full aspect-[4/3] rounded-xl border border-border/40 overflow-hidden relative">
                  <ImageCarousel 
                    images={achievementImages[selectedAchievement.title]} 
                    alt={selectedAchievement.title} 
                  />
                </div>
                
                {/* Bottom: Info Box */}
                <div className="w-full rounded-xl border border-border/40 bg-secondary/10 p-5 sm:p-6 flex flex-col justify-between flex-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full blur-xl -z-10" />
                  
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground uppercase tracking-tight leading-snug">
                      {selectedAchievement.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest">
                      <span className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                        {selectedAchievement.role}
                      </span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {selectedAchievement.location}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                      {selectedAchievement.bullets[0]}
                    </p>
                  </div>

                  {selectedAchievement.link && selectedAchievement.link !== "#" && selectedAchievement.link.trim() !== "" && (
                    <div className="mt-6 pt-4 border-t border-border/40">
                      <a 
                        href={selectedAchievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-foreground transition-colors group/link"
                      >
                        View Certification
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

              </div>
            )}
          </motion.div>

          {/* RIGHT COLUMN: Small List Cards & Pagination */}
          <div className="lg:col-span-7 flex flex-col gap-5 min-h-[10rem] lg:min-h-[30rem]">
            <AnimatePresence>
              {currentItems.map((item, index) => {
                const isSelected = selectedAchievement.title === item.title;
                const images = achievementImages[item.title] || [];
                const thumbnail = images[0];

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: "transform, opacity" }}
                    onClick={() => setSelectedAchievement(item)}
                    className={`w-full p-3 sm:p-4 rounded-2xl border flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? "border-primary/50 bg-primary/5 shadow-[0_0_20px_rgba(var(--primary),0.1)]" 
                        : "border-accent-foreground/15 bg-background/40 hover:bg-secondary/20 hover:border-primary/30"
                    }`}
                  >
                    {/* Left: Image Box */}
                    <div className="hidden lg:flex w-full lg:w-[35%] aspect-[16/10] lg:aspect-auto lg:min-h-[9rem] rounded-xl border border-border/40 overflow-hidden relative flex-shrink-0 bg-secondary/10 items-center justify-center group-hover:border-primary/30 transition-colors">
                      {thumbnail ? (
                        <Image 
                          src={thumbnail}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className={`object-cover transition-transform duration-700 ${isSelected ? 'scale-105' : 'scale-100 hover:scale-105'}`}
                        />
                      ) : (
                        <span className="text-muted-foreground font-mono text-[0.6rem] uppercase tracking-wider">No Image</span>
                      )}
                      
                      {/* Selection Overlay */}
                      <div className={`absolute inset-0 bg-primary/20 backdrop-blur-[1px] transition-opacity duration-300 flex items-center justify-center ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-background/80 backdrop-blur-md p-2 rounded-full shadow-lg">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-primary">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Right: Info Box */}
                    <div className="flex-1 flex flex-col justify-between py-1 border border-transparent rounded-xl">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className={`text-sm lg:text-base font-extrabold uppercase leading-tight line-clamp-2 transition-colors ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className="hidden lg:block text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.bullets[0]}
                        </p>
                      </div>
                      
                      <div className="hidden lg:flex justify-between items-center mt-3 pt-3 border-t border-border/30 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[0.6rem] lg:text-[0.65rem] font-mono font-bold text-accent-foreground uppercase tracking-widest bg-accent-foreground/10 px-2 py-0.5 rounded">
                            {item.duration}
                          </span>
                          <a
                            href={item.link || "#"}
                            target={item.link && item.link !== "#" ? "_blank" : "_self"}
                            rel={item.link && item.link !== "#" ? "noopener noreferrer" : ""}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!item.link || item.link === "#") {
                                  e.preventDefault();
                              }
                            }}
                            className="px-2 py-0.5 rounded text-[0.6rem] lg:text-[0.65rem] font-mono font-bold border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary-foreground uppercase tracking-widest transition-colors flex items-center gap-1"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5 lg:w-3 sm:h-3">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                            </svg>
                            Certificate
                          </a>
                        </div>
                        <span className={`text-[0.6rem] lg:text-[0.65rem] font-mono font-bold uppercase transition-colors ${isSelected ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                          .. show more
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full flex justify-end mt-2"
              >
                <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-border/40 bg-background/50 backdrop-blur-md">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary/50 hover:text-primary transition-all"
                  >
                    Prev
                  </button>
                  
                  <div className="flex items-center px-2 gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <span 
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i + 1 ? 'bg-primary w-4' : 'bg-muted-foreground/30'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary/50 hover:text-primary transition-all"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

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
            stroke="url(#achievementsNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="achievementsNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#achievementsNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="achievementsNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
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
