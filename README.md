# Bespoke Professional Developer Portfolio

Welcome to the official repository of **Niraj Bava's Premium Developer Portfolio**. This website is a high-fidelity, high-performance, dynamic showcase of full-stack engineering, government-funded tech initiatives (Rakshak AI), and private database cloud architectures.

Built using **Next.js 14**, **TypeScript**, and **Tailwind CSS**, this site implements top-tier micro-animations, theme-adaptability (light/dark mode), custom interactive widgets, and highly secure API routing.

---

## 🚀 Key Features

*   **Premium Interactive Hero Section**: Features a responsive layout with a real-time status indicator, custom social links, and multiple direct resume/CV download nodes.
*   **Theme-Adaptive System**: Dynamic theme synchronization (Light / Dark Mode) across all pages—including the bespoke **Hire Me** page—leveraging `next-themes` and soft HSL CSS variables.
*   **Bento-Grid Projects & Certifications**: Grid layouts displaying real-world projects (Rakshak AI, Secure SDR System, Anviksh AI) and credentials.
*   **Live LeetCode & GitHub Heatmap Widgets**: Real-time widgets rendering active problem-solving stats and developer contributions cleanly in both light and dark themes.
*   **Bespoke Asymmetric Sections**: Beautiful, visually striking timelines for Education, Achievements, and Work Experience.
*   **Interactive Mind-Map Skills Widget**: A custom, category-grouped visual directory showcasing technology specialization.
*   **Secure Server-Side Mail Proxy**: Form submissions (Footer and Hire Me enquiries) are proxied server-side via `/api/send-email`, securely attaching local tokens (`SECURITY_TOKEN`) to downstream Express APIs away from client-side visibility.

---

## 🛠️ Technology Stack

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **Next.js 14** | Framework | Server-side rendering, App Router, and server API routing. |
| **TypeScript** | Language | Strict type-safety, robust component interfaces. |
| **Tailwind CSS** | Styling | Highly utility-first responsive styling and theme tokens. |
| **Framer Motion** | Animation | Advanced physics-based, smooth micro-interactions. |
| **Redux Toolkit** | State Management | Centralized global application state. |
| **React Query** | Data Fetching | Efficient caching and synchronization of widget endpoints. |
| **Geist Sans & Mono** | Typography | Sleek Vercel-optimized font family. |

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18+) and [pnpm](https://pnpm.io) (or npm/yarn) installed.

### Installation

1. Clone the repository and navigate to the directory:
   ```bash
   cd portfolio
   ```

2. Install the workspace dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up your local environment file (`.env`):
   ```env
   SECURITY_TOKEN=your_express_api_secret_token
   ```

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see your portfolio live!

---

## 🔒 Security & Best Practices

All API integrations (such as the contact forms and the plan purchase system) protect internal authentication details by routing through standard server-side endpoints inside `src/app/api/send-email/route.ts`. The proxy appends critical security headers (`x-api-key`) and locks the recipient payload to your email address before sending, preventing spam and credential theft.
