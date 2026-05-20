"use client";

import { useState } from "react";
import { cvData, Education as EducationType } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useAnimateBypass } from "@/app/providers";

// Image Imports
import kkwaghLogoImg from "@/assets/images/kk-wagh-logo.png";
import kkwaghImg0 from "@/assets/images/kk-wagh-0.jpg";
import kkwaghImg1 from "@/assets/images/kk-wagh-1.jpeg";
import kkwaghImg2 from "@/assets/images/kk-wagh-2.jpeg";
import kkwaghImg3 from "@/assets/images/kk-wagh-3.jpeg";
import kkwaghImg4 from "@/assets/images/kk-wagh-4.jpeg";

import jamiaLogoImg from "@/assets/images/jamia-poly-logo.png";
import jamiaImg0 from "@/assets/images/jamia-0.webp";
import jamiaImg1 from "@/assets/images/jamia-poly-1.jpeg";

import nemsushilLogoImg from "@/assets/images/nemsushil-logo.jpg";
import nemsushilImg0 from "@/assets/images/nemsushil-0.png";
import nemsushilImg1 from "@/assets/images/nemsushil-1.png";

const institutionMeta: Record<string, { logo: any; images: any[] }> = {
  "K.K. Wagh Institute of Engineering Education & Research": {
    logo: kkwaghLogoImg,
    images: [kkwaghImg0, kkwaghImg1, kkwaghImg2, kkwaghImg3, kkwaghImg4],
  },
  "Jamia Polytechnic": {
    logo: jamiaLogoImg,
    images: [jamiaImg0, jamiaImg1],
  },
  "Nemsushil Vidyamandir": {
    logo: nemsushilLogoImg,
    images: [nemsushilImg0, nemsushilImg1],
  },
};

