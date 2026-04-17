import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Sparkles, Star } from "lucide-react";
import heroVolunteer from "@/assets/hero-volunteer.png";

const stats = [
  { value: "500+", label: "Active Volunteers" },
  { value: "125+", label: "Shifts Available" },
  { value: "450+", label: "Tasks Completed" },
];

const marqueeItems = ["VOLUNTEERS", "SHIFTS", "ROLES", "ADMIN", "EVENTS", "ENGELSYSTEM"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-accent pt-20">
      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-10">
        {/* Top row: badge + intro copy */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-accent bg-gradient-to-br from-primary to-accent-foreground/40"
                />
              ))}
            </div>
            <div className="max-w-[220px] text-xs font-bold uppercase tracking-wide text-accent-foreground">
              The expert team brings creativity to every event
            </div>
          </div>

          <div className="space-y-5 md:text-right">
            <Star size={28} className="text-primary md:ml-auto" strokeWidth={2.5} fill="currentColor" />
            <p className="text-base font-medium leading-relaxed text-accent-foreground md:ml-auto md:max-w-md">
              Manage volunteers, shifts and event operations efficiently with the trusted open-source coordination platform powering TechFest 2026.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
              >
                <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ExternalLink size={16} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-12 rounded-full border-accent-foreground/40 bg-transparent p-0 text-accent-foreground hover:bg-accent-foreground/10 hover:text-primary"
              >
                <a href="#about" aria-label="Learn more">
                  <Play size={16} fill="currentColor" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Main hero: stats column + (title with volunteer overlay) */}
        <div className="mt-10 grid items-end gap-8 lg:grid-cols-[180px_1fr]">
          {/* Stats column */}
          <div className="flex flex-row gap-6 lg:flex-col lg:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 border-t-2 border-accent-foreground/30 pt-3">
                <div className="text-3xl font-black tracking-tight text-accent-foreground md:text-4xl lg:text-5xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground/80 md:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Title + volunteer photo */}
          <div className="relative">
            <h1 className="text-display relative z-0 text-[18vw] leading-[0.82] text-primary lg:text-[11rem] xl:text-[13rem]">
              TechFest
              <br />
              <span className="text-accent-foreground">2026</span>
            </h1>

            {/* Volunteer photo overlapping the title */}
            <img
              src={heroVolunteer}
              alt="TechFest 2026 volunteer wearing headphones"
              width={896}
              height={1152}
              className="pointer-events-none absolute right-[2%] bottom-0 z-10 h-[110%] w-auto max-w-none object-contain drop-shadow-2xl"
            />

            {/* Decorative star */}
            <Sparkles
              size={48}
              className="animate-float pointer-events-none absolute -top-2 right-2 z-20 text-primary"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden border-y-2 border-accent-foreground bg-primary py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-6">
              <span className="text-2xl font-black uppercase tracking-tight text-primary-foreground md:text-3xl">
                {item}
              </span>
              <Star size={20} className="shrink-0 text-primary-foreground" strokeWidth={2.5} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
