"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cvData } from "@/data/cv";

// --- Custom Icons ---
const CheckIcon = () => (
  <svg className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ConsultancyIcon = () => (
  <svg className="w-7 h-7 text-cyan-500 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
  </svg>
);

const MentorshipIcon = () => (
  <svg className="w-7 h-7 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

const ProjectIcon = () => (
  <svg className="w-7 h-7 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 text-cyan-500 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-cyan-500 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 9.15 19.79 19.79 0 0 1 1.08 4.22 2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-4 h-4 text-cyan-500 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// --- Types & Interfaces ---
type PlanType = "consultancy" | "mentorship" | "custom" | null;

interface ContactForm {
  email: string;
  phone: string;
  message: string;
}

// --- Hire Modal Component ---
function HireModal({ plan, onClose }: { plan: PlanType; onClose: () => void }) {
  const [form, setForm] = useState<ContactForm>({ email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const planTitle =
    plan === "consultancy"
      ? "Technical Consultancy"
      : plan === "mentorship"
      ? "1-on-1 Mentorship"
      : "Custom Project Building";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.phone) {
      setError("Please fill in both Email and Mobile Number.");
      return;
    }
    setError("");
    setSubmitting(true);
    
    try {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
          <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-top: 0;">New Hire Enquiry</h2>
          <p style="margin: 8px 0;"><strong>Selected Plan:</strong> ${planTitle}</p>
          <p style="margin: 8px 0;"><strong>Client Email:</strong> ${form.email}</p>
          <p style="margin: 8px 0;"><strong>Mobile Number (mo.no):</strong> ${form.phone}</p>
          ${
            form.message
              ? `<p style="margin-top: 16px; background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #cbd5e1; font-style: italic; line-height: 1.6; color: #334155;"><strong>Message:</strong><br/>${form.message.replace(/\n/g, "<br/>")}</p>`
              : ""
          }
        </div>
      `;

      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: "nirajbawa222@gmail.com",
          subject: `New Hire Request: ${planTitle}`,
          html_content: emailHtml,
        }),
      });

      setSubmitted(true);
    } catch (err: any) {
      setError("Failed to send enquiry. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop (Darkened and blurred in both modes) */}
        <motion.div
          className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal Panel (Theme-Adaptive bg-card and border-border) */}
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl overflow-hidden z-10 text-foreground"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Theme Gradient Accent Top */}
          <div
            className={`h-1 w-full bg-gradient-to-r ${
              plan === "consultancy"
                ? "from-cyan-500 to-blue-500"
                : plan === "mentorship"
                ? "from-blue-400 to-indigo-500"
                : "from-indigo-500 to-blue-600"
            }`}
          />

          <div className="p-6 md:p-8 font-sans">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs font-semibold text-cyan-500 dark:text-cyan-400 mb-1 uppercase tracking-wider">
                  Enquiry Request
                </p>
                <h3 className="text-lg font-bold tracking-tight">
                  {planTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-secondary/40 border border-border/40 text-muted-foreground hover:text-foreground transition-all hover:bg-secondary"
              >
                <CloseIcon />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <svg className="w-7 h-7 text-cyan-500 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-cyan-500 dark:text-cyan-400">Request Received!</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  We will contact you just few hours once free.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 rounded-lg bg-secondary border border-border text-foreground text-xs font-semibold uppercase tracking-wider hover:bg-secondary/85 transition-all"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/80">
                      <MailIcon />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary/30 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary/50 transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/80">
                      <PhoneIcon />
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary/30 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary/50 transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground/80">
                      <MessageIcon />
                    </span>
                    <textarea
                      placeholder="Share your goals, stack, or project description..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary/30 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none font-sans"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-red-500 font-semibold tracking-wide">
                    {error}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                    plan === "consultancy"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.01]"
                      : plan === "mentorship"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.01]"
                      : "bg-gradient-to-r from-indigo-500 to-blue-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.01]"
                  }`}
                >
                  {submitting ? "Sending..." : "Submit Inquiry →"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Page Component ---
export default function HireMePage() {
  const [activePlan, setActivePlan] = useState<PlanType>(null);
  const { personalInfo } = cvData;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative flex flex-col justify-between font-sans transition-colors duration-300">
        
        {/* Premium Ambient Grid Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[45rem] h-[45rem] rounded-full bg-cyan-500/[0.03] dark:bg-cyan-500/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-blue-500/[0.03] dark:bg-blue-500/5 blur-[120px]" />
        </div>

        {/* Header Section */}
        <section className="pt-32 pb-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              Available for work
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Hire{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-primary to-blue-600 bg-clip-text text-transparent">
                Niraj Bava
              </span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Whether you need deep-dive technical guidance, personalized developer mentorship, or an experienced full-stack engineer to build your next product—I'm here to help.
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards Grid (3 Columns) - Narrower Max Width, Small Padding & Compact Gaps */}
        <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-6 md:grid-cols-3 w-full flex-1">
          
          {/* Card 1: Technical Consultancy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col rounded-xl border border-cyan-500/20 dark:border-cyan-500/30 hover:border-cyan-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] bg-card/60 dark:bg-card/40"
          >
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            
            <div className="p-5 md:p-6 flex flex-col flex-1 gap-5">
              {/* Header Info */}
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center">
                  <ConsultancyIcon />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Engineering
                </span>
              </div>

              {/* Title & Slogan */}
              <div>
                <h2 className="text-lg font-bold tracking-tight leading-tight">
                  Technical Consultancy
                </h2>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed font-sans">
                  Deep technical guidance for system architecture, codebase audits, and roadmap planning.
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="py-2.5 border-y border-border/40 font-sans">
                <span className="block text-[0.68rem] font-semibold text-muted-foreground uppercase tracking-wider">
                  Hourly Rate
                </span>
                <div className="flex items-end gap-1 mt-0.5">
                  <span className="text-2xl font-bold">$5</span>
                  <span className="text-muted-foreground text-xs font-mono pb-0.5">/ hr</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-2 flex-1">
                {[
                  "System architecture & database design",
                  "Deep-dive technical consulting calls",
                  "Codebase audits & practices review",
                  "Performance optimization advice",
                  "Tech stack & backend advisory",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 leading-tight">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => setActivePlan("consultancy")}
                className="mt-2 w-full py-2.5 rounded-lg font-semibold text-xs text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-[1.01]"
              >
                Hire for Consulting →
              </button>
            </div>
          </motion.div>

          {/* Card 2: Mentorship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative flex flex-col rounded-xl border border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] bg-card/60 dark:bg-card/40"
          >
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-indigo-500" />
            
            <div className="p-5 md:p-6 flex flex-col flex-1 gap-5">
              {/* Header Info */}
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg border border-blue-500/20 bg-blue-500/5 flex items-center justify-center">
                  <MentorshipIcon />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Education
                </span>
              </div>

              {/* Title & Slogan */}
              <div>
                <h2 className="text-lg font-bold tracking-tight leading-tight">
                  1-on-1 Mentorship
                </h2>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed font-sans">
                  Structured career training, structured concept learning, and active pair programming.
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="py-2.5 border-y border-border/40 font-sans">
                <span className="block text-[0.68rem] font-semibold text-muted-foreground uppercase tracking-wider">
                  Hourly Rate
                </span>
                <div className="flex items-end gap-1 mt-0.5">
                  <span className="text-2xl font-bold">$1</span>
                  <span className="text-muted-foreground text-xs font-mono pb-0.5">/ hr</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-2 flex-1">
                {[
                  "Personalized structured tutoring sessions",
                  "Structured career growth roadmap",
                  "Structured coding learning roadmaps",
                  "Personal project code reviews",
                  "Live debugging & pair programming help",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 leading-tight">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => setActivePlan("mentorship")}
                className="mt-2 w-full py-2.5 rounded-lg font-semibold text-xs text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:scale-[1.01]"
              >
                Hire for Mentorship →
              </button>
            </div>
          </motion.div>

          {/* Card 3: Custom Project Building */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex flex-col rounded-xl border border-indigo-500/20 dark:border-indigo-500/30 hover:border-indigo-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] bg-card/60 dark:bg-card/40"
          >
            <div className="h-1 w-full bg-gradient-to-r from-indigo-400 to-indigo-600" />
            
            <div className="p-5 md:p-6 flex flex-col flex-1 gap-5">
              {/* Header Info */}
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg border border-indigo-500/20 bg-indigo-500/5 flex items-center justify-center">
                  <ProjectIcon />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  Full Stack
                </span>
              </div>

              {/* Title & Slogan */}
              <div>
                <h2 className="text-lg font-bold tracking-tight leading-tight">
                  Custom Project Building
                </h2>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed font-sans">
                  End-to-end development of modern web applications tailored specifically to your requirements.
                </p>
              </div>

              {/* Pricing Row (Custom) */}
              <div className="py-2.5 border-y border-border/40 font-sans">
                <span className="block text-[0.68rem] font-semibold text-muted-foreground uppercase tracking-wider">
                  Fixed-Price / Retainer
                </span>
                <div className="flex items-end gap-1 mt-0.5">
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text">
                    Custom Plan
                  </span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-2 flex-1">
                {[
                  "Production web apps built from scratch",
                  "Modern Next.js, React, Node.js & Python stack",
                  "Database architecture (PostgreSQL, MongoDB)",
                  "AI integration (LLM APIs, agents, RAG)",
                  "Scalable cloud deployment & hosting setup",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 leading-tight">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => setActivePlan("custom")}
                className="mt-2 w-full py-2.5 rounded-lg font-semibold text-xs text-white transition-all duration-300 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:scale-[1.01]"
              >
                Hire for Project →
              </button>
            </div>
          </motion.div>

        </section>

        {/* Bottom Contact Alternative */}
        <section className="text-center pb-16 px-6">
          <p className="text-xs text-muted-foreground font-sans">
            Have a different concept or custom requirement?{" "}
            <a
              href="https://wa.me/919359839551"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 underline underline-offset-2 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors font-bold font-sans"
            >
              Reach out directly on WhatsApp (9359839551) →
            </a>
          </p>
        </section>
      </main>

      <Footer />

      {/* Pop-up form Modal */}
      {activePlan && (
        <HireModal plan={activePlan} onClose={() => setActivePlan(null)} />
      )}
    </>
  );
}
