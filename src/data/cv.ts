export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
  instagram?: string;
  x?: string;
  hackerrank?: string;
  researchgate?: string;
}

export interface Summary {
  text: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  details: string;
  duration: string;
  bullets: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
  link?: string;
}

export interface Project {
  title: string;
  duration: string;
  link?: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  role?: string;
  location: string;
  duration: string;
  bullets: string[];
  link?: string;
}

export interface Publication {
  title: string;
  role: string;
  duration: string;
  bullets: string[];
  link?: string;
}

export interface Club {
  name: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  summary: Summary;
  education: Education[];
  experience: WorkExperience[];
  projects: Project[];
  skills: SkillCategory[];
  achievements: Achievement[];
  publications: Publication[];
  clubs: Club[];
  certifications: string[];
  extraCurricular: string[];
}

export const cvData: CVData = {
  personalInfo: {
    name: "NIRAJ BAVA",
    title: "Full-Stack Engineer",
    location: "Nashik, MH",
    phone: "+91 9359839551",
    email: "nirajbava222@gmail.com",
    linkedin: "https://linkedin.com/in/nirajbava",
    github: "https://github.com/nirajbawa",
    leetcode: "https://leetcode.com/nirajbava222",
    instagram: "https://instagram.com/nirajbava",
    x: "https://x.com/nirajbawa",
    hackerrank: "https://hackerrank.com/nirajbava",
    researchgate: "https://researchgate.net/profile/Niraj-Bava",
  },
  summary: {
    text: "Full-Stack Engineer delivering production systems that bridge technical innovation with social impact. Track record spanning startup product development, government–backed technology initiatives, and published research in AI applications. Expert in architecting and deploying robust, scalable solutions that handle real users in live environments — from AI-powered public service platforms to enterprise automation systems. Specialized in end-to-end ownership: system design, cloud infrastructure, full-stack development, and production deployment. Driven by the conviction that well-engineered software can transform lives, consistently building technology that solves meaningful problems with efficiency, security, and scalability.",
  },
  education: [
    {
      degree: "Bachelor of Technology – Computer Engineering",
      institution: "K.K. Wagh Institute of Engineering Education & Research",
      location: "Nashik, MH",
      details: "(SPPU Affiliated | Autonomous | NAAC A) | SGPA: 8.26/10",
      duration: "2024 – 2027",
      bullets: [
        "Pursuing B.Tech with a focus on software engineering, AI/ML, and systems development, actively applying academic concepts through real-world projects.",
        "Solved 100+ LeetCode DSA problems and consistently engaged in both technical and non-technical activities.",
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Jamia Polytechnic",
      location: "Akkalkuwa, NBD, MH",
      details: "(MSBTE Affiliated) | Aggregate: 88.86%",
      duration: "2021 – 2024",
      bullets: [
        "Graduated with a distinguished academic record, securing the highest marks across Nandurbar district.",
        "Maintained top performance with 1st rank in 4 semesters and contributed to curriculum planning while organizing technical seminars to promote web development.",
      ],
    },
    {
      degree: "Secondary Education",
      institution: "Nemsushil Vidyamandir",
      location: "Taloda, NBD, MH",
      details: "(MSBSHSE Affiliated) | Percentage: 86.20% (SSC)",
      duration: "2010 – 2021",
      bullets: [
        "Actively participated in Scouts and Guides, leading the wing during Independence Day celebrations in Class 9, and took part in the Rajyapuraskar Camp.",
        "Participated in science exhibitions and national Olympiads, achieving School Rank 1 and State Rank 17 in the National Computer Indian Talent Olympiad, reflecting strong academic and analytical abilities.",
      ],
    },
  ],
  experience: [
    {
      company: "NEURONEX DEVELOPERS",
      role: "Co-Founder & CTO",
      location: "Nashik, Maharashtra, India · On-site",
      duration: "Nov 2025 – Present",
      bullets: [
        "Lead technical strategy and delivery of AI-powered public safety platforms in production with government stakeholders.",
        "Rakshak AI (WhatsApp): Architected RAG-based multilingual legal chatbot for Nashik Rural Police. Reached 5,000+ users in first month. Secured ₹6L annual funding by reducing costs 50% (₹12L → ₹6L) via cloud optimization.",
        "SDR System: Built offline-first, district-level private cloud for police with role-based access, encrypted ingestion, audit logging, and AI search — ensuring data isolation across districts.",
        "Rakshak AI IVR (in development): Leading voice-based system for Nashik Police & Kumbh Mela Authority to handle massive concurrent calls during Kumbh Mela. Enables multilingual IVR, real-time intent detection, and human escalation.",
        "Government Stakeholder Coordination: Directly engaged with PI, DSP, SP, IG, and IAS officers including Commissioner & Divisional Commissioner — securing buy-in and navigating bureaucratic workflows for deployment.",
        "Tender & Contract Acquisition: Successfully cracked government tender process for Rakshak AI, managing technical proposals, compliance documentation, and financial negotiations to win state-funded contracts.",
        "Technical Operations: Manage full-stack engineering, AWS infrastructure, DevOps, end-to-end encryption, and compliance. Lead cross-functional team, agile delivery, and client coordination with police & civic authorities.",
      ],
      link: "#",
    },
    {
      company: "DREAMCARE DEVELOPERS",
      role: "Full Stack Developer (Project Consultant)",
      location: "Pune District, Maharashtra, India · Hybrid",
      duration: "Sep 2025 – Nov 2025",
      bullets: [
        "Served as Project Consultant for government web applications, architecting scalable full-stack solutions.",
        "Reduced infrastructure and operational costs through cloud optimization and eliminating redundant services.",
        "Implemented load balancing, database indexing, and caching strategies to enhance application performance.",
        "Developed in-house alternatives to third-party APIs, ensuring service reliability across deployments.",
      ],
      link: "#",
    },
    {
      company: "INVENTURS CUBE LLP",
      role: "Software Engineer Intern",
      location: "Remote, Indore",
      duration: "May 2025 – Jan 2026",
      bullets: [
        "Engineered an indoor mapping application for client operating across the US and Africa, improving navigation accuracy and spatial visualization efficiency by 90%.",
        "Built backend microservices automating scraping and Shopify sync, reducing manual work by 90% and speeding up client onboarding.",
      ],
      link: "#",
    },
    {
      company: "INVENTURS CUBE LLP",
      role: "Full Stack Web Developer Intern",
      location: "Remote, Indore",
      duration: "Jun 2023 – May 2024",
      bullets: [
        "Worked as a full stack developer using MERN and FARM stack web technologies.",
        "Enhanced Geeky AI Wallpapers App: Engineered Flask backend for text-to-image generation using Stable Diffusion XL, reducing infrastructure and API costs by 50% via optimized concurrent request handling, and integrated CUDA driver for faster image generation.",
        "Developed FastAPI services for AI Tools App: Engineered PDF text extraction API using Tesseract OCR for multilingual support, Q&A API using RoBERTa-base model, and text summarization using BART-Large-CNN model; developed feature for existing ExpressJS API for ChatGPT context management to reduce cost per request.",
        "Contributed to Internal React Dashboard: Built management interface for services and API tokens, and developed image-to-text translation feature, reducing manual translation effort by 60% and expanding platform support to 5+ languages.",
      ],
      link: "#",
    },
    {
      company: "VRINDA PAPERS PRIVATE LIMITED",
      role: "Web Development Intern",
      location: "Remote, Noida",
      duration: "Jul 2022 – Aug 2022",
      bullets: [
        "Maintained and enhanced web applications using PHP and custom server-side logic.",
        "Engineered a Google Sheets-integrated stock inquiry plugin enabling real-time inventory tracking, reducing manual work by 80% through Google Apps Script automation.",
        "Handled WordPress custom theme design and web app maintenance.",
      ],
      link: "#",
    },
  ],
  projects: [
    {
      title: "Rakshak AI – WhatsApp Police Assistance Chatbot",
      duration: "Jul 2025 – Sep 2025",
      link: "https://github.com/nirajbawa/rakshak-ai",
      bullets: [
        "In collaboration with Nashik Rural Police | Govt-Funded (₹6 Lakhs Annual Maintenance).",
        "Officially deployed WhatsApp chatbot (+91 70661 00112) serving thousands of citizens, supporting English & Marathi with voice note and text interaction.",
        "Delivers instant AI-powered legal guidance on BNS, IPC, CrPC, and Cyber Law, alongside geo-location-based jurisdiction lookup for nearest police stations.",
        "Features an automated incident reporting workflow that routes standard issues to local PIs and auto-escalates confidential/sensitive events directly to DySP/ASP/SP using AI.",
        "SOS support system with emergency contacts and a live map integration to ensure rapid citizen protection.",
      ],
    },
    {
      title: "Anviksh AI – Learning Platform",
      duration: "Feb 2025 – Mar 2025",
      link: "https://github.com/nirajbawa/anviksh-ai",
      bullets: [
        "Intelligently organizes free online educational resources into clear, skill-based roadmaps generated locally via DeepSeek AI based on user goal inputs.",
        "Schedules daily structured tasks (videos, quizzes, practice) dynamically in a calendar layout with milestoned visual progress tracking.",
        "Integrates a robust multi-role architecture: Learners (curate paths), Admins (manage platform metrics), Experts (validate course quality), and Premium Mentors (real-time chat assistance).",
        "Features secure Razorpay payment gateway integration for seamless premium plan upgrades and live mentor chat unlocking.",
      ],
    },
    {
      title: "MSBTEQuizPro",
      duration: "Jul 2024 – Sep 2024",
      link: "https://github.com/nirajbawa/msbte-quiz-pro",
      bullets: [
        "Web application designed specifically for MSBTE students to prepare for exams, simulating the official MSBTE examination portal environment.",
        "Offers both free and premium MCQ tests with Zustand device-synced cart operations and secure Razorpay payment gateway integration.",
        "Includes a secure user workflow with Next Auth OTP verification, dynamic useForm handling, and high-concurrency MongoDB operations.",
        "Provides an administrator control board to monitor real-time purchase metrics, view site traffic statistics, and edit tests dynamically with live sync.",
      ],
    },
    {
      title: "Msbte Wallah",
      duration: "Dec 2023 – Jan 2024",
      link: "https://github.com/nirajbawa/msbtewallah",
      bullets: [
        "A social edutech platform (msbtewallah.in) dedicated to MSBTE students to centralize syllabus resource sharing and academic interaction.",
        "Empowers student learning communities with centralized peer study rooms, Google OAuth authentication, and real-time Firebase notifications.",
        "Built a highly responsive and lightweight portal using the full MERN stack (MongoDB, Express, React, Node) with custom styling.",
      ],
    },
    {
      title: "Secure Data Repository System (SDR)",
      duration: "Jan 2026 – Feb 2026",
      link: "https://github.com/nirajbawa/sdr-system",
      bullets: [
        "District freelance project for the Nashik Rural Police Cyber Department, successfully transformed into a commercial multi-tenant SaaS product.",
        "Offline-First Security: All subscriber records are stored locally with AES-256 encryption without relying on public cloud infrastructure (no AWS, Azure, or private VPS).",
        "AI-Powered Schema Mapping: Leveraged GPT-5 Mini to auto-detect and map inconsistent column headers from varying telecom company templates.",
        "Instant Search at Scale: Integrated Meilisearch engine to query billions of records in less than 3 seconds with typography-tolerance.",
        "Secure Remote Access: Deployed Cloudflare Tunnels enabling remote police stations to query database interfaces while the master DB remains completely offline.",
        "Compliance & Onboarding: Engineered Super Admin modules (Nest.js + PostgreSQL) to manage district onboarding, track subscription cycles, and maintain 7 years of immutable audit logs.",
      ],
    },
    {
      title: "Team Matrix Web App",
      duration: "Jan 2025 – Jan 2025",
      link: "https://github.com/nirajbawa/team-matrix-app",
      bullets: [
        "Full-stack management and sharing workspace crafted for the internal operations of the Team Matrix robotics club.",
        "Features a robust admin dashboard allowing administrators to customize layout components, manage member rosters, and audit logs.",
        "Enables a secure member login system supporting collaborative blog writing, project showcase logs, and Framer Motion animated timelines.",
      ],
    },
    {
      title: "ANAV – AUTONOMOUS DRONE",
      duration: "Nov 2024",
      link: "https://github.com/nirajbawa/anav-drone",
      bullets: [
        "Designed and developed a fully GPS-free autonomous drone leveraging SLAM (Simultaneous Localization and Mapping) for real-time environment mapping, self-localization, and autonomous path planning in unknown indoor and outdoor terrains.",
        "Implemented obstacle detection and avoidance algorithms enabling the drone to navigate complex environments dynamically without human intervention.",
        "Built a real-time telemetry system providing live data transmission including altitude, orientation, velocity, and sensor readings to a ground control interface.",
        "Selected among top teams nationwide for the ISRO-IROC (Inter-Institutional Robotics Challenge) Grand Finale, held at URSC (U.R. Rao Satellite Centre), Bengaluru.",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "C++"],
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "React Native", "Electron.js"],
    },
    {
      category: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Flask",
        "FastAPI",
        "Apache Kafka",
        "BullMQ",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "Qdrant", "Redis", "PostgreSQL", "SQL"],
    },
    {
      category: "Generative AI",
      items: [
        "RAG",
        "LangChain",
        "OpenAI APIs",
        "Google Gemini SDK",
        "MCP",
        "Prompt Engineering",
        "Ollama",
        "CUDA Acceleration",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS (EC2, S3, ASG, VPC, ELB/ALB, EIP, ECS, ECR)",
        "Git & GitHub",
        "CI/CD",
        "Docker",
      ],
    },
    {
      category: "Software Engineering",
      items: ["SDLC", "Agile", "SCRUM", "COCOMO", "SRS", "SPM"],
    },
  ],
  achievements: [
    {
      title: "PICT’S IMPETUS INTERNATIONAL LEVEL PROJECT EXHIBITION",
      role: "1st Winner",
      location: "Pune",
      duration: "Mar 2025",
      bullets: [
        "Competed against teams from across the globe at PICT's Impetus, one of India's most prestigious project competitions, and secured 1st place for building an innovative, technically rigorous, and high-impact project that stood out for its real-world applicability and engineering depth.",
      ],
      link: "https://drive.google.com/file/d/1m-iWSxesXOXe7B0QP4qX2G25Y4ZfBQXz/view?usp=sharing",
    },
    {
      title: "RECOGNITION FOR RAKSHAK AI CHATBOT DEVELOPMENT",
      role: "Project System Architect",
      location: "Nashik",
      duration: "Sep 2025",
      bullets: [
        "Received formal recognition from the Nashik Rural Police and the Governor of Maharashtra for designing and deploying Rakshak AI — a government-funded, multilingual AI chatbot that redefined citizen-police engagement and set a benchmark for AI-driven public safety solution in rural India.",
      ],
      link: "https://drive.google.com/file/d/1-JEl80MpWR3maSzUuwf4tXmBoUaBc1ul/view",
    },
    {
      title: "ISRO ROBOTICS CHALLENGE 2025",
      role: "Finalist",
      location: "Bangalore",
      duration: "Apr 2025",
      bullets: [
        "Selected among the top teams nationwide for the Grand Finale held at URSC (U.R. Rao Satellite Centre), Bengaluru, for developing a GPS-free autonomous drone using SLAM for real-time navigation and obstacle avoidance.",
      ],
      link: "https://drive.google.com/file/d/1INlmuOLDTkfOXPRC-9h9pqSOmbTSnH_b/view",
    },
    {
      title: "PCU’S NATIONAL LEVEL HACKATHON",
      role: "3rd Winner",
      location: "Pune",
      duration: "Apr 2025",
      bullets: [
        "Competed in a high-intensity 24-hour national hackathon at PCU Pune against 100+ teams, secured 3rd place by building a fully functional AI-based E-Learning Assistant that impressed judges with its innovation, UX, and real-world potential — finishing in the top 40 nationwide.",
      ],
      link: "https://drive.google.com/file/d/1m-iWSxesXOXe7B0QP4qX2G25Y4ZfBQXz/view?usp=sharing",
    },
    {
      title: "NASA Space Apps Challenge 2025",
      role: "3rd Winner",
      location: "Nashik",
      duration: "Jan 2025",
      bullets: [
        "Built an intelligent farming simulation app leveraging NASA's real-time Event APIs to model environmental conditions and help farmers make data-driven agricultural decisions, earning 3rd position at the local event of one of the world's largest space and technology hackathons.",
      ],
      link: "https://drive.google.com/file/d/1ZDvnMg7wPnBaDACuosbjEd-9DqL6GsD1/view",
    },
    {
      title: "Tech Pragyan National Level Hackathon 2025",
      role: "Ranked Among The Top 20 Out Of 200+ Teams",
      location: "Sanganmer",
      duration: "Jan 2025",
      bullets: [
        "Built an AI-powered E-Learning platform in a 24-hour hackathon that generates personalized learning paths and adaptive content, securing a top 20 position.",
      ],
      link: "https://drive.google.com/file/d/1lV81n56jGv-bmJqdVTA2RG0wTfxV8X-K/view?usp=drive_link",
    },
  ],
  publications: [
    {
      title: "JUSTICE-AS-A-PROTOCOL",
      role: "Research Paper",
      duration: "Jul 2025",
      bullets: [
        "Co-authored a paper on an AI-driven Online Dispute Resolution (ODR) platform for India, integrating key legal statutes and smart contracts to automate dispute resolution and enhance access to justice.",
      ],
      link: "#",
    },
  ],
  clubs: [
    {
      name: "MATRIX ROBOTICS TEAM",
      role: "Web Team Head",
      duration: "2024 - Present",
      bullets: [
        "Active member contributing to the design and development of robotics and autonomous systems, collaborating across domains to build innovative engineering solutions and participate in national-level competitions; also leading the team’s website development and management.",
      ],
    },
    {
      name: "FOSS Club",
      role: "OS Project Lead",
      duration: "2025 - Present",
      bullets: [
        "Engaged in promoting open-source culture through collaboration, contributing to technical discussions, and supporting community-driven learning initiatives and events; currently leading the development of a club project focused on building an open-source Linux-based operating system.",
      ],
    },
  ],
  certifications: [
    "Postman API Fundamentals Student Expert",
    "AWS Academy Cloud Foundations",
    "Full Stack Generative and Agentic AI with Python",
    "JavaScript Basics",
    "Java Basics",
    "Android Application Development with Java",
    "The Fundamentals of Digital Marketing by Google",
  ],
  extraCurricular: [
    "Assisted officers from the Nashik Rural Police Department in upskilling on AI, productivity tools, and basic cybersecurity concepts to enhance operational efficiency.",
    "Conducted guest interactions as an alumnus at Jamia Polytechnic, mentoring juniors on academics, technology, and career growth; created awareness about GenAI and modern web development trends, and guided 200+ students in improving final-year performance and securing admissions into reputed colleges.",
    "Actively participated in competitive cricket matches at the class and college level, demonstrating strong teamwork, discipline, leadership, and sportsmanship under pressure.",
    "Conducted an educational awareness initiative for Adivasi Ashram School students in the remote hilly region of Dhalgaon, Nandurbar district, in collaboration with the primary school principal, to promote the importance of foundational science education and inspire early career awareness among rural students.",
  ],
};
