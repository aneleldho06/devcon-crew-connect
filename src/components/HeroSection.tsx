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
      {/* Top content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-8 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Left: small badge + stats */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-accent bg-gradient-to-br from-primary to-accent-foreground/40"
                  />
                ))}
              </div>
              <div className="max-w-[200px] text-xs font-semibold uppercase tracking-wide text-accent-foreground/90">
                THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY EVENT
              </div>
            </div>

            <div className="space-y-6 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-accent-foreground/20 pt-4">
                  <div className="text-5xl font-black tracking-tight text-accent-foreground">{s.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy + CTAs */}
          <div className="max-w-md space-y-6 lg:text-right">
            <Star size={28} className="text-primary lg:ml-auto" strokeWidth={2.5} fill="currentColor" />
            <p className="text-base leading-relaxed text-accent-foreground/85">
              Manage volunteers, shifts and event operations efficiently with the trusted open-source coordination platform powering TechFest 2026.
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="h-12 gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90">
                <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ExternalLink size={16} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 w-12 rounded-full border-accent-foreground/30 bg-transparent p-0 text-accent-foreground hover:bg-accent-foreground/10 hover:text-primary">
                <a href="#about" aria-label="Learn more">
                  <Play size={16} fill="currentColor" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Massive title with overlapping volunteer */}
        <div className="relative mt-12">
          <h1 className="text-display relative z-0 text-[20vw] leading-[0.85] text-primary md:text-[16vw] lg:text-[14rem] xl:text-[16rem]">
            TechFest
            <br />
            <span className="text-accent-foreground">2026</span>
          </h1>

          {/* Volunteer photo overlapping title */}
          <img
            src={heroVolunteer}
            alt="TechFest 2026 volunteer wearing headphones"
            width={896}
            height={1152}
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[55%] max-w-[520px] -translate-x-1/2 -translate-y-[55%] object-contain drop-shadow-2xl md:w-[45%]"
          />

          {/* Decorative star */}
          <div className="pointer-events-none absolute right-[2%] top-[10%] z-20 hidden lg:block">
            <Sparkles size={56} className="animate-float text-primary" strokeWidth={2} />
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
              <Star size={20} className="text-primary-foreground shrink-0" strokeWidth={2.5} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
