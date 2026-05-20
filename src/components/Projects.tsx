"use client";

import { useState } from "react";
import { cvData, Project as ProjectType } from "@/data/cv";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import project showcase images
import rakshakMain from "@/assets/images/rakshak-0.png";
import rakshak1 from "@/assets/images/rakshak-1.jpeg";
import rakshak2 from "@/assets/images/rakshak-2.jpeg";
import rakshak3 from "@/assets/images/rakshak-3.jpeg";
import rakshak4 from "@/assets/images/rakshak-4.jpeg";

import anvikshMain from "@/assets/images/anviksh-0.png";
import anviksh1 from "@/assets/images/anviksh-1.jpg";
import anviksh2 from "@/assets/images/anviksh-2.jpg";

import msbteQuizProMain from "@/assets/images/msbte-quiz-pro-0.png";
import msbteWallahMain from "@/assets/images/msbte-wallah-0.png";
import teamMatrixMain from "@/assets/images/team-matrix-0.png";
import inewsMain from "@/assets/images/inews-0.png";

import anavMain from "@/assets/images/anav_drone_bg.png";
import anav0 from "@/assets/images/anav-0.jpg";
import anav1 from "@/assets/images/anav-1.jpg";
import anav2 from "@/assets/images/anav-2.jpg";
import anav3 from "@/assets/images/anav-3.jpeg";
import anav4 from "@/assets/images/anav-4.jpeg";

import sdrMain from "@/assets/images/sdr_secure_bg.png";
import sdr0 from "@/assets/images/sdr-0.png";
import sdr1 from "@/assets/images/sdr-1.jpeg";
import sdr2 from "@/assets/images/sdr-2.jpeg";

// 8 new projects showcase assets
import weatherAppMain from "@/assets/images/weather-app-0.png";
import dynamicPortfolioMain from "@/assets/images/dynamic-portfolio-0.png";
import qrAttendanceMain from "@/assets/images/qr-attendance-0.png";
import fruitSellingMain from "@/assets/images/fruit-selling-0.png";
import pdf2audioMain from "@/assets/images/pdf2audio-0.png";
import courseSellingMain from "@/assets/images/course-selling-0.png";
import covidCounterMain from "@/assets/images/covid-counter-0.png";
import turfSpotMain from "@/assets/images/turf-spot-0.png";

// Map project title names to static images and rich metadata
const projectMeta: Record<
  string,
  {
    image: StaticImageData;
    carouselImages?: StaticImageData[];
    abstract: string;
    techStack: string[];
    link: string;
    liveUrl: string; // Dynamic live project url
    category: string;
    aspectClass: string; // Tailored aspect-ratio class for staggered desktop layout
  }
