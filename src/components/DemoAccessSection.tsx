import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, KeyRound } from "lucide-react";

const credentials = [
  { role: "Admin", username: "admin", password: "password" },
  { role: "Volunteer", username: "volunteer1", password: "password" },
];

export function DemoAccessSection() {
  return (
    <section id="demo" className="px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Demo Access</h2>
        <p className="mt-4 text-muted-foreground">
          Try the system using the demo credentials below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {credentials.map((c) => (
            <Card key={c.role} className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-center gap-2 text-lg">
                  <KeyRound size={18} className="text-primary" />
                  {c.role}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p className="text-muted-foreground">
                  Username: <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">{c.username}</code>
                </p>
                <p className="text-muted-foreground">
                  Password: <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">{c.password}</code>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button asChild size="lg" className="mt-10 gap-2">
          <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
            Open Volunteer System
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </section>
  );
}
