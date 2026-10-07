"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Eye, X } from "lucide-react";
import { cvData } from "@/data/cv";
import { useAnimateBypass } from "@/app/providers";
import { useIsMobile } from "@/hooks/useIsMobile";
import certImage from "@/assets/images/uk-design-patent-6549379.jpg";

export default function Patents() {
  const [modalOpen, setModalOpen] = useState(false);
  const bypass = useAnimateBypass();
  const isMobile = useIsMobile();
  const patent = cvData.patents?.[0];

  const cardVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  if (!patent) return null;

  return (
    <section id="patents" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative Radial Gradients matching Publications */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Title matching Publications & Clubs */}
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
              Intellectual Property
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Patents
          </h2>
        </motion.div>

        {/* Single Centered Card matching the exact Publication Card Blueprint */}
        <div className="flex justify-center w-full">
          <motion.div
            variants={cardVariants}
            initial={bypass ? false : "hidden"}
            animate={isMobile ? "visible" : undefined}
            whileInView={isMobile ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={isMobile ? undefined : { y: -4, scale: 1.005 }}
            className="w-full max-w-2xl sm:max-w-3xl p-4 sm:p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md lg:hover:border-primary/40 transition-all duration-300 flex flex-col gap-3 shadow-md group relative overflow-hidden"
          >
            {/* Visual Accent Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Main Content Area - Full Width */}
            <div className="flex flex-col gap-3 relative z-10 w-full flex-1">
              {/* Header: Logo and Details */}
              <div className="flex items-start gap-3 w-full">
                {/* Column 1: Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white border border-border/40 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm select-none">
                  <div className="w-full h-full bg-[#0092c8] rounded flex flex-col items-center justify-center text-white">
                    <ShieldCheck className="w-4 h-4 mb-0.5 text-white" />
                    <span className="text-[0.42rem] font-extrabold uppercase tracking-tight leading-none text-center">
                      UK IPO
                    </span>
                  </div>
                </div>

                {/* Column 2: Details */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  <div className="flex justify-between items-center gap-2 flex-wrap w-full">
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20 truncate">
                      UK IPO / REGISTERED PATENT
                    </span>
                    <span className="text-[0.65rem] sm:text-xs font-mono text-muted-foreground font-semibold shrink-0">
                      28 September 2026
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug tracking-tight">
                    {patent.title}
                  </h3>
                </div>
              </div>

              {/* Main Body: Description on Left & Certificate Image on Right */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch w-full">
                {/* Left Description Box */}
                <div className="flex-1 p-3 rounded-lg bg-secondary/15 border border-border/20 text-xs sm:text-sm text-muted-foreground leading-relaxed flex flex-col justify-between gap-2.5">
                  <p>
                    Official UK Patent registration for specialized Communications Equipment for Public Safety, engineering critical telecommunications hardware and secure wireless remote control infrastructure tailored for emergency response, high-concurrency public safety monitoring, and police operations.
                  </p>
                  <div className="pt-2 border-t border-border/25 flex flex-wrap items-center justify-between gap-2 text-[0.68rem] font-mono text-muted-foreground">
                    <span>
                      Patent No: <strong className="text-foreground">{patent.designNumber}</strong>
                    </span>
                    <span>
                      Locarno: <strong className="text-foreground">Cl. 14-03</strong>
                    </span>
                  </div>
                </div>

                {/* Right Side: Certificate Image Thumbnail (Click opens big modal) */}
                <div
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-36 md:w-40 shrink-0 relative aspect-[3/4] sm:aspect-auto sm:min-h-[140px] rounded-lg overflow-hidden border border-border/40 bg-secondary/20 cursor-pointer group/cert transition-all duration-300 hover:border-primary/60 hover:shadow-md flex items-center justify-center select-none"
                  title="Click to view certificate in big size"
                >
                  <Image
                    src={certImage}
                    alt="Certificate of Registration for a UK Patent No 6549379"
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-contain p-1.5 transition-transform duration-300 group-hover/cert:scale-105"
                    priority
                  />

                  {/* Inspection Hover Overlay */}
                  <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 text-center p-2 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                      <Eye className="w-4 h-4" />
                    </div>
                    <span className="text-[0.62rem] font-mono font-bold text-foreground uppercase tracking-wider">
                      View Big
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags Footer matching Publications style */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-accent-foreground/5 w-full">
                <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded">
                  #UK-IPO
                </span>
                <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded">
                  #Patent-6549379
                </span>
                <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded">
                  #Locarno-14-03
                </span>
                <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded">
                  #PublicSafety
                </span>
                <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-muted-foreground bg-secondary/30 px-1.5 py-0.5 rounded">
                  #Telecommunications
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Creative SVG Transition Section Connector (Desktop) matching Publications */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-24 text-primary/10 fill-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C300 60, 450 20, 600 20 C750 20, 900 60, 1200 60"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
        </svg>
      </div>

      {/* High-Resolution Certificate Modal Lightbox (Opens on image click) */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-background border border-border/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-secondary/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-foreground">
                    UK Patent Registration Certificate · Patent No: {patent.designNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40 min-h-[60vh] max-h-[75vh]">
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={certImage}
                    alt="Certificate of Registration for a UK Patent No 6549379"
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-border/50 bg-secondary/10 text-xs font-mono">
                <span className="text-muted-foreground hidden sm:inline">
                  Comptroller-General of Patents, Designs and Trade Marks · UK IPO
                </span>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold ml-auto"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
