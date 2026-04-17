import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, User, Sparkles } from "lucide-react";

const credentials = [
  { role: "Admin", username: "admin", password: "password", icon: Shield, desc: "Full access to manage all assignments" },
  { role: "Volunteer", username: "volunteer1", password: "password", icon: User, desc: "Browse and sign up for shifts" },
];

export function DemoAccessSection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-accent px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-primary" strokeWidth={2.5} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Try It Out</p>
            </div>
            <h2 className="mt-6 text-display text-5xl text-accent-foreground md:text-6xl lg:text-7xl">
              Demo
              <br />
              <span className="text-primary">Access.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-accent-foreground/85">
              Use the credentials on the right to explore the system. Both accounts are reset regularly — feel free to click around.
            </p>
            <Button asChild size="lg" className="mt-8 h-12 gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90">
              <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
                Open Volunteer System
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            {credentials.map((c) => (
              <div key={c.role} className="rounded-3xl bg-background p-6 text-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
                    <c.icon size={20} className="text-primary-foreground" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight">{c.role}</h3>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-muted px-4 py-3">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Username</div>
                    <code className="mt-1 block font-mono font-semibold text-foreground">{c.username}</code>
                  </div>
                  <div className="rounded-xl bg-muted px-4 py-3">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Password</div>
                    <code className="mt-1 block font-mono font-semibold text-foreground">{c.password}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
