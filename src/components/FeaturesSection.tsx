import { UserPlus, CalendarClock, ShieldCheck, LayoutDashboard, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Registration & Login",
    desc: "Easy sign-up flow so volunteers can create accounts and log in securely.",
    variant: "dark" as const,
  },
  {
    icon: CalendarClock,
    title: "Creative Shift Scheduling",
    desc: "Browse all available time slots and pick the shifts that fit your schedule.",
    variant: "accent" as const,
  },
  {
    icon: ShieldCheck,
    title: "Role Management",
    desc: "Assign roles and permissions so the right people handle the right tasks.",
    variant: "dark" as const,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-background px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {features.map((f) => {
          const isAccent = f.variant === "accent";
          return (
            <div
              key={f.title}
              className={`group relative flex flex-col justify-between rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                isAccent
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-card-foreground border border-border"
              } min-h-[340px]`}
            >
              <div>
                <h3 className={`text-xl font-black uppercase leading-tight tracking-tight ${isAccent ? "text-primary" : "text-foreground"}`}>
                  {f.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${isAccent ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                  {f.desc}
                </p>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${isAccent ? "bg-primary" : "bg-secondary"}`}>
                  <f.icon size={22} className={isAccent ? "text-primary-foreground" : "text-primary"} strokeWidth={2.2} />
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:rotate-45 ${isAccent ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"}`}>
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus full-width admin card */}
      <div className="mx-auto mt-6 max-w-7xl">
        <div className="group flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-7 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <LayoutDashboard size={22} className="text-primary-foreground" strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-foreground">Admin Dashboard</h3>
              <p className="mt-1 text-sm text-muted-foreground">Organizers get a powerful overview to monitor and manage all assignments in real time.</p>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