// Custom interactive CSS Carousel Component
function ImageCarousel({ images, alt }: { images: any[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full min-h-0 rounded-xl overflow-hidden bg-muted group/carousel flex items-center justify-center border border-accent-foreground/10">
      <Image
        src={images[index]}
        alt={`${alt} slide ${index + 1}`}
        fill
        sizes="(max-w-md) 100vw, 50vw"
        priority
        className="object-cover transition-transform duration-500 group-hover/carousel:scale-105"
      />
      {/* Dynamic dark gradient overlay for graphics pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

      {/* Carousel Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/90 dark:bg-background/80 backdrop-blur-sm border border-border/40 text-foreground/80 flex items-center justify-center opacity-90 md:opacity-70 md:group-hover/carousel:opacity-100 transition-all duration-300 shadow-md hover:bg-background dark:hover:bg-background/90 hover:text-primary hover:border-primary/50 hover:scale-105 hover:opacity-100"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 translate-x-[-0.5px]">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/90 dark:bg-background/80 backdrop-blur-sm border border-border/40 text-foreground/80 flex items-center justify-center opacity-90 md:opacity-70 md:group-hover/carousel:opacity-100 transition-all duration-300 shadow-md hover:bg-background dark:hover:bg-background/90 hover:text-primary hover:border-primary/50 hover:scale-105 hover:opacity-100"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 translate-x-[0.5px]">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === index ? "bg-primary w-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Center popup dialog component for school details
function EducationModal({
  education,
  onClose,
}: {
  education: EducationType;
  onClose: () => void;
}) {
  const { degree, institution, location, details, duration, bullets } = education;
  const meta = institutionMeta[institution];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Blur Backdrop */}
      <div className="absolute inset-0 bg-background/75 backdrop-blur-xl" />

      {/* Modal Card Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-accent-foreground/15 bg-background/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row (Dedicated Close Area) */}
        <div className="flex justify-between items-center w-full pb-2">
          <span className="text-[0.65rem] font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Institution Details
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Top carousel area */}
        {meta?.images && (
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
            <ImageCarousel images={meta.images} alt={institution} />
          </div>
        )}

        {/* Headers and text detail info */}
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1.5">
            <h3 className="text-xl font-extrabold text-foreground tracking-tight leading-tight">{institution}</h3>
            <p className="text-xs font-mono text-muted-foreground">{details}</p>
            <p className="text-sm font-bold text-primary">{degree}</p>
            <span className="inline-block px-2.5 py-0.5 text-[0.6rem] font-mono rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wider">
              {duration} · {location}
            </span>
          </div>

          {/* Circular logo */}
          {meta?.logo && (
            <div className="w-14 h-14 flex-shrink-0 relative overflow-hidden bg-white rounded-xl border border-border/40 p-1 flex items-center justify-center">
              <Image
                src={meta.logo}
                alt={`${institution} logo`}
                width={52}
                height={52}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Detailed Points */}
        <div className="space-y-3 pt-4 border-t border-border/30">
          <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">Academic Highlights</h4>
          <ul className="space-y-2">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Education() {
  const { education } = cvData;
  const bypass = useAnimateBypass();
  const [showAll, setShowAll] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<EducationType | null>(null);

  // Layout requires latest school first on the left, other two stacked on the right
  // KK Wagh (idx 0) is latest, Jamia (idx 1) is horizontal, Nemsushil (idx 2) is reversed horizontal
  const latestSchool = education[0];
  const secondarySchools = education.slice(1);

  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-secondary/5 via-secondary/5 to-background"
    >
      {/* Abstract Grid Line Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:28px_28px]" />
        
        {/* Subtle Cyber Glowing Spotlights */}
        <div className="absolute top-[30%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-primary/5 dark:bg-primary/[0.02] blur-[120px] -z-10" />
        <div className="absolute bottom-[30%] right-[10%] w-[32rem] h-[32rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.02] blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10 w-full max-w-[80rem]">
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
              Academic Background
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Education
          </h2>
        </motion.div>

        {/* Master Grid Layout: Left Large, Right stacked horizontal */}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          
          {/* LEFT COLUMN: Large Prominent Vertical Card (Latest Institute First) */}
          {latestSchool && (
            <motion.div
              initial={bypass ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col justify-between p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md shadow-lg space-y-5 group/card hover:border-primary/30 transition-all duration-300 relative cursor-pointer"
              onClick={() => setSelectedSchool(latestSchool)}
            >
              {/* Corner Brackets */}
              <span className="absolute top-2.5 left-2.5 w-4.5 h-4.5 border-t-2 border-l-2 border-primary/40 rounded-tl-md !m-0" />
              <span className="absolute top-2.5 right-2.5 w-4.5 h-4.5 border-t-2 border-r-2 border-primary/40 rounded-tr-md !m-0" />
              <span className="absolute bottom-2.5 left-2.5 w-4.5 h-4.5 border-b-2 border-l-2 border-primary/40 rounded-bl-md !m-0" />
              <span className="absolute bottom-2.5 right-2.5 w-4.5 h-4.5 border-b-2 border-r-2 border-primary/40 rounded-br-md !m-0" />

              {/* Top part: Image highlight carousel */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
                <ImageCarousel images={institutionMeta[latestSchool.institution]?.images} alt={latestSchool.institution} />
              </div>

              {/* Middle part: Info block with logo */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-foreground group-hover/card:text-primary transition-colors leading-snug line-clamp-2">
                    {latestSchool.institution}
                  </h3>
                  <p className="text-[0.62rem] font-mono text-muted-foreground line-clamp-1">{latestSchool.details}</p>
                  <p className="text-xs font-bold text-foreground mt-1">{latestSchool.degree}</p>
                  <span className="inline-block mt-1 text-[0.6rem] font-mono text-primary uppercase tracking-widest">{latestSchool.duration}</span>
                </div>
                {/* School Logo */}
                {institutionMeta[latestSchool.institution]?.logo && (
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl border border-border/40 overflow-hidden relative flex items-center justify-center p-1">
                    <Image
                      src={institutionMeta[latestSchool.institution].logo}
                      alt={`${latestSchool.institution} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Bottom part: Description details */}
              <div className="p-4 rounded-xl border border-border/40 bg-background/25 flex flex-col justify-between flex-1">
                <ul className="space-y-2">
                  {latestSchool.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 text-[0.7rem] sm:text-xs text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/70" />
                      <span>
                        {bullet}
                        {idx === latestSchool.bullets.length - 1 && (
                          <span className="text-primary font-mono font-bold ml-1.5 hover:underline whitespace-nowrap">
                            ..show more
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* RIGHT COLUMN: Stacked Horizontal Cards (Second & Third Education Items) */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-3 sm:gap-6 justify-between">
            {secondarySchools.map((school, index) => {
              const isEven = index % 2 === 0;
              const meta = institutionMeta[school.institution];

              return (
                <motion.div
                  key={school.institution}
                  initial={bypass ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className={`p-3 sm:p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md shadow-lg group/card hover:border-primary/30 transition-all duration-300 relative cursor-pointer flex flex-col ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  } gap-3 sm:gap-5 items-stretch flex-1 overflow-hidden`}
                  onClick={() => setSelectedSchool(school)}
                >
                  {/* Corner Brackets */}
                  <span className="absolute top-2.5 left-2.5 w-4.5 h-4.5 border-t-2 border-l-2 border-primary/40 rounded-tl-md !m-0 hidden sm:block" />
                  <span className="absolute top-2.5 right-2.5 w-4.5 h-4.5 border-t-2 border-r-2 border-primary/40 rounded-tr-md !m-0 hidden sm:block" />
                  <span className="absolute bottom-2.5 left-2.5 w-4.5 h-4.5 border-b-2 border-l-2 border-primary/40 rounded-bl-md !m-0 hidden sm:block" />
                  <span className="absolute bottom-2.5 right-2.5 w-4.5 h-4.5 border-b-2 border-r-2 border-primary/40 rounded-br-md !m-0 hidden sm:block" />

                  {/* Image Carousel (Left/Right side depending on row layout) */}
                  <div className="w-full sm:w-[42%] aspect-[16/11] sm:aspect-auto rounded-xl overflow-hidden relative min-h-[6rem] sm:min-h-0 flex-shrink-0">
                    <ImageCarousel images={meta?.images} alt={school.institution} />
                  </div>

                  {/* Info details & Logo on the right/left */}
                  <div className="flex-1 flex flex-col justify-between py-0.5 sm:py-1 space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-start gap-2 sm:gap-3">
                      <div className="space-y-0.5 sm:space-y-1 overflow-hidden">
                        <h3 className="text-[0.65rem] sm:text-sm font-extrabold text-foreground group-hover/card:text-primary transition-colors leading-snug line-clamp-2">
                          {school.institution}
                        </h3>
                        <p className="text-[0.58rem] font-mono text-muted-foreground line-clamp-1 hidden sm:block">{school.details}</p>
                        <p className="text-[0.55rem] sm:text-xs font-bold text-foreground mt-0.5 sm:mt-1 leading-tight line-clamp-2">{school.degree}</p>
                        <span className="inline-block mt-0.5 text-[0.45rem] sm:text-[0.58rem] font-mono text-primary uppercase tracking-widest line-clamp-1">{school.duration}</span>
                      </div>
                      
                      {/* Logo corner */}
                      {meta?.logo && (
                        <div className="w-6 h-6 sm:w-10 sm:h-10 flex-shrink-0 bg-white rounded-md sm:rounded-lg border border-border/40 overflow-hidden relative flex items-center justify-center p-0.5">
                          <Image
                            src={meta.logo}
                            alt={`${school.institution} logo`}
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>

                    {/* Bullet points description taking full space and eliminating negative space */}
                    <ul className="space-y-1 sm:space-y-1.5 mt-1 sm:mt-2 flex-1">
                      {school.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-1.5 sm:gap-2 text-[0.55rem] sm:text-[0.68rem] text-muted-foreground leading-relaxed">
                          <span className="mt-1 sm:mt-1.5 flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/70" />
                          <span className="line-clamp-2 sm:line-clamp-none">
                            {bullet}
                            {idx === school.bullets.length - 1 && (
                              <span className="text-primary font-mono font-bold ml-1 sm:ml-1.5 hover:underline whitespace-nowrap hidden sm:inline">
                                ..show more
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Expand Show Remaining Button (Parity with blueprint instructions) */}
        {education.length > 3 && (
          <motion.div
            initial={bypass ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-end mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md text-[0.65rem] font-bold font-mono text-foreground uppercase tracking-wider hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 flex items-center gap-2"
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
                  Show All ({education.length})
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}

      </div>

      {/* Detail Dialog Modal Component */}
      <AnimatePresence>
        {selectedSchool && (
          <EducationModal
            education={selectedSchool}
            onClose={() => setSelectedSchool(null)}
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
          {/* Main sweeping curve */}
          <path
            d="M0 80 C 300 80, 400 30, 600 30 C 800 30, 900 80, 1200 80"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          {/* A glowing secondary neon wave line */}
          <path
            d="M0 100 C 300 100, 400 45, 600 45 C 800 45, 900 100, 1200 100"
            stroke="url(#eduNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="eduNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            d="M0 80 C 80 80, 120 40, 163 40 C 206 40, 247 80, 327 80"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          <path
            d="M0 100 C 80 100, 120 55, 163 55 C 206 55, 247 100, 327 100"
            stroke="url(#eduNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="eduNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
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
