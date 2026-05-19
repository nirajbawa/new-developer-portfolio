"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

// Image Imports
import postmanLogo from "@/assets/images/postman-icon.png";
import awsLogo from "@/assets/images/Amazon_Web_Services_Logo.svg.png";
import hackerrankLogo from "@/assets/images/HackerRank_logo.png";
import udemyLogo from "@/assets/images/Udemy_logo.svg.png";
import googleLogo from "@/assets/images/google-logo.png";

interface Certification {
  id: number;
  title: string;
  provider: string;
  logo: any;
  link: string;
  date?: string;
  skills?: string[];
}

const certificationsList: Certification[] = [
  {
    id: 1,
    title: "Postman API Fundamentals Student Expert",
    provider: "Postman",
    logo: postmanLogo,
    link: "https://badgr.com/public/assertions/8xSa5YLXRr6--HFhyveMIg?identity__email=nirajbava222%40gmail.com",
    date: "2025",
    skills: ["APIs", "Postman", "Testing"]
  },
  {
    id: 2,
    title: "AWS Academy Cloud Foundations",
    provider: "AWS Academy",
    logo: awsLogo,
    link: "https://www.credly.com/badges/de9391b1-7b8b-4d21-a148-e807874986d1/print",
    date: "2025",
    skills: ["AWS", "Cloud", "S3", "EC2"]
  },
  {
    id: 3,
    title: "Continuous Learning & Specialization",
    provider: "Self-Directed",
    logo: udemyLogo,
    link: "#",
    date: "Ongoing",
    skills: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    id: 4,
    title: "JavaScript Basics",
    provider: "HackerRank",
    logo: hackerrankLogo,
    link: "https://drive.google.com/file/d/1aE3sQ21BlRxezzh-8qIfU1Nk35ci0wvD/view",
    date: "2024",
    skills: ["JavaScript", "ES6"]
  },
  {
    id: 5,
    title: "Java Basics",
    provider: "HackerRank",
    logo: hackerrankLogo,
    link: "https://drive.google.com/file/d/1B4wSygHrVAMj0OnleoFKo_vq3n3VDxtL/view",
    date: "2024",
    skills: ["Java", "OOP"]
  },
  {
    id: 6,
    title: "Android Application Development",
    provider: "Udemy",
    logo: udemyLogo,
    link: "https://drive.google.com/file/d/1fwchY78nFWnsZVWbJ5DKVQ4I5NrcWVSU/view",
    date: "2024",
    skills: ["Android", "Java", "Mobile"]
  },
  {
    id: 7,
    title: "Digital Marketing Fundamentals",
    provider: "Google",
    logo: googleLogo,
    link: "https://drive.google.com/file/d/1qpRYj-W2Tg3pYUv5KOOfuQHQPkjTqaZ_/view",
    date: "2023",
    skills: ["SEO", "Marketing", "Analytics"]
  },
  // Expanded Placeholders to perfectly match the 9 bento layout
  {
    id: 8,
    title: "Full Stack Generative and Agentic AI with Python",
    provider: "Udemy / Agentic AI",
    logo: udemyLogo,
    link: "https://www.udemy.com/certificate/UC-285f40d0-de80-4606-8139-f78ea72f4a9e/",
    date: "2025",
    skills: ["GenAI", "Python", "LLMs", "Agents", "LangChain"]
  },
  {
    id: 9,
    title: "Python (Basic)",
    provider: "HackerRank",
    logo: hackerrankLogo,
    link: "https://drive.google.com/file/d/1YqKRWR57uslffQWfLM9r2M9z2tvuBK4X/view",
    date: "2024",
    skills: ["Python", "Programming"]
  }
];

