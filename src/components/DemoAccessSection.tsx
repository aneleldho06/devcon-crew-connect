import { Button } from "@/components/ui/button";
import { ExternalLink, KeyRound, Shield, User } from "lucide-react";

const credentials = [
  { role: "Admin", username: "admin", password: "password", icon: Shield, desc: "Full access to manage all assignments" },
  { role: "Volunteer", username: "volunteer1", password: "password", icon: User, desc: "Browse and sign up for shifts" },
];

export function DemoAccessSection() {
  return (
    <section id="demo" className="relative px-4 py-28">
      <div className="pointer-events-none absolute left-[20%] top-0 h-[350px] w-[350px] rounded-full bg-glow-cyan/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Try It Out</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          Demo Access
        </h2>
        <p className="mt-4 text-muted-foreground">
          Use the credentials below to explore the system.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {credentials.map((c) => (
            <div key={c.role} className="glass-card rounded-2xl p-6 text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <c.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{c.role}</h3>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
                  <span className="text-muted-foreground">Username</span>
                  <code className="font-mono text-foreground">{c.username}</code>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
                  <span className="text-muted-foreground">Password</span>
                  <code className="font-mono text-foreground">{c.password}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="mt-10 h-12 gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_30px_-5px] shadow-primary/50 hover:bg-primary/90">
          <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
            Open Volunteer System
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </section>
  );
}
