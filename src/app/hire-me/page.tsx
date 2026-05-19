"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// --- Icons ---
const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const CloseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="12" /><path d="M12 12h.01" />
  </svg>
);
const CodeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 9.15 19.79 19.79 0 0 1 1.08 4.22 2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
  </svg>
);
const MessageIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// --- Types ---
type PlanType = "consulting" | "webdev" | null;

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// --- Contact Modal ---
function ContactModal({ plan, onClose }: { plan: PlanType; onClose: () => void }) {
  const [form, setForm] = useState<ContactForm>({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const planLabel = plan === "consulting" ? "Consulting (₹400/hr)" : "Web Development (₹700/hr)";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);
    // Simulate sending (replace with real API call / EmailJS / etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#080d1a] shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", stiffness: 280, damping: 25 }}
        >
          {/* Top accent bar */}
          <div className={`h-1 w-full ${plan === "consulting" ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-gradient-to-r from-violet-500 to-fuchsia-500"}`} />

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className={`text-[0.65rem] font-mono font-bold uppercase tracking-widest mb-1 ${plan === "consulting" ? "text-cyan-400" : "text-violet-400"}`}>
                  Enquiring For
                </p>
                <h2 className="text-lg font-black text-white">{planLabel}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <CloseIcon />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 space-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-slate-400">I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-mono text-slate-400 uppercase tracking-wider">Full Name *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"><PhoneIcon /></span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-mono text-slate-400 uppercase tracking-wider">Phone Number *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"><PhoneIcon /></span>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-mono text-slate-400 uppercase tracking-wider">Email Address *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"><MailIcon /></span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-mono text-slate-400 uppercase tracking-wider">Message (optional)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-slate-500"><MessageIcon /></span>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-red-400 font-mono">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                    plan === "consulting"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
                      : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
                  }`}
                >
                  {submitting ? "Sending…" : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Plan Card ---
function PlanCard({
  type,
  icon,
  badge,
  title,
  subtitle,
  price,
  priceSuffix,
  altPrice,
  features,
  accentFrom,
  accentTo,
  borderColor,
  badgeColor,
  ctaLabel,
  onContact,
  featured,
}: {
  type: PlanType;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  altPrice?: string;
  features: string[];
  accentFrom: string;
  accentTo: string;
  borderColor: string;
  badgeColor: string;
  ctaLabel: string;
  onContact: () => void;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${borderColor} ${featured ? "shadow-xl" : ""}`}
      style={{ background: "rgba(6, 11, 28, 0.7)" }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />

      {featured && (
        <div className={`absolute top-4 right-4 text-[0.6rem] font-black font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${badgeColor}`}>
          Most Popular
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col flex-1 gap-6">
        {/* Icon + Badge */}
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl border bg-gradient-to-br ${accentFrom} ${accentTo} text-white bg-opacity-10`} style={{ background: "rgba(255,255,255,0.05)" }}>
            <span className={`bg-gradient-to-br ${accentFrom} ${accentTo} bg-clip-text text-transparent`}>
              {icon}
            </span>
          </div>
          <span className={`text-[0.65rem] font-black font-mono uppercase tracking-widest px-2.5 py-1 rounded-md ${badgeColor}`}>
            {badge}
          </span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{title}</h2>
          <p className="mt-1.5 text-sm text-slate-400 font-mono">{subtitle}</p>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-end gap-2">
            <span className={`text-5xl font-black bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}>
              {price}
            </span>
            <span className="text-slate-400 text-sm font-mono pb-2">{priceSuffix}</span>
          </div>
          {altPrice && (
            <p className="text-xs text-slate-500 font-mono">{altPrice}</p>
          )}
        </div>

        {/* Divider */}
        <div className={`h-px w-full bg-gradient-to-r ${accentFrom} ${accentTo} opacity-20`} />

        {/* Features */}
        <ul className="space-y-2.5 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onContact}
          className={`mt-2 w-full py-3.5 rounded-xl font-black text-sm tracking-wide text-white transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r ${accentFrom} ${accentTo} hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]`}
        >
          {ctaLabel}
        </button>
      </div>
    </motion.div>
  );
}

// --- Page ---
export default function HireMePage() {
  const [activePlan, setActivePlan] = useState<PlanType>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#03070d] text-white overflow-x-hidden">

        {/* Background ambient glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-[50rem] h-[50rem] rounded-full bg-cyan-500/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50rem] h-[50rem] rounded-full bg-violet-500/5 blur-[120px]" />
        </div>

        {/* Hero */}
        <section className="pt-36 pb-16 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.65rem] font-mono font-bold uppercase tracking-widest text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work · Remote &amp; On-site
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Whether you need expert consultation or a full-scale web product — choose the plan that fits your need and let&apos;s get started.
            </p>
          </motion.div>
        </section>

        {/* Plans Grid */}
        <section className="max-w-5xl mx-auto px-6 pb-28 grid gap-8 md:grid-cols-2">
          {/* Plan 1 — Consulting */}
          <PlanCard
            type="consulting"
            icon={<BriefcaseIcon />}
            badge="Consulting"
            title="Expert Consulting"
            subtitle="Strategic guidance, architecture reviews & technical mentorship"
            price="₹400"
            priceSuffix="/ hr"
            altPrice="Billed per day · Minimum 2 hrs"
            features={[
              "1-on-1 architecture & system design sessions",
              "Code review & best practices audit",
              "Tech stack selection & roadmap planning",
              "AI/ML integration consulting",
              "Cloud infrastructure (AWS) advisory",
              "Startup MVP strategy & prioritization",
              "Available via Zoom / Google Meet / in-person",
            ]}
            accentFrom="from-cyan-400"
            accentTo="to-blue-600"
            borderColor="border-cyan-500/20 hover:border-cyan-500/50"
            badgeColor="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            ctaLabel="Get in Touch →"
            onContact={() => setActivePlan("consulting")}
          />

          {/* Plan 2 — Web Dev */}
          <PlanCard
            type="webdev"
            icon={<CodeIcon />}
            badge="Development"
            title="Web Development"
            subtitle="Full-stack production-ready web apps built end-to-end"
            price="₹700"
            priceSuffix="/ hr"
            altPrice="Or fixed-price for custom projects — contact to discuss"
            features={[
              "Full-stack: React / Next.js + Node / Python backend",
              "Database design: MongoDB, PostgreSQL, Redis",
              "RESTful & GraphQL API development",
              "AI/GenAI feature integration (RAG, chatbots, agents)",
              "AWS deployment, CI/CD, Docker containerization",
              "End-to-end testing & security hardening",
              "Post-delivery support & maintenance options",
            ]}
            accentFrom="from-violet-500"
            accentTo="to-fuchsia-500"
            borderColor="border-violet-500/20 hover:border-violet-500/50"
            badgeColor="bg-violet-500/10 text-violet-400 border border-violet-500/20"
            ctaLabel="Start a Project →"
            onContact={() => setActivePlan("webdev")}
            featured
          />
        </section>

        {/* Bottom note */}
        <section className="text-center pb-20 px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-slate-500 font-mono"
          >
            Not sure which plan fits? Drop a message — we&apos;ll figure it out together.{" "}
            <button
              onClick={() => setActivePlan("webdev")}
              className="text-violet-400 underline underline-offset-2 hover:text-violet-300 transition-colors"
            >
              Contact me →
            </button>
          </motion.p>
        </section>
      </main>

      <Footer />

      {/* Contact Modal */}
      {activePlan && (
        <ContactModal plan={activePlan} onClose={() => setActivePlan(null)} />
      )}
    </>
  );
}
