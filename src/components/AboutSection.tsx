import { Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <Sparkles size={20} className="text-primary" strokeWidth={2.5} />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What We Do</p>
        </div>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="text-display text-4xl text-foreground md:text-5xl lg:text-6xl">
            Designing for seamless <br />
            and enjoyable interactions.
          </h2>
          <a
            href="#features"
            className="inline-flex h-12 items-center gap-2 self-start rounded-full border border-foreground/20 px-6 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            All Services
            <span className="text-lg">→</span>
          </a>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          This platform allows volunteers to <span className="font-semibold text-foreground">register</span>, <span className="font-semibold text-foreground">choose shifts</span>, and help run large-scale events efficiently using <span className="font-semibold text-primary">Engelsystem</span> — an open-source volunteer coordination tool trusted by events worldwide.
        </p>
      </div>
    </section>
  );
}
