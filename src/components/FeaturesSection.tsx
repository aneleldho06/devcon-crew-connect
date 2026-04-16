import { UserPlus, CalendarClock, ShieldCheck, LayoutDashboard } from "lucide-react";

const features = [
  { icon: UserPlus, title: "Registration & Login", desc: "Easy sign-up flow so volunteers can create accounts and log in securely.", color: "text-glow-cyan" },
  { icon: CalendarClock, title: "Shift Scheduling", desc: "Browse available time slots and sign up for shifts that fit your schedule.", color: "text-glow-purple" },
  { icon: ShieldCheck, title: "Role Management", desc: "Assign roles and permissions so the right people handle the right tasks.", color: "text-glow-pink" },
  { icon: LayoutDashboard, title: "Admin Dashboard", desc: "Organizers get a powerful overview to monitor and manage all assignments.", color: "text-glow-orange" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-glow-purple/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
        <h2 className="mt-3 text-center text-3xl font-bold text-foreground md:text-4xl">
          Everything you need
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`animate-fade-in-up animation-delay-${i * 100} glass-card group rounded-2xl p-6 transition-all hover:border-primary/20 hover:shadow-[0_0_40px_-15px] hover:shadow-primary/20`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <f.icon size={22} className={f.color} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
