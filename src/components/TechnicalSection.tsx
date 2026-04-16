import { Container, Database, Globe } from "lucide-react";

const techStack = [
  { icon: Container, label: "Docker", desc: "Containerized deployment" },
  { icon: Database, label: "MariaDB", desc: "Reliable data storage" },
  { icon: Globe, label: "Engelsystem", desc: "Open-source platform" },
];

export function TechnicalSection() {
  return (
    <section id="technical" className="relative px-4 py-28">
      <div className="pointer-events-none absolute right-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-glow-orange/10 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Stack</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          Technical Overview
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Deployed using Docker with a MariaDB database. Engelsystem is an open-source volunteer
          coordination platform designed for large-scale events.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {techStack.map((t) => (
            <div key={t.label} className="glass-card rounded-2xl p-6 text-center transition-all hover:border-primary/20">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                <t.icon size={24} className="text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{t.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
