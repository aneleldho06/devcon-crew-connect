import { UserPlus, Search, CheckSquare, Settings } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up or Log In", desc: "Create your volunteer account in seconds." },
  { icon: Search, title: "Browse Available Shifts", desc: "Explore all open shifts and roles for the event." },
  { icon: CheckSquare, title: "Select Preferred Tasks", desc: "Choose the shifts and tasks that suit you best." },
  { icon: Settings, title: "Admin Manages Assignments", desc: "Organizers monitor, approve, and adjust as needed." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-foreground">How It Works</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center">
                <s.icon size={20} className="text-muted-foreground" />
              </div>
              <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