export default function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(3);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen py-24 px-4 sm:px-6 overflow-hidden bg-background"
    >
      {/* Background Grid Pattern consistent with global style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-[30%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-primary/5 dark:bg-primary/[0.02] blur-[130px] -z-10" />
        <div className="absolute bottom-[30%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.02] blur-[130px] -z-10" />
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10 w-full max-w-[80rem]">
        {/* Section Title */}
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
              Credentials & Badges
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Certifications
          </h2>
        </motion.div>

        {/* Bento Grid Layout matching user blueprint */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="hidden lg:grid grid-cols-3 gap-6 items-start"
        >
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Horizontal layout with circle logo */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="w-full p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex items-center gap-6 group hover:border-primary/40 hover:shadow-[0_0_25px_rgba(var(--primary),0.05)] transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex-shrink-0 flex items-center justify-center bg-white overflow-hidden group-hover:border-primary/50 transition-colors relative shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                  src={certificationsList[0].logo}
                  alt={certificationsList[0].provider}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 space-y-2">
                <span className="text-[0.65rem] font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded">
                  {certificationsList[0].provider}
                </span>
                <h3 className="text-md sm:text-lg font-extrabold uppercase leading-snug text-foreground">
                  {certificationsList[0].title}
                </h3>
                <a
                  href={certificationsList[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary hover:text-foreground transition-colors mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                >
                  Verify Certificate
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Split Row: Two vertical cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 2: JavaScript Basics */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between h-56 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                    <Image src={certificationsList[3].logo} alt="logo" className="w-6 h-6 object-contain" />
                  </div>
                  <h4 className="text-sm font-extrabold uppercase leading-tight text-foreground line-clamp-2">
                    {certificationsList[3].title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {certificationsList[3].provider}
                  </p>
                </div>
                <a
                  href={certificationsList[3].link}
                  className="text-[0.65rem] font-mono font-bold text-primary hover:underline flex items-center gap-1 mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                >
                  Verify
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>

              {/* Card 3: Java Basics */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between h-56 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                    <Image src={certificationsList[4].logo} alt="logo" className="w-6 h-6 object-contain" />
                  </div>
                  <h4 className="text-sm font-extrabold uppercase leading-tight text-foreground line-clamp-2">
                    {certificationsList[4].title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {certificationsList[4].provider}
                  </p>
                </div>
                <a
                  href={certificationsList[4].link}
                  className="text-[0.65rem] font-mono font-bold text-primary hover:underline flex items-center gap-1 mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                >
                  Verify
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Card 8: Landscape Card (Android) - Conditional */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 15 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between h-44 group hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <span className="text-[0.6rem] font-mono font-bold text-muted-foreground uppercase tracking-wider bg-secondary/30 px-2 py-0.5 rounded">
                        {certificationsList[5].provider}
                      </span>
                      <h3 className="text-md sm:text-lg font-extrabold uppercase leading-snug text-foreground">
                        {certificationsList[5].title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                      <Image src={certificationsList[5].logo} alt="logo" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  <a
                    href={certificationsList[5].link}
                    className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1 self-start mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                  >
                    Verify Certificate
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            {/* Card 4: Taller Vertical Card (AWS) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between min-h-[16rem] group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full blur-xl -z-10" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-border/30 overflow-hidden p-2 shadow-sm">
                  <Image src={certificationsList[1].logo} alt="aws" className="w-8 h-8 object-contain" />
                </div>
                <div className="space-y-2">
                  <span className="text-[0.65rem] font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                    {certificationsList[1].provider}
                  </span>
                  <h3 className="text-lg font-extrabold uppercase leading-tight text-foreground">
                    {certificationsList[1].title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {certificationsList[1].skills?.map((s, i) => (
                    <span key={i} className="text-[0.6rem] font-mono font-bold text-muted-foreground bg-secondary/20 px-2 py-0.5 rounded">
                      #{s}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={certificationsList[1].link}
                className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1 self-start mt-6"
              >
                Verify Credentials
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Card 5: Horizontal Medium (Full Stack GenAI) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between h-48 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="text-[0.6rem] font-mono font-bold text-muted-foreground uppercase tracking-wider bg-secondary/30 px-2 py-0.5 rounded">
                    {certificationsList[2].provider}
                  </span>
                  <h3 className="text-md sm:text-lg font-extrabold uppercase leading-snug text-foreground">
                    {certificationsList[2].title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                  <Image src={certificationsList[2].logo} alt="logo" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <a
                href={certificationsList[2].link}
                className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1 self-start mt-4 pt-2 border-t border-accent-foreground/10 w-full"
              >
                Verify Certificate
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Card 9: Smaller Horizontal Card (Digital Marketing) - Conditional */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 15 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between min-h-[14rem] sm:min-h-[15rem] group hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                        <Image src={certificationsList[6].logo} alt="logo" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                      </div>
                      <span className="text-[0.65rem] font-mono text-muted-foreground">{certificationsList[6].date}</span>
                    </div>
                    <h4 className="text-sm font-extrabold uppercase leading-tight text-foreground line-clamp-2">
                      {certificationsList[6].title}
                    </h4>
                    <p className="text-[0.65rem] sm:text-xs text-muted-foreground font-semibold">
                      {certificationsList[6].provider}
                    </p>
                  </div>
                  <a
                    href={certificationsList[6].link}
                    target={certificationsList[6].link && certificationsList[6].link !== "#" ? "_blank" : "_self"}
                    rel={certificationsList[6].link && certificationsList[6].link !== "#" ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (!certificationsList[6].link || certificationsList[6].link === "#") {
                        e.preventDefault();
                      }
                    }}
                    className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-primary hover:underline flex items-center gap-1 mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                  >
                    Verify
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            {/* Card 6: Very Tall Vertical Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between min-h-[22rem] group hover:border-primary/40 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-border/30 overflow-hidden p-2 shadow-sm">
                  <Image src={certificationsList[7].logo} alt="logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="space-y-3">
                  <span className="text-[0.65rem] font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                    {certificationsList[7].provider}
                  </span>
                  <h3 className="text-lg font-extrabold uppercase leading-tight text-foreground">
                    {certificationsList[7].title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Always exploring new methodologies, framework advancements, and design blueprints to keep engineering capabilities state-of-the-art.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {certificationsList[7].skills?.map((s, i) => (
                    <span key={i} className="text-[0.6rem] font-mono font-bold text-muted-foreground bg-secondary/20 px-2 py-0.5 rounded">
                      #{s}
                    </span>
                  ))}
                </div>
                <a
                  href={certificationsList[7].link}
                  className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Verify Specialization
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Card 7: Medium Vertical Card (Advanced DSA) - Conditional */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 15 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between min-h-[15rem] group hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                      <Image src={certificationsList[8].logo} alt="logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[0.65rem] font-mono font-bold text-accent-foreground uppercase tracking-widest bg-accent-foreground/10 px-2 py-0.5 rounded">
                        {certificationsList[8].provider}
                      </span>
                      <h3 className="text-md sm:text-lg font-extrabold uppercase leading-snug text-foreground">
                        {certificationsList[8].title}
                      </h3>
                    </div>
                  </div>
                  <a
                    href={certificationsList[8].link}
                    className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1 self-start mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                  >
                    Verify Certificate
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand Button matching bottom right drawing - Hidden when expanded */}
            {!isExpanded && (
              <motion.div variants={itemVariants} className="flex justify-end mt-2">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                >
                  Show More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 animate-bounce">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </motion.div>
            )}
          </div>

        </motion.div>

        {/* Mobile View Flat Grid (< 1024px) */}
        <div className="grid grid-cols-2 gap-5 lg:hidden">
          {certificationsList.slice(0, mobileVisibleCount).map((cert, idx) => {
            const isLandscape = idx % 3 === 0;

            if (isLandscape) {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="col-span-2 w-full p-6 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex items-center gap-6 group hover:border-primary/40 hover:shadow-[0_0_25px_rgba(var(--primary),0.05)] transition-all duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/20 flex-shrink-0 flex items-center justify-center bg-white overflow-hidden group-hover:border-primary/50 transition-colors relative shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Image
                      src={cert.logo}
                      alt={cert.provider}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[0.65rem] font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded border border-primary/20">
                        {cert.provider}
                      </span>
                      {cert.date && <span className="text-[0.65rem] font-mono text-muted-foreground">{cert.date}</span>}
                    </div>
                    <h3 className="text-md font-extrabold uppercase leading-snug text-foreground">
                      {cert.title}
                    </h3>
                    <a
                      href={cert.link}
                      target={cert.link && cert.link !== "#" ? "_blank" : "_self"}
                      rel={cert.link && cert.link !== "#" ? "noopener noreferrer" : ""}
                      onClick={(e) => {
                        if (!cert.link || cert.link === "#") {
                          e.preventDefault();
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary hover:text-foreground transition-colors mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                    >
                      Verify Certificate
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="col-span-1 p-4 sm:p-5 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md flex flex-col justify-between min-h-[14rem] sm:min-h-[15rem] group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center border border-border/40 overflow-hidden p-1.5 shadow-sm">
                      <Image src={cert.logo} alt="logo" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold uppercase leading-tight text-foreground line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-[0.65rem] sm:text-xs text-muted-foreground font-semibold">
                      {cert.provider}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target={cert.link && cert.link !== "#" ? "_blank" : "_self"}
                    rel={cert.link && cert.link !== "#" ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (!cert.link || cert.link === "#") {
                        e.preventDefault();
                      }
                    }}
                    className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-primary hover:underline flex items-center gap-1 mt-4 pt-2 border-t border-accent-foreground/10 w-full"
                  >
                    Verify
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              );
            }
          })}
        </div>

        {/* Mobile View Show More Button */}
        {mobileVisibleCount < certificationsList.length && (
          <div className="flex justify-center mt-8 lg:hidden">
            <button
              onClick={() => setMobileVisibleCount(prev => Math.min(certificationsList.length, prev + 3))}
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
          <path
            d="M0 60 C300 60, 450 20, 600 20 C750 20, 900 60, 1200 60"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          <path
            d="M0 80 C400 80, 500 40, 600 40 C700 40, 800 80, 1200 80"
            stroke="url(#certificationsNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="certificationsNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#certificationsNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="certificationsNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
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
