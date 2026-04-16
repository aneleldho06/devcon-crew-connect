export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-glow-cyan/10 blur-[100px]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">About</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          What is this system?
        </h2>
        <div className="mx-auto mt-8 glass-card rounded-2xl p-8 md:p-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            This platform allows volunteers to <span className="text-foreground font-medium">register</span>,{" "}
            <span className="text-foreground font-medium">choose shifts</span>, and help run large-scale
            events efficiently using{" "}
            <span className="gradient-text font-semibold">Engelsystem</span> — an open-source
            volunteer coordination tool trusted by events worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
