import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-4 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Zap size={18} className="text-primary" />
          <span>TechFest 2026</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Built for Engelsystem Deployment Quest
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Your Name Here
        </p>
      </div>
    </footer>
  );
}
