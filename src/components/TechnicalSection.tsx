import { Card, CardContent } from "@/components/ui/card";
import { Server } from "lucide-react";

export function TechnicalSection() {
  return (
    <section id="technical" className="px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Technical Overview</h2>
        <Card className="mt-10 border-border/50 bg-card/50">
          <CardContent className="flex items-start gap-4 p-6 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Server size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Deployment Stack</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Deployed using <span className="text-foreground">Docker</span> with a{" "}
                <span className="text-foreground">MariaDB</span> database. Engelsystem is an
                open-source volunteer coordination platform designed for large-scale events, running
                in a containerized environment for easy setup and portability.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
