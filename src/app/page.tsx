import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Publications from "@/components/Publications";
import Clubs from "@/components/Clubs";
import ExtraCurricular from "@/components/ExtraCurricular";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      {/* Dynamic Navigation Header with centered menu links */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 flex flex-col">
        {/* Breathtaking custom blueprint-matched Hero section */}
        <Hero />

        {/* Premium high-fidelity About section strictly matching layout blueprints */}
        <About />

        {/* Work Experience section with card grid and detail modal */}
        <Experience />

        {/* Education section built strictly matching visual asymmetric grid blueprint */}
        <Education />

        {/* Projects section built strictly matching visual staggered 3-column blueprint */}
        <Projects />

        {/* Vertical Mind Map style Skills Section */}
        <Skills />

        {/* Master-Detail Interactive Achievements Section */}
        <Achievements />

        {/* Bento Grid Layout Certifications Section */}
        <Certifications />

        {/* Publications Grid Section matching blueprint */}
        <Publications />

        {/* Clubs & Societies Section matching blueprint */}
        <Clubs />

        {/* Extra-Curricular Activities Section */}
        <ExtraCurricular />


      </main>

      <Footer />
    </div>
  );
}
