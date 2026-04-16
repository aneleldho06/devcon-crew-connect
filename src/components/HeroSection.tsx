import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          TechFest 2026
          <br />
          <span className="text-primary">Volunteer System</span>
        </h1>
        <p className="animate-fade-in-up animation-delay-100 mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Manage volunteers, shifts, and event operations efficiently
        </p>
        <div className="animate-fade-in-up animation-delay-200 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
              Open Volunteer System
              <ExternalLink size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="#about">
              Learn More
              <ChevronDown size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
