import { UserPlus, Search, CheckSquare, Settings, Sparkles } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your volunteer account in seconds.", num: "01" },
  { icon: Search, title: "Browse Shifts", desc: "Explore all open shifts and roles.", num: "02" },
  { icon: CheckSquare, title: "Select Tasks", desc: "Choose the shifts that suit you best.", num: "03" },
  { icon: Settings, title: "Admin Manages", desc: "Organizers monitor and adjust assignments.", num: "04" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-muted px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <Sparkles size={20} className="text-primary" strokeWidth={2.5} />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How It Works</p>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="text-display text-4xl text-foreground md:text-5xl lg:text-6xl">
            Creativity meets <br />
            <span className="relative inline-block">
              strategy.
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-primary -z-0" />
            </span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            From the moment volunteers sign up to the final shift wrap-up, every step is designed to feel effortless for the team and the organizers.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-black tracking-tight text-primary">{s.num}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary/20">
                  <s.icon size={20} className="text-foreground group-hover:text-primary" strokeWidth={2.2} />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-foreground group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-accent-foreground/85">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
