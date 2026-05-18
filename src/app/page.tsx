import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      {/* Dynamic Navigation Header with centered menu links */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 flex flex-col">
        {/* Breathtaking custom blueprint-matched Hero section */}
        <Hero />

        {/* Section Placeholders (Scroll targets, to be built out step-by-step) */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center border-t border-border/40 py-24 px-6 bg-secondary/5"
        >
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
              About Me
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Awaiting your next step-by-step instructions to replace this placeholder with a premium custom component.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center justify-center border-t border-border/40 py-24 px-6"
        >
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
              Experience
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Awaiting your next step-by-step instructions to replace this placeholder with a premium custom component.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center border-t border-border/40 py-24 px-6 bg-secondary/5"
        >
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
              Projects
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Awaiting your next step-by-step instructions to replace this placeholder with a premium custom component.
            </p>
          </div>
        </section>

        <section
          id="blogs"
          className="min-h-screen flex items-center justify-center border-t border-border/40 py-24 px-6"
        >
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
              Blogs
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Awaiting your next step-by-step instructions to replace this placeholder with a premium custom component.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center border-t border-border/40 py-24 px-6 bg-secondary/10"
        >
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
              Contact
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Awaiting your next step-by-step instructions to replace this placeholder with a premium custom component.
            </p>
          </div>
        </section>
      </main>

      {/* Clean signature footer */}
      <footer className="w-full border-t border-border bg-background py-8 text-center text-xs text-muted-foreground relative z-10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 NIRAJ BAVA. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-foreground transition-colors">
              Back to Top
            </a>
            <span>•</span>
            <span className="text-muted-foreground/80">Tailwind v4 & Redux Persist Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