> = {
  "Rakshak AI – WhatsApp Police Assistance Chatbot": {
    image: rakshakMain,
    carouselImages: [rakshakMain, rakshak1, rakshak2, rakshak3, rakshak4],
    abstract: "An officially deployed WhatsApp chatbot (+91 70661 00112) developed in collaboration with the Nashik Rural Police (Government-funded under ₹6 Lakhs Annual Maintenance) serving thousands of real-world requests. Implements Marathi & English voice/text support, automated multi-level emergency escalation, DeepSeek RAG legal guidance on BNS, IPC, CrPC, and local jurisdiction geolocation lookup.",
    techStack: ["FastAPI", "WhatsApp API", "DeepSeek RAG", "AWS", "Python"],
    link: "",
    liveUrl: "https://www.rakshakai.org/",
    category: "AI & Public Safety",
    aspectClass: "lg:h-[20rem]",
  },
  "Anviksh AI – Learning Platform": {
    image: anvikshMain,
    carouselImages: [anvikshMain, anviksh1, anviksh2],
    abstract: "An award-winning learning workspace that transforms self-learning into a highly structured, engaging experience. Uses DeepSeek AI locally to generate personalized skill roadmaps, with daily planner calendar schedules, dynamic practice feedback, multi-role (learner, admin, expert, mentor) capabilities, and secure Razorpay payment integrations.",
    techStack: ["React.js", "FastAPI", "DeepSeek LLM", "MongoDB", "Razorpay"],
    link: "https://github.com/nirajbawa/anviksh-ai",
    liveUrl: "https://techaialpha.vercel.app/",
    category: "EdTech & AI",
    aspectClass: "lg:h-[28rem]",
  },
  "MSBTEQuizPro": {
    image: msbteQuizProMain,
    abstract: "A high-performance online preparation portal tailored for MSBTE students, mimicking the official board examination environment. Offers both free and paid MCQ test series with Next Auth OTP login, Zustand device-synced cart operations, dynamic useForm handling, and an exhaustive administrative management panel.",
    techStack: ["Next.js", "Zustand", "React Query", "Next Auth", "MongoDB", "Razorpay"],
    link: "https://github.com/nirajbawa/msbte-quiz-pro",
    liveUrl: "https://msbtequizpro.vercel.app/",
    category: "Exam Prep Web Portal",
    aspectClass: "lg:h-[18rem]",
  },
  "Msbte Wallah": {
    image: msbteWallahMain,
    abstract: "A large-scale, cutting-edge edtech social workspace (msbtewallah.in) designed for MSBTE academic students to centralize paper resource sharing, peer discussion chatrooms, Google OAuth secure logins, and Firebase-powered real-time user engagement metrics.",
    techStack: ["ReactJS", "Express.js", "Tailwind CSS", "MongoDB", "Google OAuth", "Firebase"],
    link: "https://github.com/nirajbawa/msbtewallah",
    liveUrl: "https://msbtewallah.vercel.app/",
    category: "Social EdTech Hub",
    aspectClass: "lg:h-[32rem]",
  },
  "Secure Data Repository System (SDR)": {
    image: sdrMain,
    carouselImages: [sdrMain, sdr0, sdr1, sdr2],
    abstract: "A high-performance district-level private data cloud built for the Nashik Rural Police Cyber Department, now a commercial multi-tenant SaaS product. Uses GPT-5 Mini for AI-powered schema detection, AES-256 local encryption for zero public-cloud offline-first security, typo-tolerant Meilisearch for under-3-second queries on billions of records, Cloudflare Tunnels for secure remote station queries, and immutable compliance logs.",
    techStack: ["Electron", "React", "Meilisearch", "GPT-5 Mini", "Node/Nest.js", "PostgreSQL"],
    link: "https://github.com/nirajbawa/sdr-system",
    liveUrl: "https://admin.sdr.neuronexdevelopers.com/",
    category: "Cybersecurity & SaaS",
    aspectClass: "lg:h-[24rem]",
  },
  "Team Matrix Web App": {
    image: teamMatrixMain,
    abstract: "A collaborative full-stack workspace created for the internal management and media publication of the Team Matrix robotics club. Features a secure member login portal, an administrative page component editor, Zustand state managers, and smooth Framer Motion animated progress logs.",
    techStack: ["Next.js 14", "Zustand", "React Query", "Material Tailwind", "ShadCN UI", "MongoDB"],
    link: "https://github.com/nirajbawa/team-matrix-app",
    liveUrl: "https://www.team-matrix.in/",
    category: "Robotics Club Platform",
    aspectClass: "lg:h-[20rem]",
  },
  "ANAV – AUTONOMOUS DRONE": {
    image: anavMain,
    carouselImages: [anavMain, anav0, anav1, anav2, anav3, anav4],
    abstract: "A state-of-the-art autonomous drone operating completely without GPS, employing SLAM mapping, dynamic path planning, and real-time telemetry, recognized at the national ISRO-IROC Grand Finale.",
    techStack: ["SLAM", "Robotics", "Python", "C++", "ROS", "Telemetry"],
    link: "https://github.com/nirajbawa/anav-drone",
    liveUrl: "https://drive.google.com/file/d/1INlmuOLDTkfOXPRC-9h9pqSOmbTSnH_b/view",
    category: "Robotics & Hardware",
    aspectClass: "lg:h-[26rem]",
  },
  "INews Android App": {
    image: inewsMain,
    abstract: "A lightweight, user-friendly Android news application built using Java, Android SDK, and WebView. Features a dynamic multi-language system providing news delivery in both Marathi and English, alongside performance-optimized article layouts to support fluid and highly responsive touch transitions.",
    techStack: ["Java", "Android SDK", "WebView", "XML", "Android Studio"],
    link: "https://github.com/nirajbawa/iNews-Android-App-Using-Java",
    liveUrl: "https://github.com/nirajbawa/iNews-Android-App-Using-Java",
    category: "Android Development",
    aspectClass: "lg:h-[18rem]",
  },
  "Weather App Using React": {
    image: weatherAppMain,
    abstract: "A comprehensive full-stack weather forecasting dashboard powered by the MERN stack. Fetches real-time weather stats, forecast estimates, and coordinates using OpenWeatherMap, while managing search query histories using an in-memory stack data structure for seamless backwards navigation.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "OpenWeatherMap API"],
    link: "https://github.com/nirajbawa",
    liveUrl: "https://weather-9htn.onrender.com/",
    category: "Full-Stack Dashboard",
    aspectClass: "lg:h-[22rem]",
  },
  "Dynamic Portfolio Web Application": {
    image: dynamicPortfolioMain,
    abstract: "A fully custom, dynamically editable portfolio application featuring a secure administrative portal. Enables real-time content CRUD operations, layout adjustments, and section toggles backed by Express session controls, styled dynamically using Bootstrap and EJS template engines.",
    techStack: ["EJS", "Express.js", "Node.js", "MongoDB", "Bootstrap", "CSS"],
    link: "https://github.com/nirajbawa/Dynamic-Portfolio-Web-App",
    liveUrl: "https://nirajbawa.onrender.com/",
    category: "Dynamic Portal",
    aspectClass: "lg:h-[26rem]",
  },
  "QR Attendance": {
    image: qrAttendanceMain,
    abstract: "A lightweight Flask-based academic attendance scanner and student database manager. Employs pyqrcode engines to generate instant unique identifiers for direct QR scan captures, updating secure relational MySQL record banks instantly for digitized classroom sheets.",
    techStack: ["Flask", "MySQL", "Python", "pyqrcode", "HTML5", "Bootstrap"],
    link: "https://github.com/nirajbawa/QR-Attendance",
    liveUrl: "https://nirajbava.pythonanywhere.com/",
    category: "Web & IoT Utility",
    aspectClass: "lg:h-[18rem]",
  },
  "Fruit Selling Site": {
    image: fruitSellingMain,
    abstract: "An elegant, interactive storefront landing page associated with the Maharashtra State Board of Technical Education (MSBTE) showcase. Built with pure HTML5, CSS3, and JavaScript, displaying vibrant, high-contrast assets, custom typography systems, and high-performance fluid hover animations.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "MSBTE Associated"],
    link: "https://github.com/nirajbawa/fruit-selling-site-landing-page",
    liveUrl: "https://nirajbawa.github.io/fruit-selling-site-landing-page/",
    category: "UI/UX Landing Page",
    aspectClass: "lg:h-[20rem]",
  },
  "PDF 2 Audio Converter": {
    image: pdf2audioMain,
    abstract: "A feature-rich Flask Progressive Web App (PWA) that converts uploaded PDF files into clean audio books, plain text downloads, or images. Integrates highly accurate Tesseract OCR scanning, gTTS translation synthesis, and local service workers to provide robust offline-first functionality.",
    techStack: ["Flask", "Tesseract OCR", "gTTS", "Service Workers PWA", "Bootstrap", "Python"],
    link: "https://github.com/nirajbawa/pdf2audio",
    liveUrl: "https://pdf2audio.pythonanywhere.com/",
    category: "SaaS Utility PWA",
    aspectClass: "lg:h-[24rem]",
  },
  "Course Selling Web App": {
    image: courseSellingMain,
    abstract: "An E-learning educational marketplace built using Flask and MySQL. Enables verified tutors to manage, publish, and sell courses, featuring standard interactive checkouts using Instamojo Payment APIs, structured course tables, and secure multi-role student access controls.",
    techStack: ["Flask", "MySQL", "Instamojo API", "HTML5", "CSS3", "Python"],
    link: "https://github.com/nirajbawa/course-selling-web-app",
    liveUrl: "https://superwebs.pythonanywhere.com/",
    category: "E-Commerce EdTech",
    aspectClass: "lg:h-[28rem]",
  },
  "Covid Victim Counter": {
    image: covidCounterMain,
    abstract: "A highly responsive real-time statistical dashboard tracking active COVID-19 pandemic spreads in India. Subscribes dynamically to the Covid19India API to render state-wise active count breakdowns, historical recovery rates, and mortality rates inside a custom modern visual interface.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Covid19India API", "Dynamic Charts"],
    link: "https://github.com/nirajbawa/covid-victim-counter",
    liveUrl: "https://nirajbawa.github.io/covid-victim-counter/",
    category: "Real-Time Tracking",
    aspectClass: "lg:h-[18rem]",
  },
  "TurfSpot": {
    image: turfSpotMain,
    abstract: "A premium, fully featured multi-tenant sports turf booking SaaS application built on the MERN stack. Integrates interactive calendar slot matrices, real-time Razorpay checkout logs, automated mail templates with secure QR codes, Recharts analytics boards, and secure multi-role admin/owner portals.",
    techStack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Razorpay", "Recharts"],
    link: "https://github.com/nirajbawa/TurfTown",
    liveUrl: "https://turf-spot.vercel.app/",
    category: "Booking SaaS Platform",
    aspectClass: "lg:h-[30rem]",
  },
};

