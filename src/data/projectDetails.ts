import { StaticImageData } from "next/image";

// Import all static showcase assets
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

export interface ProjectDetail {
  slug: string;
  title: string;
  duration: string;
  category: string;
  tagline?: string;
  collab?: string;
  outcome?: string;
  problem?: string;
  ask?: string;
  solutionDesc?: string;
  features: { title: string; desc: string; icon?: string }[];
  techStack: Record<string, string[]>;
  benefits?: string[];
  roles?: { role: string; desc: string }[];
  achievements?: string[];
  image: StaticImageData;
  carouselImages: StaticImageData[];
  link: string;
  liveUrl: string;
}

export const projectDetailsList: ProjectDetail[] = [
  {
    slug: "rakshak-ai-whatsapp-police-assistance-chatbot",
    title: "Rakshak AI – WhatsApp Police Assistance Chatbot",
    duration: "Jul 2025 – Sep 2025",
    category: "AI & Public Safety",
    collab: "In collaboration with Nashik Rural Police | Govt-Funded (₹6 Lakhs Annual Maintenance)",
    tagline: "Making policing faster, accessible, and citizen-friendly via 24/7 intelligent instant chat.",
    problem: "Citizens often face significant friction when seeking legal guidance, reporting local incidents, or identifying active police station jurisdictions, leading to administrative overhead and delayed emergency response.",
    solutionDesc: "An officially deployed WhatsApp chatbot developed with the Nashik Rural Police. Citizens can file complaints, get legal guidance, report incidents, access police portals, and receive emergency help simply by messaging +91 70661 00112. The system supports Marathi and English (voice + text) and is actively used in real-world scenarios serving thousands of live requests.",
    features: [
      { title: "📱 24/7 WhatsApp Access", desc: "Dual Marathi & English voice and text conversation support.", icon: "💬" },
      { title: "⚖️ AI-Based Legal Guidance", desc: "Instant contextual deep Q&A legal guidance on BNS, IPC, CrPC, and Cyber Law.", icon: "⚖️" },
      { title: "📋 Comprehensive Quick Menu", desc: "Interactive shortcuts: Talk to AI, Complaint Support, Report Incident, Citizen Portals, SOS.", icon: "📋" },
      { title: "📝 Incident Reporting Escrow", desc: "Automated routing: Normal reports are pushed directly to local PIs & Admin; Confidential reports auto-escalate to DySP/ASP/SP using AI analytics.", icon: "📝" },
      { title: "📍 Geolocation Lookup", desc: "Dynamic real-time active station jurisdiction detection and contact retrieval.", icon: "📍" },
      { title: "🆘 Active SOS Systems", desc: "Immediate emergency contact triggers paired with active live-map support.", icon: "🆘" },
    ],
    techStack: {
      "Backend": ["FastAPI", "Python", "WebSockets"],
      "AI & NLP": ["DeepSeek RAG", "Custom Vector Databases", "Twilio Audio APIs"],
      "Infrastructure & Cloud": ["AWS EC2", "AWS S3", "Docker"],
      "Integrations": ["WhatsApp Business API", "Google Maps API"],
    },
    benefits: [
      "File complaints instantly without travel or friction.",
      "Quick automated incident reporting with absolute confidentiality.",
      "Find nearest police stations and contacts immediately.",
      "Access web portal services directly on mobile.",
      "Saves citizen time and improves bureaucratic transparency."
    ],
    outcome: "Successfully launched and deployed across multiple Nashik Rural divisions under annual government sponsorship, resolving thousands of queries with massive public acclaim.",
    image: rakshakMain,
    carouselImages: [rakshakMain, rakshak1, rakshak2, rakshak3, rakshak4],
    link: "",
    liveUrl: "https://www.rakshakai.org/",
  },
  {
    slug: "anviksh-ai-learning-platform",
    title: "Anviksh AI – Learning Platform",
    duration: "Feb 2025 – Mar 2025",
    category: "EdTech & AI",
    tagline: "Transforming online self-learning into a highly structured, stress-free milestone experience.",
    problem: "Learners get overwhelmed by the fragmented nature of educational videos, text courses, and open-source materials. There is lack of personalized roadmap sequencing, stress-free microtask scheduling, and high-quality mentor validating.",
    solutionDesc: "Anviksh AI transforms online learning by organizing free educational resources into clear, skill-based roadmaps, generating custom courses locally with AI, and integrating interactive calendar timelines.",
    features: [
      { title: "🤖 Locally Hosted AI Roadmaps", desc: "Personalized learning path blueprints generated by locally hosted DeepSeek AI.", icon: "🤖" },
      { title: "📅 Daily Structured Plans", desc: "Auto-scheduled tasks, practice sessions, and milestones plotted on a calendar view.", icon: "📅" },
      { title: "🧠 Interactive Practice feedback", desc: "Live contextual quizzes and practice reviews to boost student knowledge retention.", icon: "🧠" },
      { title: "💬 Premium Mentor Chat", desc: "Direct, real-time workspace collaboration logs with dedicated experts.", icon: "💬" },
      { title: "📊 Progress Milestones", desc: "Visually premium analytics trackers highlighting skill completion points.", icon: "📊" },
    ],
    roles: [
      { role: "Learner (Student)", desc: "Inputs active skill goals, curates pathways, completes quizzes, and unlocks premium tiers." },
      { role: "Super Admin", desc: "Manages subscription cohorts, monitors metrics, controls payment systems, and audit reports." },
      { role: "Verified Expert", desc: "Reviews, rates, updates, and structures generated roadmaps to guarantee curriculum quality." },
      { role: "Assigned Mentor", desc: "Offers premium users 1-on-1 assistance, monitors schedules, and reviews assignments." },
    ],
    techStack: {
      "Frontend": ["React.js", "Material Tailwind", "ShadCN UI", "Framer Motion"],
      "Backend": ["FastAPI", "Node.js", "Python"],
      "Databases": ["MongoDB", "Redis Cache"],
      "AI & API": ["DeepSeek Local Model", "Razorpay Payment Gateway API"],
    },
    image: anvikshMain,
    carouselImages: [anvikshMain, anviksh1, anviksh2],
    link: "https://github.com/nirajbawa/anviksh-ai",
    liveUrl: "https://techaialpha.vercel.app/",
  },
  {
    slug: "secure-data-repository-system-sdr",
    title: "Secure Data Repository System (SDR)",
    duration: "Jan 2026 – Feb 2026",
    category: "Cybersecurity & SaaS",
    tagline: "No Cloud. No Excel. Just Billions of Records Searched in Milliseconds.",
    problem: "District police departments receive billions of highly sensitive mobile subscriber records from the State Head Office. With no secure, scalable centralized storage, team search workflows rely on slow, insecure Excel files. Local stations cannot query the data remotely, and there is absolutely zero audit accountability.",
    ask: "Build a highly scalable offline-first secure system that stores data strictly locally, ingests highly inconsistent formats (Excel, CSV, SQL dumps, Access .accdb), enables secure remote queries without exposing the main DB, and maintains immutable audit logs.",
    solutionDesc: "Successfully built and deployed as a critical freelance project for the Nashik Rural Police Cyber Department, and subsequently engineered into a multi-tenant subscription commercial SaaS product.",
    features: [
      { title: "✅ AI-Powered Schema Mapping", desc: "Uses OpenAI GPT-5 Mini to dynamically parse and auto-map inconsistent column headers across telecom operators.", icon: "✅" },
      { title: "✅ Offline-First AES-256 Security", desc: "Data stored entirely on-premise with localized military-grade encryption; never touches any public VPS or cloud providers.", icon: "✅" },
      { title: "✅ Under 3-Second Search Queries", desc: "Integrates highly optimized Meilisearch indexes to scan billions of records in milliseconds with typo tolerance.", icon: "✅" },
      { title: "✅ Secure Remote Cloudflare Tunnel", desc: "Cloudflare Web Tunnels let external district stations securely search data via web interface while the master database stays entirely offline.", icon: "✅" },
      { title: "✅ Multi-Tenant SaaS Engine", desc: "Robust Super Admin board manages local district onboarding, license expiry cycles, and strict automated enforcement.", icon: "✅" },
      { title: "✅ Immutable 7-Year Audit Trail", desc: "Maintains cryptographically secured access logs tracking every single log, search, query, and file export for legal compliance.", icon: "✅" },
    ],
    techStack: {
      "Frontend": ["Electron.js", "React.js", "TypeScript", "Tailwind CSS"],
      "Backend": ["Express.js", "Node.js", "NestJS", "PostgreSQL"],
      "Databases & Indexes": ["MongoDB (local store)", "PostgreSQL (admin portal)", "Meilisearch"],
      "Integrations & Networking": ["OpenAI GPT-5 Mini API", "Cloudflare Tunnels", "Docker Containers"],
      "CI/CD & Hosting": ["AWS EC2 (admin billing)", "Vercel", "GitHub Actions"],
    },
    outcome: "Operational and fully deployed at Nashik Rural Police Headquarters. Outstanding feedback of 5/5 across performance, security, and usability. Currently expanding for statewide police subscription rollout.",
    image: sdrMain,
    carouselImages: [sdrMain, sdr0, sdr1, sdr2],
    link: "https://github.com/nirajbawa/sdr-system",
    liveUrl: "https://admin.sdr.neuronexdevelopers.com/",
  },
  {
    slug: "team-matrix-web-app",
    title: "Team Matrix Web App",
    duration: "Jan 2025 – Jan 2025",
    category: "Robotics Club Platform",
    tagline: "Centralized full-stack operational hub and blog sharing portal for Robotics Club operations.",
    problem: "Managing roster members, timeline events, collaborative blogs, and technical showcases was previously dispersed across multiple platforms with high friction and manual layout configurations.",
    solutionDesc: "The Team Matrix Web App is a custom built full-stack platform designed specifically for internal management and technical publications. Features a dynamic layout editor, admin panel controls, and responsive user interfaces.",
    features: [
      { title: "🔧 Interactive Control Panel", desc: "Admins can edit showcase layouts, update rosters, and track club progress.", icon: "🔧" },
      { title: "🔒 Secured Member Profiles", desc: "Full OAuth-verified member accounts facilitating collaborative blog drafting.", icon: "🔒" },
      { title: "📈 Framer Motion Timelines", desc: "A premium interactive chronological progress log highlighting competition milestones.", icon: "📈" },
    ],
    techStack: {
      "Frontend Framework": ["Next.js 14", "Tailwind CSS", "ShadCN UI"],
      "State & Query Managers": ["Zustand", "React Query", "Axios"],
      "Backend & Store": ["MongoDB", "Mongoose ORM"],
      "Animations": ["Framer Motion", "Tailwind AnimateCSS"],
    },
    image: teamMatrixMain,
    carouselImages: [teamMatrixMain],
    link: "https://github.com/nirajbawa/team-matrix-app",
    liveUrl: "https://www.team-matrix.in/",
  },
  {
    slug: "msbtequizpro",
    title: "MSBTEQuizPro",
    duration: "Jul 2024 – Sep 2024",
    category: "Exam Prep Web Portal",
    tagline: "High-performance MCQ preparation workspace mimicking official board examination modules.",
    problem: "MSBTE academic students lacked a centralized mock examination portal that mimicked the official board test environment, offered fast payment checking, and saved progress state across multiple devices.",
    solutionDesc: "Developed a robust full-stack prepared mock testing dashboard. Students can buy MCQ preparational test series via integrated checkout pipelines, complete timed quizzes, and review comprehensive analytics dashboards.",
    features: [
      { title: "👤 High-Security OTP login", desc: "Next Auth OTP pipeline securing individual learner accounts.", icon: "👤" },
      { title: "🛒 Zustand Device-Synced Cart", desc: "Device-agnostic prepares shopping cart storing student selections dynamically.", icon: "🛒" },
      { title: "💳 Razorpay Payment gateway", desc: "Seamless instant prepare purchase completions using card, UPI, or netbanking.", icon: "💳" },
      { title: "📊 Detailed Control Panels", desc: "Superb administration logs to update tests in real-time and review metrics.", icon: "📊" },
    ],
    techStack: {
      "Frontend Framework": ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
      "State & Forms": ["Zustand", "React Query", "useForm hook"],
      "Security": ["Next Auth (OTP)", "Bcrypt hashing"],
      "Database & Payment": ["MongoDB", "Razorpay API Interface"],
    },
    image: msbteQuizProMain,
    carouselImages: [msbteQuizProMain],
    link: "https://github.com/nirajbawa/msbte-quiz-pro",
    liveUrl: "https://msbtequizpro.vercel.app/",
  },
  {
    slug: "msbte-wallah",
    title: "Msbte Wallah",
    duration: "Dec 2023 – Jan 2024",
    category: "Social EdTech Hub",
    tagline: "A cutting-edge social edtech workspace centralizing syllabus resource sharing and community interaction.",
    problem: "Students frequently spent hours looking up active syllabus sheets, model booklets, manual solutions, and notes across scattered, ad-hoc groups without administrative vetting.",
    solutionDesc: "Msbte Wallah provides a centralized community-driven social preparation vault where students can instantly search, upload, review, and collaborate on syllabus materials with push alerts.",
    features: [
      { title: "📚 Centralized Resource Store", desc: "Instant upload and search of academic notes, manual sheets, and papers.", icon: "📚" },
      { title: "🔒 Secured Google OAuth", desc: "Instant single sign-on verification via Google Developers APIs.", icon: "🔒" },
      { title: "💬 Firebase Real-time Study Hubs", desc: "Interactive chatrooms and push notifications to boost student study routines.", icon: "💬" },
      { title: "📶 Offline PWA Access", desc: "Progressive Web App configuration utilizing Service Workers to load documents offline.", icon: "📶" },
    ],
    techStack: {
      "Frontend & Styles": ["ReactJS", "Tailwind CSS", "Material Tailwind", "Material-UI"],
      "State Managers": ["Redux Toolkit", "React Persistent", "Redux Thunk"],
      "Backend Framework": ["Express.js", "Node.js"],
      "Databases & Push": ["MongoDB", "Firebase Firestore & Realtime Engine"],
      "Integrations": ["Google Developers OAuth APIs", "Service Workers PWA"],
    },
    image: msbteWallahMain,
    carouselImages: [msbteWallahMain],
    link: "https://github.com/nirajbawa/msbtewallah",
    liveUrl: "https://msbtewallah.vercel.app/",
  },
  {
    slug: "anav-drone",
    title: "ANAV – AUTONOMOUS DRONE",
    duration: "Nov 2024",
    category: "Robotics & Hardware",
    tagline: "GPS-Free autonomous drone designed for safe spot detection in unknown indoor and outdoor terrains.",
    problem: "Standard military or commercial drones rely heavily on public GPS channels. In GPS-denied environments, thick indoor spaces, or contested warzones, navigation fails completely, creating a massive need for autonomous SLAM mapping.",
    solutionDesc: "Built an autonomous quadcopter utilizing SLAM mapping, dynamic path calculation, and custom client-server telemetry protocols. Proudly selected for the URSC ISRO Robotics Challenge (IRoC) Bangalore Grand Finale after competing against 900+ teams nationwide.",
    features: [
      { title: "🔹 Dynamic SLAM Mapping", desc: "GPS-free localized point cloud navigation in fully unknown spaces.", icon: "🔹" },
      { title: "🔹 ROS2 Telemetry Protocol", desc: "Ultra-fast custom client-to-server messaging for altitude, IMU readings, and speeds.", icon: "🔹" },
      { title: "🔹 Loss-of-Link Handling", desc: "Automated safe-landing spot recalculation routines when command signals sever.", icon: "🔹" },
      { title: "🔹 Real-time Control GUI", desc: "High-performance visual dashboard rendering live sensor feeds and velocity metrics.", icon: "🔹" },
    ],
    achievements: [
      "Selected for URSC ISRO Robotics Challenge (IRoC-U) Grand Finale in Bangalore out of 900+ teams.",
      "Blended software algorithms, robotics mechanics, and hardware sensory processing.",
      "Algorithms Subsystem contribution: Telemetry UI, ROS2 messaging layers, and IMU data parsing."
    ],
    techStack: {
      "Core Systems": ["ROS2", "C++", "Python"],
      "Sensory & Mapping": ["SLAM Frameworks", "IMU Processing", "LIDAR Spatial Drivers"],
      "Telemetry & Dashboard": ["Qt GUI", "Python Telemetry Libraries", "WebSockets"],
    },
    image: anavMain,
    carouselImages: [anavMain, anav0, anav1, anav2, anav3, anav4],
    link: "https://github.com/nirajbawa/anav-drone",
    liveUrl: "https://drive.google.com/file/d/1INlmuOLDTkfOXPRC-9h9pqSOmbTSnH_b/view",
  }
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetailsList.find((p) => p.slug === slug);
}
