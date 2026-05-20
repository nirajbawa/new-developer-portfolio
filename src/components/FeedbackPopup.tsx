"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, Check, Mail, Send } from "lucide-react";

export default function FeedbackPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed or submitted feedback
    const feedbackDismissed = localStorage.getItem("portfolio_feedback_dismissed");
    const feedbackSubmitted = localStorage.getItem("portfolio_feedback_submitted");

    if (feedbackDismissed || feedbackSubmitted) {
      return;
    }

    // Set a timer to show the popup after 12 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("portfolio_feedback_dismissed", "true");
  };

  const handleRatingSelect = (selected: number) => {
    setRating(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !email) return;
    setIsSubmitting(true);

    try {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0;">New Website Feedback Rating</h2>
          <p style="margin: 8px 0; font-size: 16px;"><strong>Rating:</strong> ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating} / 5 Stars)</p>
          <p style="margin: 8px 0; font-size: 16px;"><strong>User Email:</strong> ${email}</p>
          <p style="margin-top: 16px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #cbd5e1; padding-top: 12px;">
            Submitted from portfolio feedback popup modal.
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
          subject: `Portfolio Feedback - ${rating} Stars from ${email}`,
          html_content: emailHtml,
        }),
      });

      localStorage.setItem("portfolio_feedback_submitted", "true");
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to submit feedback:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-6 right-6 z-[9999] w-[90%] sm:w-[22rem] overflow-hidden rounded-2xl border border-primary/20 bg-background/85 backdrop-blur-xl shadow-2xl p-5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Cyber Neon Glowing Border Effect */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-purple-500 to-primary" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-6 h-6 rounded-md border border-border/40 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            aria-label="Dismiss feedback"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-4 text-center space-y-2"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <Check className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-foreground">Thank You!</h3>
                <p className="text-xs text-muted-foreground leading-normal">
                  Your feedback helps me improve the portfolio experience.
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1 text-left">
                <span className="text-[0.55rem] font-mono font-bold text-primary uppercase tracking-widest block">
                  Quick Survey
                </span>
                <h3 className="text-sm font-extrabold text-foreground uppercase tracking-tight">
                  Enjoying My Portfolio?
                </h3>
                <p className="text-xs text-muted-foreground leading-normal">
                  Take 5 seconds to rate your experience! No message required.
                </p>
              </div>

              {/* 5 Star Rating Group */}
              <div className="flex justify-center items-center gap-2 py-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isActive = star <= (hoveredRating || rating);
                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingSelect(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="cursor-pointer transition-transform duration-200 hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 transition-all duration-300 ${
                          isActive
                            ? "fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                            : "text-muted-foreground/35"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Email Form Panel (Appears smoothly after a star is selected) */}
              <AnimatePresence>
                {rating > 0 && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-2.5 overflow-hidden"
                  >
                    <div className="space-y-1 text-left">
                      <label htmlFor="feedback-email" className="text-[0.55rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60" />
                        <input
                          type="email"
                          id="feedback-email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. john@example.com"
                          className="w-full text-xs font-semibold rounded-lg bg-secondary/20 border border-border/40 pl-9 pr-3 py-2 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2 cursor-pointer rounded-lg border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 text-[0.62rem] font-bold font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Feedback</span>
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