// Custom interactive Image Slider inside the Detailed Modal View
function ModalImageCarousel({ images, alt }: { images: StaticImageData[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative group/carousel bg-secondary/5 border border-border/30">
      <Image
        src={images[currentIndex]}
        alt={`${alt} showcase ${currentIndex + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-cover"
        priority
      />

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border/50 bg-background/60 hover:bg-background/80 hover:scale-105 flex items-center justify-center text-foreground transition-all duration-300 z-10"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border/50 bg-background/60 hover:bg-background/80 hover:scale-105 flex items-center justify-center text-foreground transition-all duration-300 z-10"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-primary w-3" : "bg-muted-foreground/45"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Detailed Modal Component (matches blueprint layout drawing perfectly)
function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectType;
  onClose: () => void;
}) {
  const meta = projectMeta[project.title];
  const images = meta ? (meta.carouselImages || [meta.image]) : []; // Fallback sliders

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Blurred Backdrop */}
      <div className="absolute inset-0 bg-background/75 backdrop-blur-xl" />

      {/* Modal Card Content (Matches right drawing layout) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-accent-foreground/15 bg-background/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title of Project Header Box */}
        <div className="flex justify-between items-center w-full border-b border-border/40 pb-4">
          <div className="space-y-1">
            <span className="text-[0.62rem] font-mono font-bold text-primary uppercase tracking-widest">
              {meta?.category || "Project Case Study"}
            </span>
            <h3 className="text-xl font-extrabold text-foreground tracking-tight leading-tight">
              {project.title}
            </h3>
          </div>
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

        {/* Large Images area with sliders */}
        <ModalImageCarousel images={images} alt={project.title} />

        {/* Info About Project Content Container */}
        <div className="space-y-5 rounded-xl border border-border/40 bg-background/30 p-5">
          <div className="flex justify-between items-center text-xs font-mono border-b border-border/20 pb-3">
            <span className="text-muted-foreground uppercase tracking-wider">PROJECT TIMELINE:</span>
            <span className="text-primary font-bold">{project.duration}</span>
          </div>

          <div className="space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
              Technical Overview
            </h4>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans">
              {meta?.abstract}
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-border/20">
            <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
              Key Contributions & Highlights
            </h4>
            <ul className="space-y-2">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack badges */}
          {meta?.techStack && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/20">
              {meta.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[0.58rem] font-mono font-medium rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Links (Repository & Live Project) */}
          <div className="flex flex-wrap gap-3 justify-end pt-2 border-t border-border/20">
            {meta?.link && (
              <a
                href={meta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-background/50 hover:bg-background hover:text-primary text-[0.68rem] font-bold font-mono uppercase tracking-wider transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Code Repository
              </a>
            )}
            {meta?.liveUrl && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 text-[0.68rem] font-bold font-mono uppercase tracking-wider transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                </svg>
                View Project Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const titleToSlugMap: Record<string, string> = {
  "Rakshak AI – WhatsApp Police Assistance Chatbot": "rakshak-ai-whatsapp-police-assistance-chatbot",
  "Anviksh AI – Learning Platform": "anviksh-ai-learning-platform",
  "MSBTEQuizPro": "msbtequizpro",
  "Msbte Wallah": "msbte-wallah",
  "Secure Data Repository System (SDR)": "secure-data-repository-system-sdr",
  "Team Matrix Web App": "team-matrix-web-app",
  "ANAV – AUTONOMOUS DRONE": "anav-autonomous-drone",
  "RAKSHAK AI IVR – MULTILINGUAL VOICE ASSISTANT": "rakshak-ai-ivr-multilingual-voice-assistant",
  "US-AFRICA INDOOR MAPPING": "us-africa-indoor-mapping",
  "INews Android App": "inews-android-app",
  "Weather App Using React": "weather-app-using-react",
  "Dynamic Portfolio Web Application": "dynamic-portfolio-web-application",
  "QR Attendance": "qr-attendance",
  "Fruit Selling Site": "fruit-selling-site",
  "PDF 2 Audio Converter": "pdf-2-audio-converter",
  "Course Selling Web App": "course-selling-web-app",
  "Covid Victim Counter": "covid-victim-counter",
  "TurfSpot": "turfspot",
};

export function Projects() {
  const { projects } = cvData;
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Pagination states: initially show 6, load increments of 3
  const [visibleCount, setVisibleCount] = useState(6);

  // Helper to parse project duration string and return a timestamp for sorting
  const parseProjectDate = (duration: string) => {
    // Expected formats: "Jul 2025 – Sep 2025", "Nov 2024", "Jan 2026 - Feb 2026", "Present"
    const parts = duration.split(/[-–]/).map(s => s.trim());
    const endDateStr = parts[parts.length - 1];
    if (endDateStr.toLowerCase() === "present") return Date.now();
    
    const date = new Date(endDateStr);
    return isNaN(date.getTime()) ? 0 : date.getTime();
  };

  // Sort projects descending (newest first) based on the parsed duration end date
  const sortedProjects = [...projects].sort((a, b) => {
    return parseProjectDate(b.duration) - parseProjectDate(a.duration);
  });

  // Slice visible projects dynamically
  const visibleProjects = sortedProjects.slice(0, visibleCount);

  const hasMore = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  const renderCard = (project: ProjectType, idx: number, isMobileLayout: boolean) => {
    const meta = projectMeta[project.title];
    if (!meta) return null;
    const slug = titleToSlugMap[project.title] || "";

    // Mobile layout specific styles (Bento pattern)
    const isFullRowMobile = isMobileLayout && idx % 3 === 0;
    const mobileColSpan = isFullRowMobile ? "col-span-2" : "col-span-1";
    const mobileHeight = isFullRowMobile ? "min-h-[18rem] sm:min-h-[22rem]" : "min-h-[16rem] sm:min-h-[20rem]";

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 3) * 0.1 }}
        key={project.title + (isMobileLayout ? '-mobile' : '-desktop')}
        className={`relative w-full rounded-2xl border border-accent-foreground/15 overflow-hidden group cursor-pointer shadow-lg hover:border-primary/40 hover:shadow-2xl transition-all duration-500 ${
          isMobileLayout 
            ? `${mobileColSpan} ${mobileHeight}` 
            : `${meta.aspectClass}`
        }`}
      >
        <Link
          href={`/projects/${slug}`}
          scroll={false}
          className="absolute inset-0 z-40"
          aria-label={`View ${project.title}`}
        />

        <Image
          src={meta.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={idx < 3}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />

        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 z-20 flex flex-col justify-end text-left transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
          <span className="text-[0.55rem] sm:text-[0.58rem] font-mono font-bold text-primary uppercase tracking-widest mb-1">
            {meta.category}
          </span>
          <h3 className="text-xs sm:text-sm font-extrabold text-neutral-100 tracking-tight leading-snug line-clamp-2">
            {project.title}
          </h3>
        </div>

        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 flex flex-col justify-between p-4 sm:p-5 text-left">
          <div className="space-y-1">
            <span className="text-[0.6rem] sm:text-[0.65rem] font-mono text-primary font-bold uppercase tracking-widest">
              {meta.category}
            </span>
            <h4 className="text-xs sm:text-sm font-extrabold text-neutral-50 leading-snug tracking-tight uppercase line-clamp-1 sm:line-clamp-2">
              {project.title}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 sm:line-clamp-4 my-2">
            {meta.abstract}
          </p>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {meta.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 rounded-md border border-neutral-700/50 bg-neutral-800/50 text-[0.62rem] sm:text-xs font-mono text-neutral-300"
                >
                  {tech}
                </span>
              ))}
              {meta.techStack.length > 3 && (
                <span className="px-1.5 py-0.5 rounded-md border border-neutral-700/50 bg-neutral-800/50 text-[0.62rem] sm:text-xs font-mono text-neutral-400">
                  +{meta.techStack.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center text-xs sm:text-sm font-mono font-bold text-primary group-hover/link:text-primary-foreground transition-colors">
              Read Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 ml-1 translate-y-[1px] group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 overflow-hidden bg-background"
    >
      {/* Grid Pattern and spotlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        {/* Subtle Cyber Spotlights */}
        <div className="absolute top-[25%] right-[10%] w-[32rem] h-[32rem] rounded-full bg-primary/5 dark:bg-primary/[0.02] blur-[120px] -z-10" />
        <div className="absolute bottom-[25%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.02] blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10 w-full max-w-[80rem]">
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
              Personal Projects
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Projects
          </h2>
        </motion.div>

        {/* MOBILE VIEW: Grid Layout */}
        <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-6 items-stretch mb-8">
          {visibleProjects.map((project, idx) => renderCard(project, idx, true))}
        </div>

        {/* DESKTOP VIEW: Perfect True Masonry Layout (Left-to-Right logic via split columns) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {visibleProjects.filter((_, i) => i % 3 === 0).map((project, idx) => renderCard(project, idx * 3, false))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {visibleProjects.filter((_, i) => i % 3 === 1).map((project, idx) => renderCard(project, idx * 3 + 1, false))}
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {visibleProjects.filter((_, i) => i % 3 === 2).map((project, idx) => renderCard(project, idx * 3 + 2, false))}
          </div>
        </div>

        {/* Dynamic Pagination Controller positioned at bottom right */}
        {projects.length > 6 && (
          <div className="flex justify-end mt-10">
            {hasMore ? (
              <button
                onClick={handleShowMore}
                className="px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              >
                Show More Projects ({projects.length})
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 animate-bounce">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-5 py-2.5 rounded-xl border border-border bg-background/50 hover:bg-background text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                Show Less
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
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
            stroke="url(#projectsNeonGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="projectsNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            d="M0 40 C100 40, 150 80, 327 80"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-primary/30 dark:stroke-primary/15"
          />
          <path
            d="M0 60 C120 60, 180 100, 327 100"
            stroke="url(#projectsNeonGradientMobile)"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
          <defs>
            <linearGradient id="projectsNeonGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
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
