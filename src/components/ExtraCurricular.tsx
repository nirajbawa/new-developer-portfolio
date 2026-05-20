"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Image Imports with exact filesystem spellings
import policeImg from "@/assets/images/extra-police-assitance-1.jpeg";
import jamiaImg from "@/assets/images/extra-jamia-seminar-1.jpeg";
import cricketImg from "@/assets/images/extra-cricket-1.jpg";
import ashramImg from "@/assets/images/extra-asharm-school.jpg";

interface Activity {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: any;
  tags: string[];
}

const activitiesList: Activity[] = [
  {
    id: 1,
    title: "Police Department AI & Tech Upskilling",
    category: "Public Service & AI Training",
    location: "Nashik Rural Police Headquarters",
    description: "Assisted officers from the Nashik Rural Police Department in upskilling on artificial intelligence tools, productivity suites, and fundamental cybersecurity protocols to modernize daily workflows and optimize police operations.",
    image: policeImg,
    tags: ["AI Upskilling", "Cybersecurity", "Public Service"]
  },
  {
    id: 2,
    title: "Competitive Cricket & Team Athletics",
    category: "Sports & Team Leadership",
    location: "Inter-College Tournaments",
    description: "Actively participated in competitive cricket tournaments at class and collegiate levels, demonstrating excellence in strategic execution, high-pressure teamwork, rapid decision-making, and discipline.",
    image: cricketImg,
    tags: ["Sportsmanship", "Team Leadership", "Athletics"]
  },
  {
    id: 3,
    title: "Academic Mentorship & GenAI Awareness Drive",
    category: "Academic Mentorship",
    location: "Jamia Polytechnic",
    description: "Conducted interactive guest mentorship sessions as an alumnus for over 200+ juniors on career growth, modern front-end technologies, and Generative AI trends, guiding final-year students in academics and high-tier college admissions.",
    image: jamiaImg,
    tags: ["Mentorship", "Generative AI", "Alumni Engagement"]
  },
  {
    id: 4,
    title: "Ashram School Science Awareness Initiative",
    category: "Social Impact & Education",
    location: "Adivasi Ashram School, Dhalgaon",
    description: "Coordinated and executed an educational awareness drive for Adivasi Ashram School students in the remote hilly regions of Nandurbar district, collaborating with the primary school principal to inspire foundational science curiosity.",
    image: ashramImg,
    tags: ["Rural Education", "Social Welfare", "Science Outreach"]
  }
];

const puzzleClasses = [
  // Card 1: Horizontal Landscape Spanning 2 Columns (Row 1)
  "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 h-96 md:h-80 lg:h-[20rem]",
  // Card 2: Extremely Tall Vertical Spanning 2 Rows (Row 1 & Row 2)
  "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2 h-[28rem] md:h-96 lg:h-[42.5rem]",
  // Card 3: Standard Square (Row 2, Column 1)
  "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 h-96 md:h-80 lg:h-[20rem]",
  // Card 4: Standard Square (Row 2, Column 2)
  "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 h-96 md:h-80 lg:h-[20rem]"
];

export default function ExtraCurricular() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 85, damping: 16 }
    }
  };

  return (
    <section id="extra-curricular" className="relative py-24 bg-background overflow-hidden border-t border-border/10">
      {/* Cyber Ambient Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-[20%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-primary/5 blur-[100px] -z-10" />
        <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] rounded-full bg-accent-foreground/5 blur-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-[0.65rem] font-mono text-primary uppercase tracking-[0.25em]">
              Life Beyond Code & Engineering
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
            Extra-Curricular Activities
          </h2>
        </motion.div>

        {/* Puzzle Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {activitiesList.map((activity, idx) => {
            const gridClass = puzzleClasses[idx % puzzleClasses.length];

            return (
              <motion.div
                key={activity.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl border border-accent-foreground/15 bg-secondary/10 overflow-hidden relative shadow-lg cursor-pointer ${gridClass}`}
              >
                {/* Background Image */}
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 scale-100 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.35]"
                  priority={activity.id <= 3}
                />

                 {/* Dark Vignette Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-all duration-500 group-hover:bg-black/90 pointer-events-none" />

                {/* Category Floating Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg shadow-sm z-20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 pointer-events-none flex items-center justify-center text-center">
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider text-center">
                    {activity.category}
                  </span>
                </div>

                {/* Content Panel aligned to the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-20 flex flex-col justify-end pointer-events-none">
                  
                  {/* Title wrapper which is ALWAYS visible at the center by default */}
                  <div className="space-y-1.5 pointer-events-auto transition-all duration-500 ease-in-out">
                    {/* Location Context */}
                    <div className="flex items-center gap-1.5 text-white/70">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-primary flex-shrink-0">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider truncate">
                        {activity.location}
                      </span>
                    </div>

                    {/* Title of the card */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors duration-300 leading-snug tracking-tight">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Sliding Info: Description & Tags - visible on hover, smoothly animated to prevent overlapping */}
                  <div className="max-h-0 group-hover:max-h-[300px] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-0 group-hover:mt-3 pointer-events-auto">
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-1.5 border-t border-white/10">
                      {activity.description}
                    </p>

                    {/* Tags Footer */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10 mt-3">
                      {activity.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[0.6rem] sm:text-[0.65rem] font-mono font-bold text-white/70 bg-white/10 px-1.5 py-0.5 rounded border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* SVG Transition Separator for bottom border line consistency */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-12 text-primary/10 fill-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C300 60, 450 20, 600 20 C750 20, 900 60, 1200 60"
            stroke="currentColor"
            strokeWidth="1.5"
            className="stroke-border/40"
          />
        </svg>
      </div>
    </section>
  );
}
