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
import inewsMain from "@/assets/images/inews-0.png";

// 8 new projects showcase assets
import weatherAppMain from "@/assets/images/weather-app-0.png";
import dynamicPortfolioMain from "@/assets/images/dynamic-portfolio-0.png";
import qrAttendanceMain from "@/assets/images/qr-attendance-0.png";
import fruitSellingMain from "@/assets/images/fruit-selling-0.png";
import pdf2audioMain from "@/assets/images/pdf2audio-0.png";
import courseSellingMain from "@/assets/images/course-selling-0.png";
import covidCounterMain from "@/assets/images/covid-counter-0.png";
import turfSpotMain from "@/assets/images/turf-spot-0.png";

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
  },
  {
    slug: "inews-android-app",
    title: "INews Android App",
    duration: "Jan 2024 – Feb 2024",
    category: "Android Development",
    tagline: "Effortless multi-language news reading delivered through a lightweight Android interface.",
    problem: "Keeping up with local and global news often involves navigating heavy, complex, and slow applications that don't accommodate regional languages or display well on low-end mobile devices.",
    solutionDesc: "INews Android App is a lightweight, responsive platform developed with Java and WebView. Built for accessibility and ease of use, it features full multi-language capabilities that let users switch seamlessly between Marathi and English, ensuring news is accessible to a wider demographic.",
    features: [
      { title: "🌐 Dual-Language Support", desc: "Allows users to seamlessly view news in both Marathi and English with a single tap.", icon: "🌐" },
      { title: "⚡ High-Performance WebView", desc: "Utilizes optimized custom WebView layers to render heavy news publications at high speeds with minimal data usage.", icon: "⚡" },
      { title: "📱 Material UI Dashboard", desc: "Designed a clean, modern, and user-friendly interface with Android XML layout components.", icon: "📱" },
      { title: "💬 Real-Time Updates", desc: "Integrates with live web sources to deliver immediate, effortless updates to readers.", icon: "💬" }
    ],
    techStack: {
      "Core Development": ["Java", "Android SDK", "Android Studio"],
      "UI & Components": ["WebView", "XML Layouts", "Material Design"],
      "Version Control": ["Git", "GitHub"]
    },
    benefits: [
      "Extremely lightweight app footprint that installs and loads instantly.",
      "Promotes language inclusion by supporting local Marathi news feeds.",
      "Optimized rendering ensures a responsive experience even on older devices.",
      "Simple, zero-clutter reading interface suitable for all ages."
    ],
    image: inewsMain,
    carouselImages: [inewsMain],
    link: "https://github.com/nirajbawa/iNews-Android-App-Using-Java",
    liveUrl: "https://github.com/nirajbawa/iNews-Android-App-Using-Java",
  },
  {
    slug: "weather-app-using-react",
    title: "Weather App Using React",
    duration: "Jun 2023 – Jun 2023",
    category: "Full-Stack Dashboard",
    tagline: "Zero-friction weather tracking using a robust MERN stack backend and search history queues.",
    problem: "Traditional weather inquiry sites cache very little query state, leading to sluggish back-navigation flow, poor client side performance, and redundant external API traffic loads.",
    solutionDesc: "Developed a comprehensive MERN stack weather search platform. Integrates custom memory stack data structures to store searching histories for instantaneous step-back navigations, fetching weather projections via OpenWeatherMap APIs securely.",
    features: [
      { title: "📁 Search History Stack Queue", desc: "In-memory stack logs preceding city queries for fast device-synced backstep options.", icon: "📁" },
      { title: "⛅ Live OpenWeatherMap Feed", desc: "Fetches live weather conditions, wind indexes, temperature ranges, and air pressure data instantly.", icon: "⛅" },
      { title: "🔒 Secured Express Backend", desc: "Isolated API integration boundaries to mask keys and control requests to external endpoints.", icon: "🔒" },
      { title: "⚡ Neon Tailwind Dashboard", desc: "Ultra-modern responsive client styled with vivid dark metrics cards and micro-animations.", icon: "⚡" }
    ],
    techStack: {
      "Frontend": ["React.js", "Tailwind CSS", "Axios", "Context API"],
      "Backend & Security": ["Node.js", "Express.js", "CORS Middleware"],
      "Databases": ["MongoDB (Admin Logging)"],
      "API Integrations": ["OpenWeatherMap API"]
    },
    benefits: [
      "Dramatically reduces navigation lag during subsequent weather lookups.",
      "Masks credential keys to protect internal subscription quotas.",
      "Clean layouts render instantly on both mobile browsers and desktop displays."
    ],
    image: weatherAppMain,
    carouselImages: [weatherAppMain],
    link: "https://github.com/nirajbawa",
    liveUrl: "https://weather-9htn.onrender.com/",
  },
  {
    slug: "dynamic-portfolio-web-application",
    title: "Dynamic Portfolio Web Application",
    duration: "Feb 2023 – Feb 2023",
    category: "Dynamic Portal",
    tagline: "Dynamically customizable portfolio interface managed fully via an integrated control board.",
    problem: "Developer portfolios usually require manual markdown edits or code redeployment triggers for simple updates like highlighting new skills or modifying project milestones.",
    solutionDesc: "Engineered a dynamically content-managed personal portfolio web platform using EJS and Express. Features an integrated administrative dashboard enabling secure bio edit forms, toggle settings, and dynamic database adjustments.",
    features: [
      { title: "🔧 Dashboard Control Center", desc: "Complete administrative CRUD screens to modify projects, change profile details, and alter skills.", icon: "🔧" },
      { title: "🔒 Secure Session verification", desc: "Express Session verification and password protection powered by Bcrypt hashing libraries.", icon: "🔒" },
      { title: "🖥️ EJS Dynamic Rendering", desc: "Robust server-side rendering compiling custom database attributes dynamically on request.", icon: "🖥️" },
      { title: "📱 Responsive Bootstrap Layouts", desc: "Vibrant and interactive modern theme layout styled entirely using Bootstrap grids.", icon: "📱" }
    ],
    techStack: {
      "Frontend Viewports": ["EJS Templates", "Bootstrap 5", "Vanilla JavaScript", "Custom CSS"],
      "Backend Framework": ["Node.js", "Express.js", "Express Session"],
      "Databases & Authentication": ["MongoDB", "Mongoose ODM", "Bcrypt Hashing"]
    },
    benefits: [
      "Lets creators update their public resume instantly without continuous Git commits.",
      "Secures personal database endpoints behind encrypted session modules.",
      "Extremely robust server-side compile logic optimizes initial load layouts."
    ],
    image: dynamicPortfolioMain,
    carouselImages: [dynamicPortfolioMain],
    link: "https://github.com/nirajbawa/Dynamic-Portfolio-Web-App",
    liveUrl: "https://nirajbawa.onrender.com/",
  },
  {
    slug: "qr-attendance",
    title: "QR Attendance",
    duration: "Oct 2022 – Oct 2022",
    category: "Web & IoT Utility",
    tagline: "Automated student roll call check-ins mapped through instantaneous scannable QR tokens.",
    problem: "Traditional academic roll calls waste valuable lecture minutes, are highly vulnerable to proxy check-ins, and produce massive heaps of unindexed physical papers.",
    solutionDesc: "Built an efficient, secure student attendance logging system using Flask and MySQL. Employs scannable pyqrcode-generated attendance tokens to verify and log present students in real-time.",
    features: [
      { title: "🎫 Instant pyqrcode Generation", desc: "Renders unique scannable matrix images for quick digital identifications.", icon: "🎫" },
      { title: "⚡ Under 2-Second Logs", desc: "Instantly captures QR scans, checks student registers, and updates database timelines.", icon: "⚡" },
      { title: "📁 Relational Database Core", desc: "Securely stores organized student rosters, attendance ratios, and timestamps in MySQL.", icon: "📁" },
      { title: "🖥️ Jinja Student Dashboard", desc: "Provides high-contrast dashboard pages for students to track attendance metrics.", icon: "🖥️" }
    ],
    techStack: {
      "Backend Frameworks": ["Flask", "Python", "Jinja2 Templates"],
      "Databases & Connectors": ["MySQL", "PyMySQL ORM Driver"],
      "Scanning Utilities": ["pyqrcode Library", "HTML5", "CSS3", "JavaScript"]
    },
    benefits: [
      "Eliminates classroom administration roll-call delays completely.",
      "Blocks attendance spoofing through time-sensitive dynamic token validation.",
      "Simplifies institution audit logging with clean CSV database exports."
    ],
    image: qrAttendanceMain,
    carouselImages: [qrAttendanceMain],
    link: "https://github.com/nirajbawa/QR-Attendance",
    liveUrl: "https://nirajbava.pythonanywhere.com/",
  },
  {
    slug: "fruit-selling-site",
    title: "Fruit Selling Site",
    duration: "May 2022 – May 2022",
    category: "UI/UX Landing Page",
    tagline: "Vibrant storefront design featuring elegant typography and micro-animations.",
    problem: "Organic grocers and local farms require lightweight, fast-loading, and visually gorgeous web showcases that display beautifully on mobile and drive conversions.",
    solutionDesc: "Crafted an elite fruit selling responsive catalog landing page in collaboration with the MSBTE showcase. Built completely with pure HTML5, CSS3, and JavaScript, demonstrating stunning dark themes and rich animations.",
    features: [
      { title: "🛒 Vibrant Product Portrayals", desc: "Vividly formatted crop matrices styled with high-fidelity, contrast-enhancing backgrounds.", icon: "🛒" },
      { title: "✨ Dark Glassmorphism Aesthetics", desc: "Sleek glass container components utilizing modern CSS gradients and backdrop-filters.", icon: "✨" },
      { title: "🌀 High-Speed Hover Triggers", desc: "Extremely optimized CSS hover transitions that enhance visual feedback without causing lag.", icon: "🌀" },
      { title: "📱 Mobile Grid Fluidity", desc: "Perfect responsive styling maintaining clean card layouts across standard viewport sizes.", icon: "📱" }
    ],
    techStack: {
      "Core Standards": ["HTML5", "CSS3 (Vanilla)", "JavaScript (ES6)"],
      "Design System": ["Responsive Web Design", "Custom Gradients", "Google Fonts API"]
    },
    benefits: [
      "Loads in under 150ms thanks to zero external frame dependencies.",
      "Vivid aesthetic layout creates an immediate positive shopping impression.",
      "Highly adaptable boilerplate code that updates catalog arrays instantly."
    ],
    image: fruitSellingMain,
    carouselImages: [fruitSellingMain],
    link: "https://github.com/nirajbawa/fruit-selling-site-landing-page",
    liveUrl: "https://nirajbawa.github.io/fruit-selling-site-landing-page/",
  },
  {
    slug: "pdf-2-audio-converter",
    title: "PDF 2 Audio Converter",
    duration: "Apr 2021 – May 2021",
    category: "SaaS Utility PWA",
    tagline: "Converting printed PDF manuals and slides into high-fidelity playable audio book streams.",
    problem: "Visually impaired students and long-commute professionals lack cost-effective converters to transform dense text documents or scanned image PDFs into spoken narrations.",
    solutionDesc: "Developed a robust Progressive Web Application utilizing Flask. Integrates advanced Tesseract OCR engines and Google TTS libraries to convert PDF files into clean, offline-playable MP3 audio narration files.",
    features: [
      { title: "👁️ Precise Tesseract OCR Engine", desc: "Translates scanned documents and images into fully editable raw textual datasets.", icon: "👁️" },
      { title: "🔊 Natural Google TTS Synthesis", desc: "Converts text blocks into high-fidelity MP3 narrations with precise speech control parameters.", icon: "🔊" },
      { title: "📶 Progressive Offline Capability", desc: "Registers local Service Workers to cache vital application pages for offline operation.", icon: "📶" },
      { title: "📁 Tri-Format Output Bundler", desc: "Converts raw uploads into clear downloadable text sheets, audios, or scanned JPG packages.", icon: "📁" }
    ],
    techStack: {
      "Core Backend": ["Python", "Flask", "Jinja2 Templates"],
      "OCR Parsing": ["pytesseract", "tesseract-ocr", "pdf2image", "PIL (Pillow)"],
      "Voice Synthesis": ["gTTS (Google Text-to-Speech)", "pygame local engine"],
      "PWA Integrations": ["Service Workers Configuration", "HTML5 Offline Manifest", "Bootstrap 4"]
    },
    benefits: [
      "Provides accessible learning tools for visually impaired students.",
      "Supports robust text-to-speech translations even with scanned document photos.",
      "PWA offline caching lets users run document conversions without persistent internet connections."
    ],
    image: pdf2audioMain,
    carouselImages: [pdf2audioMain],
    link: "https://github.com/nirajbawa/pdf2audio",
    liveUrl: "https://pdf2audio.pythonanywhere.com/",
  },
  {
    slug: "course-selling-web-app",
    title: "Course Selling Web App",
    duration: "Jan 2021 – Jan 2021",
    category: "E-Commerce EdTech",
    tagline: "Feature-rich educational storefront featuring secure payment gateway checkout portals.",
    problem: "Independent course creators face massive technical hurdles when trying to publish, distribute, and monetize educational lectures without relying on high-commission marketplaces.",
    solutionDesc: "Engineered a full-stack e-learning marketplace powered by Flask and MySQL. Integrates Instamojo API checkouts, dynamic tutor upload managers, and secure multi-role student registers.",
    features: [
      { title: "💳 Instamojo Payment Checkout", desc: "Enables instant, secure payments handling credit cards, netbanking, and UPI channels.", icon: "💳" },
      { title: "🔒 Isolated Account Portals", desc: "Distinct operational control dashboards for student enrollees and verified creators.", icon: "🔒" },
      { title: "📺 Lecture Upload Console", desc: "Allows tutors to instantly structure curricula, publish syllabus chapters, and edit prices.", icon: "📺" },
      { title: "📊 Creator Earnings Analytics", desc: "Real-time billing indicators summarizing active enrollments, course sales, and payouts.", icon: "📊" }
    ],
    techStack: {
      "Backend Framework": ["Flask", "Python", "Jinja2 Templates"],
      "Databases": ["MySQL", "SQLAlchemy Object Mapping"],
      "Payments API": ["Instamojo Payment Gateway REST Integration"],
      "Frontend & View": ["HTML5", "CSS3", "Bootstrap 4", "JavaScript"]
    },
    benefits: [
      "Allows creators to host educational courses with zero third-party revenue cuts.",
      "Handles transactions securely with immediate MySQL database logs.",
      "Vivid responsive UI provides a seamless learning roadmap view for students."
    ],
    image: courseSellingMain,
    carouselImages: [courseSellingMain],
    link: "https://github.com/nirajbawa/course-selling-web-app",
    liveUrl: "https://superwebs.pythonanywhere.com/",
  },
  {
    slug: "covid-victim-counter",
    title: "Covid Victim Counter",
    duration: "May 2020 – May 2020",
    category: "Real-Time Tracking",
    tagline: "Vivid pandemic statistical tracking dashboard displaying real-time state metrics.",
    problem: "During early epidemic phases, citizens struggled to access quick, uncomplicated local state-wise covid statistical dashboards, which were often buried in complex official PDFs.",
    solutionDesc: "Developed a highly responsive COVID-19 tracker for India using vanilla JS and HTML5. Pulls data directly from the Covid19India REST API to provide instant, state-wise data breakdowns.",
    features: [
      { title: "📡 Covid19India API Stream", desc: "Polls active rest feeds asynchronously to guarantee zero-latency updates.", icon: "📡" },
      { title: "🔍 Dynamic Text Filter logs", desc: "Responsive input controllers enabling users to find local state counts instantly.", icon: "🔍" },
      { title: "📊 High-Contrast Case Grids", desc: "Visual data widgets dividing active cases, recoveries, and total death figures cleanly.", icon: "📊" },
      { title: "⚡ Zero-Server Footprint", desc: "Client-side compilation logic that loads in milliseconds without exhausting backend APIs.", icon: "⚡" }
    ],
    techStack: {
      "Core Interface": ["HTML5", "CSS3 (Vanilla)", "JavaScript (ES6)"],
      "API Integrations": ["Covid19India REST API", "Fetch JSON Request Engine"]
    },
    benefits: [
      "Provides citizens with immediate, uncomplicated pandemic metric views.",
      "Saves server cost as all calculations and filtering occur directly in-browser.",
      "Highly responsive layouts run beautifully on older mobile browsers."
    ],
    image: covidCounterMain,
    carouselImages: [covidCounterMain],
    link: "https://github.com/nirajbawa/covid-victim-counter",
    liveUrl: "https://nirajbawa.github.io/covid-victim-counter/",
  },
  {
    slug: "turfspot",
    title: "TurfSpot",
    duration: "Oct 2024 – Nov 2024",
    category: "Booking SaaS Platform",
    tagline: "Elite multi-tenant sports arena booking SaaS featuring dynamic calendar matrices.",
    problem: "Sports arenas and turf venues experience major booking overlaps, lost booking records, and friction in managing schedules manually via spreadsheets or chat messaging groups.",
    solutionDesc: "Architected and built TurfSpot, a full-stack booking system utilizing the MERN stack and Redux Toolkit. Features a real-time calendar booking matrix, Razorpay transactional sync, secure email confirmations with automated QR codes, and custom visual admin analytics dashboards.",
    features: [
      { title: "📅 Dynamic Slot Booking Matrix", desc: "Stunning responsive timetable grid displaying active and open slots by time and date.", icon: "📅" },
      { title: "💳 Seamless Razorpay Checkout", desc: "Fully integrated payment flow that completes turf reservations with instant webhooks.", icon: "💳" },
      { title: "✉️ Automated QR Code Mailer", desc: "Dispatches transactional receipts and secure entry scan codes to customers automatically via SMTP.", icon: "✉️" },
      { title: "📊 Recharts Owner Dashboards", desc: "Futuristic analytics tracking daily transactions, revenue trends, and user statistics.", icon: "📊" },
      { title: "🛡️ Multi-Role Account Structure", desc: "Segmented portal layers separating Regular Players, Venue Owners, and System Admins.", icon: "🛡️" }
    ],
    techStack: {
      "Frontend Framework": ["React.js", "Redux Toolkit", "Framer Motion", "Tailwind CSS", "Recharts"],
      "Backend Core": ["Node.js", "Express.js", "Nodemailer SMTP"],
      "Databases & Cache": ["MongoDB", "Mongoose ODM", "Redis Cache"],
      "Integrations": ["Razorpay Payment SDK", "Cloudinary Media Hosting"]
    },
    benefits: [
      "Completely prevents double-bookings through strict ACID database transactions.",
      "Reduces manual scheduling overhead by 80% with automated checkouts.",
      "Empowers turf managers to analyze booking records and maximize venue utility."
    ],
    image: turfSpotMain,
    carouselImages: [turfSpotMain],
    link: "https://github.com/nirajbawa/TurfTown",
    liveUrl: "https://turf-spot.vercel.app/",
  }
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetailsList.find((p) => p.slug === slug);
}
