import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute top-[10%] left-[15%] h-[400px] w-[400px] rounded-full bg-glow-purple/30 blur-[120px]" />
        <div className="animate-pulse-glow animation-delay-200 absolute top-[30%] right-[10%] h-[350px] w-[350px] rounded-full bg-glow-cyan/25 blur-[100px]" />
        <div className="animate-pulse-glow animation-delay-400 absolute bottom-[15%] left-[40%] h-[300px] w-[300px] rounded-full bg-glow-pink/20 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Volunteer Management Platform
        </div>

        <h1 className="animate-fade-in-up animation-delay-100 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-foreground">TechFest</span>
          <br />
          <span className="gradient-text">2026</span>
        </h1>

        <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Manage volunteers, shifts, and event operations efficiently
        </p>

        <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_30px_-5px] shadow-primary/50 hover:bg-primary/90 hover:shadow-primary/70 transition-shadow">
            <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
              Open Volunteer System
              <ExternalLink size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 gap-2 rounded-full border-border/50 px-8 text-base hover:bg-secondary">
            <a href="#about">
              Learn More
              <ChevronDown size={16} />
            </a>
          </Button>
        </div>

        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute -top-10 -right-20 hidden lg:block">
          <div className="animate-float h-20 w-20 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm" style={{ animationDelay: "0s" }} />
        </div>
        <div className="pointer-events-none absolute -bottom-10 -left-16 hidden lg:block">
          <div className="animate-float h-14 w-14 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-sm" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </section>
  );
}
