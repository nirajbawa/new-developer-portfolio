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
    x: "https://x.com/nirajbava",
    hackerrank: "https://hackerrank.com/nirajbava222",
    researchgate: "https://researchgate.net/profile/Niraj-Bava",
  },
  summary: {
    text: "Full-Stack Engineer delivering production systems that bridge technical innovation with social impact. Track record spanning startup product development, government–backed technology initiatives, and published research in AI applications. Expert in architecting and deploying robust, scalable solutions that handle real users in live environments — from AI-powered public service platforms to enterprise automation systems. Specialized in end-to-end ownership: system design, cloud infrastructure, full-stack development, and production deployment. Driven by the conviction that well-engineered software can transform lives, consistently building technology that solves meaningful problems with efficiency, security, and scalability."
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
        "Solved 100+ LeetCode DSA problems and consistently engaged in both technical and non-technical activities."
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Jamia Polytechnic",
      location: "Akkalkuwa, NBD, MH",
      details: "(MSBTE Affiliated) | Aggregate: 88.86%",
      duration: "2021 – 2024",
      bullets: [
        "Graduated with a distinguished academic record, securing the highest marks across Nandurbar district.",
        "Maintained top performance with 1st rank in 4 semesters and contributed to curriculum planning while organizing technical seminars to promote web development."
      ]
    },
    {
      degree: "Secondary Education",
      institution: "Nemsushil Vidyamandir",
      location: "Taloda, NBD, MH",
      details: "(MSBSHSE Affiliated) | Percentage: 86.20% (SSC)",
      duration: "2010 – 2021",
      bullets: [
        "Actively participated in Scouts and Guides, leading the wing during Independence Day celebrations in Class 9, and took part in the Rajyapuraskar Camp.",
        "Participated in science exhibitions and national Olympiads, achieving School Rank 1 and State Rank 17 in the National Computer Indian Talent Olympiad, reflecting strong academic and analytical abilities."
      ]
    }
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
        "Technical Operations: Manage full-stack engineering, AWS infrastructure, DevOps, end-to-end encryption, and compliance. Lead cross-functional team, agile delivery, and client coordination with police & civic authorities."
      ],
      link: "#"
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
        "Developed in-house alternatives to third-party APIs, ensuring service reliability across deployments."
      ],
      link: "#"
    },
    {
      company: "INVENTURS CUBE LLP",
      role: "Software Engineer Intern",
      location: "Remote, Indore",
      duration: "May 2025 – Jan 2026",
      bullets: [
        "Engineered an indoor mapping application for client operating across the US and Africa, improving navigation accuracy and spatial visualization efficiency by 90%.",
        "Built backend microservices automating scraping and Shopify sync, reducing manual work by 90% and speeding up client onboarding."
      ],
      link: "#"
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
        "Contributed to Internal React Dashboard: Built management interface for services and API tokens, and developed image-to-text translation feature, reducing manual translation effort by 60% and expanding platform support to 5+ languages."
      ],
      link: "#"
    },
    {
      company: "VRINDA PAPERS PRIVATE LIMITED",
      role: "Web Development Intern",
      location: "Remote, Noida",
      duration: "Jul 2022 – Aug 2022",
      bullets: [
        "Maintained and enhanced web applications using PHP and custom server-side logic.",
        "Engineered a Google Sheets-integrated stock inquiry plugin enabling real-time inventory tracking, reducing manual work by 80% through Google Apps Script automation.",
        "Handled WordPress custom theme design and web app maintenance."
      ],
      link: "#"
    }
  ],
  projects: [
    {
      title: "RAKSHAK AI – CHATBOT FOR NASHIK RURAL POLICE",
      duration: "Jul 2025",
      link: "#",
      bullets: [
        "Architected an AI-powered WhatsApp chatbot officially launched with Nashik Rural Police, delivering instant legal guidance and citizen support in Hindi, Marathi, and English — reaching 5000+ users within the first month.",
        "Built a RAG-based legal knowledge engine grounded in Indian legal statutes and BNS sections, ensuring accurate, context-aware responses while minimizing hallucinations.",
        "Engineered a secure, scalable backend with WhatsApp Business API integration, supporting high-concurrency queries with end-to-end encrypted messaging.",
        "Reduced project cost by 50% (₹12L → ₹6L) through optimized cloud architecture, securing ₹6L in annual government funding."
      ]
    },
    {
      title: "ANVIKSHAI – AI BASED LEARNING",
      duration: "Feb 2025",
      link: "#",
      bullets: [
        "Built an AI-powered web application that generates fully personalized learning roadmaps by analyzing user-selected skills, target goals, and preferred duration — breaking down the journey into structured daily tasks with curated free resources.",
        "Integrated resource curation pipeline that aggregates high-quality free learning materials (articles, videos, docs) mapped to each roadmap milestone, eliminating the need for manual research.",
        "Recognized as a winner in two hackathons for its practical innovation, real-world applicability, and potential to democratize personalized education at scale."
      ]
    },
    {
      title: "ANAV – AUTONOMOUS DRONE",
      duration: "Nov 2024",
      link: "#",
      bullets: [
        "Designed and developed a fully GPS-free autonomous drone leveraging SLAM (Simultaneous Localization and Mapping) for real-time environment mapping, self-localization, and autonomous path planning in unknown indoor and outdoor terrains.",
        "Implemented obstacle detection and avoidance algorithms enabling the drone to navigate complex environments dynamically without human intervention.",
        "Built a real-time telemetry system providing live data transmission including altitude, orientation, velocity, and sensor readings to a ground control interface.",
        "Selected among top teams nationwide for the ISRO-IROC (Inter-Institutional Robotics Challenge) Grand Finale, held at URSC (U.R. Rao Satellite Centre), Bengaluru."
      ]
    },
    {
      title: "SDR – SECURE DATA REPOSITORY SYSTEM",
      duration: "Feb 2026",
      link: "#",
      bullets: [
        "Architected a secure, offline-first district-level data platform functioning as a private cloud, where a centralized local server at the SP Office securely exposes controlled data access to multiple police station users.",
        "Enabled hierarchical, role-based access with subscription-controlled operations, ensuring centralized governance and complete data isolation across districts.",
        "Implemented encrypted data ingestion, controlled sharing, audit logging, and AI-powered prompt-based search for secure and efficient data access within the network."
      ]
    },
    {
      title: "MSBTE WALLAH",
      duration: "Feb 2023",
      link: "#",
      bullets: [
        "Built a Social Edtech platform empowering MSBTE students with centralized access to learning resources and peer collaboration.",
        "Enhanced student engagement through seamless content sharing, community interaction, and simplified exam preparation by building a scalable full-stack platform using React.js, Tailwind CSS, Express.js, MongoDB, with authentication and real-time features via Google OAuth and Firebase."
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "C++"]
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "React Native", "Electron.js"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "NestJS", "Flask", "FastAPI", "Apache Kafka", "BullMQ"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "Qdrant", "Redis", "PostgreSQL", "SQL"]
    },
    {
      category: "Generative AI",
      items: ["RAG", "LangChain", "OpenAI APIs", "Google Gemini SDK", "MCP", "Prompt Engineering", "Ollama", "CUDA Acceleration"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, S3, ASG, VPC, ELB/ALB, EIP, ECS, ECR)", "Git & GitHub", "CI/CD", "Docker"]
    },
    {
      category: "Software Engineering",
      items: ["SDLC", "Agile", "SCRUM", "COCOMO", "SRS", "SPM"]
    }
  ],
  achievements: [
    {
      title: "PICT’S IMPETUS INTERNATIONAL LEVEL PROJECT EXHIBITION",
      role: "1st Winner",
      location: "Pune",
      duration: "Mar 2025",
      bullets: [
        "Competed against teams from across the globe at PICT's Impetus, one of India's most prestigious project competitions, and secured 1st place for building an innovative, technically rigorous, and high-impact project that stood out for its real-world applicability and engineering depth."
      ],
      link: "#"
    },
    {
      title: "RECOGNITION FOR RAKSHAK AI CHATBOT DEVELOPMENT",
      role: "Project System Architect",
      location: "Nashik",
      duration: "Sep 2025",
      bullets: [
        "Received formal recognition from the Nashik Rural Police and the Governor of Maharashtra for designing and deploying Rakshak AI — a government-funded, multilingual AI chatbot that redefined citizen-police engagement and set a benchmark for AI-driven public safety solution in rural India."
      ],
      link: "#"
    },
    {
      title: "ISRO ROBOTICS CHALLENGE 2025",
      role: "Finalist",
      location: "Bangalore",
      duration: "Apr 2025",
      bullets: [
        "Selected among the top teams nationwide for the Grand Finale held at URSC (U.R. Rao Satellite Centre), Bengaluru, for developing a GPS-free autonomous drone using SLAM for real-time navigation and obstacle avoidance."
      ]
    },
    {
      title: "PCU’S NATIONAL LEVEL HACKATHON",
      role: "3rd Winner",
      location: "Pune",
      duration: "Apr 2025",
      bullets: [
        "Competed in a high-intensity 24-hour national hackathon at PCU Pune against 100+ teams, secured 3rd place by building a fully functional AI-based E-Learning Assistant that impressed judges with its innovation, UX, and real-world potential — finishing in the top 40 nationwide."
      ],
      link: "#"
    },
    {
      title: "NASA Space Apps Challenge 2025",
      role: "3rd Winner",
      location: "Nashik",
      duration: "Jan 2025",
      bullets: [
        "Built an intelligent farming simulation app leveraging NASA's real-time Event APIs to model environmental conditions and help farmers make data-driven agricultural decisions, earning 3rd position at the local event of one of the world's largest space and technology hackathons."
      ],
      link: "#"
    },
    {
      title: "Tech Pragyan National Level Hackathon 2025",
      role: "Ranked Among The Top 20 Out Of 200+ Teams",
      location: "Sanganmer",
      duration: "Jan 2025",
      bullets: [
        "Built an AI-powered E-Learning platform in a 24-hour hackathon that generates personalized learning paths and adaptive content, securing a top 20 position."
      ],
      link: "#"
    }
  ],
  publications: [
    {
      title: "JUSTICE-AS-A-PROTOCOL",
      role: "Research Paper",
      duration: "Jul 2025",
      bullets: [
        "Co-authored a paper on an AI-driven Online Dispute Resolution (ODR) platform for India, integrating key legal statutes and smart contracts to automate dispute resolution and enhance access to justice."
      ],
      link: "#"
    }
  ],
  clubs: [
    {
      name: "MATRIX ROBOTICS TEAM",
      role: "Web Team Head",
      duration: "2024 - Present",
      bullets: [
        "Active member contributing to the design and development of robotics and autonomous systems, collaborating across domains to build innovative engineering solutions and participate in national-level competitions; also leading the team’s website development and management."
      ]
    },
    {
      name: "FOSS Club",
      role: "OS Project Lead",
      duration: "2025 - Present",
      bullets: [
        "Engaged in promoting open-source culture through collaboration, contributing to technical discussions, and supporting community-driven learning initiatives and events; currently leading the development of a club project focused on building an open-source Linux-based operating system."
      ]
    }
  ],
  certifications: [
    "Postman API Fundamentals Student Expert",
    "AWS Academy Cloud Foundations",
    "Full Stack Generative and Agentic AI with Python",
    "JavaScript Basics",
    "Java Basics",
    "Android Application Development with Java",
    "The Fundamentals of Digital Marketing by Google"
  ],
  extraCurricular: [
    "Assisted officers from the Nashik Rural Police Department in upskilling on AI, productivity tools, and basic cybersecurity concepts to enhance operational efficiency.",
    "Conducted guest interactions as an alumnus at Jamia Polytechnic, mentoring juniors on academics, technology, and career growth; created awareness about GenAI and modern web development trends, and guided 200+ students in improving final-year performance and securing admissions into reputed colleges.",
    "Actively participated in competitive cricket matches at the class and college level, demonstrating strong teamwork, discipline, leadership, and sportsmanship under pressure.",
    "Conducted an educational awareness initiative for Adivasi Ashram School students in the remote hilly region of Dhalgaon, Nandurbar district, in collaboration with the primary school principal, to promote the importance of foundational science education and inspire early career awareness among rural students."
  ]
};
