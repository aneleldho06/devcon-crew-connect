import { UserPlus, CalendarClock, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: UserPlus, title: "Volunteer Registration & Login", desc: "Easy sign-up flow so volunteers can create accounts and log in securely." },
  { icon: CalendarClock, title: "Shift Selection & Scheduling", desc: "Browse available time slots and sign up for shifts that fit your schedule." },
  { icon: ShieldCheck, title: "Role-Based Task Management", desc: "Assign roles and permissions so the right people handle the right tasks." },
  { icon: LayoutDashboard, title: "Admin Dashboard", desc: "Organizers get a powerful overview to monitor and manage all assignments." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-foreground">Features</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <Card key={f.title} className={`animate-fade-in-up animation-delay-${i * 100} border-border/50 bg-card/50 transition-colors hover:border-primary/30`}>
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
