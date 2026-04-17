import { Sparkles, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-accent-foreground/20 pb-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-2xl font-black tracking-tight text-accent-foreground">
              <Sparkles size={24} className="text-primary" strokeWidth={2.5} />
              TECHFEST 2026
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-accent-foreground/80">
              The volunteer management hub for TechFest 2026 — built on Engelsystem to keep shifts, roles, and people perfectly in sync.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-accent-foreground/85">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#features" className="hover:text-primary">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary">Process</a></li>
              <li><a href="#demo" className="hover:text-primary">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Project</h4>
            <ul className="mt-4 space-y-2 text-sm text-accent-foreground/85">
              <li>Built for Engelsystem Deployment Quest</li>
              <li>Open-source coordination</li>
              <li>Docker + MariaDB stack</li>
            </ul>
          </div>
        </div>

        {/* Big footer mark */}
        <div className="relative pt-10">
          <div className="text-display text-[18vw] leading-[0.85] text-primary md:text-[14vw] lg:text-[12rem]">
            TECHFEST
          </div>
          <Star size={32} className="absolute right-2 top-12 text-primary" strokeWidth={2.5} fill="currentColor" />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-accent-foreground/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TechFest 2026 — Your Name Here</p>
          <p>Powered by Engelsystem · Open Source</p>
        </div>
      </div>
    </footer>
  );
}
