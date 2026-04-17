import { Container, Database, Globe, Sparkles } from "lucide-react";

const techStack = [
  { icon: Container, label: "Docker", desc: "Containerized deployment for portability and consistency across environments." },
  { icon: Database, label: "MariaDB", desc: "Reliable relational database storing volunteers, shifts and assignments." },
  { icon: Globe, label: "Engelsystem", desc: "Open-source volunteer coordination platform trusted by events worldwide." },
];

export function TechnicalSection() {
  return (
    <section id="technical" className="relative bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <Sparkles size={20} className="text-primary" strokeWidth={2.5} />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The Stack</p>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="text-display text-4xl text-foreground md:text-5xl lg:text-6xl">
            From vision <br />
            to reality.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Deployed using Docker with a MariaDB database. Engelsystem powers the coordination layer for large-scale events.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {techStack.map((t, i) => (
            <div
              key={t.label}
              className={`rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                i === 1 ? "bg-accent text-accent-foreground" : "bg-card border border-border text-card-foreground"
              }`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${i === 1 ? "bg-primary" : "bg-secondary"}`}>
                <t.icon size={24} className={i === 1 ? "text-primary-foreground" : "text-primary"} strokeWidth={2.2} />
              </div>
              <h3 className={`mt-6 text-2xl font-black uppercase tracking-tight ${i === 1 ? "text-primary" : "text-foreground"}`}>
                {t.label}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 1 ? "text-accent-foreground/85" : "text-muted-foreground"}`}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
