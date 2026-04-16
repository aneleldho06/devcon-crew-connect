import { UserPlus, Search, CheckSquare, Settings } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your volunteer account in seconds.", num: "01" },
  { icon: Search, title: "Browse Shifts", desc: "Explore all open shifts and roles.", num: "02" },
  { icon: CheckSquare, title: "Select Tasks", desc: "Choose the shifts that suit you best.", num: "03" },
  { icon: Settings, title: "Admin Manages", desc: "Organizers monitor and adjust assignments.", num: "04" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative px-4 py-28">
      <div className="pointer-events-none absolute right-[10%] bottom-0 h-[300px] w-[300px] rounded-full bg-glow-pink/10 blur-[100px]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Process</p>
        <h2 className="mt-3 text-center text-3xl font-bold text-foreground md:text-4xl">
          How it works
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="group text-center">
              <div className="relative mx-auto h-20 w-20">
                <div className="absolute inset-0 rounded-2xl bg-secondary transition-colors group-hover:bg-primary/10" />
                <div className="relative flex h-full w-full flex-col items-center justify-center">
                  <span className="text-xs font-bold tracking-widest text-primary">{s.num}</span>
                  <s.icon size={20} className="mt-1 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-auto mt-2 hidden h-0.5 w-12 bg-border/50 lg:block" style={{ position: "relative", left: "50%" }} />
              )}
              <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
