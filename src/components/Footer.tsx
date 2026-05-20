"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Star } from "lucide-react";

// Zero-dependency direct high-fidelity inline brand SVGs
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LeetcodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.5c0-.8-.7-1.5-1.5-1.5H16l-4.5-4.5c-.6-.6-1.5-.6-2.1 0l-5 5c-.6.6-.6 1.5 0 2.1l7.5 7.5c.6.6 1.5.6 2.1 0l3.5-3.5" />
    <path d="m9 11.5 3 3 5-5" />
  </svg>
);

const HackerrankIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h3v16H6z" />
    <path d="M15 4h3v16h-3z" />
    <path d="M9 12h6" />
    <path d="M4 6V4h2" />
    <path d="M4 18v2h2" />
    <path d="M20 6V4h-2" />
    <path d="M20 18v2-2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Footer rating feedback states
  const [footerRating, setFooterRating] = useState(0);
  const [footerHoveredRating, setFooterHoveredRating] = useState(0);
  const [footerEmail, setFooterEmail] = useState("");
  const [isFooterSubmitting, setIsFooterSubmitting] = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);

  const handleFooterSubmit = async () => {
    if (footerRating === 0 || !footerEmail) return;
    setIsFooterSubmitting(true);

    try {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0;">New Website Feedback Rating</h2>
          <p style="margin: 8px 0; font-size: 16px;"><strong>Rating:</strong> ${"★".repeat(footerRating)}${"☆".repeat(5 - footerRating)} (${footerRating} / 5 Stars)</p>
          <p style="margin: 8px 0; font-size: 16px;"><strong>User Email:</strong> ${footerEmail}</p>
          <p style="margin-top: 16px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #cbd5e1; padding-top: 12px;">
            Submitted from portfolio footer feedback card.
          </p>
        </div>
      `;

      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: "nirajbava222@gmail.com",
          subject: `Portfolio Feedback - ${footerRating} Stars from ${footerEmail}`,
          html_content: emailHtml,
        }),
      });

      localStorage.setItem("portfolio_feedback_submitted", "true");
      setFooterSubmitted(true);
    } catch (err) {
      console.error("Failed to send footer feedback email:", err);
    } finally {
      setIsFooterSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);

    try {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
          <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-top: 0;">New Contact Form Message</h2>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${formState.name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${formState.email}</p>
          <p style="margin-top: 16px; background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #cbd5e1; font-style: italic; line-height: 1.6; color: #334155;">
            ${formState.message.replace(/\n/g, "<br/>")}
          </p>
        </div>
      `;

      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: "nirajbawa222@gmail.com",
          subject: `Portfolio Message from ${formState.name}`,
          html_content: emailHtml,
        }),
      });

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Failed to send message email:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 95, damping: 18 }
    }
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Publications", href: "#publications" },
    { label: "Clubs", href: "#clubs" },
    { label: "Extra-Curricular", href: "#extra-curricular" }
  ];

  return (
    <footer id="contact" className="relative bg-background overflow-hidden pt-10 pb-4 border-t border-border/10">

      {/* Wave Transition Top Separator matching the layout sketch exactly */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] fill-background text-border/20"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
            className="text-background"
          />
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="stroke-accent-foreground/20"
          />
        </svg>
      </div>

      {/* Cyber Carbon Mesh Pattern Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-primary/5 blur-[120px] -z-10" />
        <div className="absolute bottom-[20%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-accent-foreground/5 blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full max-w-[98%] sm:max-w-[96%] lg:max-w-[94%] xl:max-w-[92%]">

        {/* 3-Column Asymmetric Bento Grid Layout with reduced gaps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
        >

          {/* COLUMN 1: Menu List Card (Spans 3 Columns of 12) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-3 rounded-xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md p-4 flex flex-col justify-between hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div>
                <h3 className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-primary">
                  Navigation
                </h3>
                <h2 className="text-lg font-extrabold tracking-tight mt-0.5 text-foreground uppercase">
                  Menu
                </h2>
                <div className="h-0.5 w-8 bg-primary rounded-full mt-1" />
              </div>

              <nav className="grid grid-cols-2 lg:grid-cols-1 gap-x-2 gap-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 group/link"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/20 group-hover/link:bg-primary transition-colors" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* COLUMN 2: Stacked Cards (Spans 4 Columns of 12) */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between h-full">

            {/* STACKED CARD A: Contact details only */}
            <motion.div
              variants={cardVariants}
              className="rounded-xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md p-4 flex flex-col gap-3 hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden shadow-md flex-1"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-2.5 relative z-10">
                <div>
                  <h3 className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-primary">
                    Reach Out
                  </h3>
                  <h2 className="text-lg font-extrabold tracking-tight mt-0.5 text-foreground uppercase">
                    Contact Details
                  </h2>
                  <div className="h-0.5 w-8 bg-primary rounded-full mt-1" />
                </div>

                <div className="space-y-2 pt-1">
                  <a
                    href="mailto:nirajbava222@gmail.com"
                    className="flex items-center gap-2 text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>nirajbava222@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919359839551"
                    className="flex items-center gap-2 text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>+91 9359839551</span>
                  </a>
                  <div className="flex items-center gap-2 text-[0.7rem] sm:text-xs font-semibold text-muted-foreground font-mono">
                    <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>Nashik, MH, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STACKED CARD B: Social Connections - Compacted padding */}
            <motion.div
              variants={cardVariants}
              className="rounded-xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md p-4 flex flex-col justify-between hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden shadow-md min-h-[7.5rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-2.5 relative z-10">
                <div>
                  <h3 className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-primary">
                    Socials
                  </h3>
                  <h2 className="text-lg font-extrabold tracking-tight mt-0.5 text-foreground uppercase">
                    Connect
                  </h2>
                  <div className="h-0.5 w-8 bg-primary rounded-full mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1">
                  <a
                    href="https://github.com/nirajbawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/scl"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/scl:text-primary transition-colors" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nirajbava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/scl"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/scl:text-primary transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/NirajBawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/scl"
                  >
                    <TwitterIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/scl:text-primary transition-colors" />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://leetcode.com/u/nirajbawa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/scl"
                  >
                    <LeetcodeIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/scl:text-primary transition-colors" />
                    <span>LeetCode</span>
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/nirajbava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/scl"
                  >
                    <HackerrankIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/scl:text-primary transition-colors" />
                    <span>HackerRank</span>
                  </a>
                  <a
                    href="mailto:nirajbava222@gmail.com"
                    className="text-[0.7rem] sm:text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/scl"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/scl:text-primary transition-colors" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* STACKED CARD C: Rate this Portfolio */}
            <motion.div
              variants={cardVariants}
              className="rounded-xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md p-4 flex flex-col justify-between hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden shadow-md min-h-[7.5rem] flex-1"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-2.5 relative z-10 w-full">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-primary">
                      Feedback
                    </h3>
                    <h2 className="text-lg font-extrabold tracking-tight mt-0.5 text-foreground uppercase">
                      Rate this Site
                    </h2>
                    <div className="h-0.5 w-8 bg-primary rounded-full mt-1" />
                  </div>

                  {footerSubmitted && (
                    <span className="text-[0.55rem] font-mono font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded">
                      Submitted!
                    </span>
                  )}
                </div>

                {footerSubmitted ? (
                  <div className="flex items-center gap-2 py-1 text-emerald-500 text-xs font-semibold">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Thanks for your rating!</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isActive = star <= (footerHoveredRating || footerRating);
                          return (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFooterRating(star)}
                              onMouseEnter={() => setFooterHoveredRating(star)}
                              onMouseLeave={() => setFooterHoveredRating(0)}
                              className="cursor-pointer transition-transform duration-200 hover:scale-115 focus:outline-none"
                            >
                              <Star
                                className={`w-4 h-4 transition-all duration-200 ${isActive
                                  ? "fill-yellow-500 text-yellow-500 drop-shadow-[0_0_6px_rgba(234,179,8,0.4)]"
                                  : "text-muted-foreground/35"
                                  }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                      <span className="text-[0.62rem] font-mono text-muted-foreground/70">
                        {footerRating > 0 ? `${footerRating} / 5 Selected` : "Select Stars"}
                      </span>
                    </div>

                    <AnimatePresence>
                      {footerRating > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex gap-2 items-center w-full mt-2"
                        >
                          <div className="relative flex-1">
                            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground/60" />
                            <input
                              type="email"
                              required
                              placeholder="Your Email"
                              value={footerEmail}
                              onChange={(e) => setFooterEmail(e.target.value)}
                              className="w-full text-[0.7rem] font-semibold rounded-lg bg-secondary/20 border border-border/40 pl-7 pr-2 py-1 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={handleFooterSubmit}
                            disabled={isFooterSubmitting || !footerEmail}
                            className="px-2.5 py-1.5 cursor-pointer rounded-lg border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary text-[0.6rem] font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 disabled:opacity-50"
                          >
                            {isFooterSubmitting ? "..." : <Send className="w-2.5 h-2.5" />}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>

          </div>

          {/* COLUMN 3: Contact Form (Spans 5 Columns of 12) - Compact inputs */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 rounded-xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md p-4 flex flex-col justify-between hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-4 relative z-10 w-full">
              <div>
                <h3 className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-primary">
                  Get In Touch
                </h3>
                <h2 className="text-lg font-extrabold tracking-tight mt-0.5 text-foreground uppercase">
                  Contact Form
                </h2>
                <div className="h-0.5 w-8 bg-primary rounded-full mt-1" />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-center space-y-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20 p-4"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-500 animate-bounce" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-foreground">Message Sent!</h4>
                    <p className="text-[0.65rem] text-muted-foreground max-w-xs leading-normal">
                      Thank you. Your message has been received. I'll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div className="space-y-0.5">
                    <label htmlFor="name" className="text-[0.55rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full text-[0.7rem] sm:text-xs font-semibold rounded-lg bg-secondary/20 border border-border/40 px-2.5 py-1.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <label htmlFor="email" className="text-[0.55rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full text-[0.7rem] sm:text-xs font-semibold rounded-lg bg-secondary/20 border border-border/40 px-2.5 py-1.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <label htmlFor="message" className="text-[0.55rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Collaborations, open roles, or inquiries..."
                      className="w-full text-[0.7rem] sm:text-xs font-semibold rounded-lg bg-secondary/20 border border-border/40 px-2.5 py-1.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 cursor-pointer rounded-lg border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 text-[0.65rem] font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group-hover:border-primary/60"
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                    <Send className="w-3 h-3 text-primary group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </motion.div>
      </div> {/* Close main grid container */}

      {/* Full-bleed Full-width Copyright Divider Line */}
      <div className="w-full border-t border-accent-foreground/10 mt-8" />

      {/* Bottom Copyright and Links Bar Container */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full max-w-[98%] sm:max-w-[96%] lg:max-w-[94%] xl:max-w-[92%] pt-4 pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-muted-foreground font-mono">
          <p>© 2026 NIRAJ BAVA. All rights reserved.</p>
          <div className="flex gap-4 items-center">

            {/* Horizontal list of important menu links instead of active features */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 justify-center md:justify-end items-center text-[0.65rem] uppercase tracking-wider font-bold">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <span className="text-muted-foreground/30">•</span>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <span className="text-muted-foreground/30">•</span>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <span className="text-muted-foreground/30">•</span>
              <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
              <span className="text-muted-foreground/30">•</span>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
