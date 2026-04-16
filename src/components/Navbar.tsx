import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Technical", href: "#technical" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Zap size={20} className="text-primary" />
          <span className="text-foreground">TECHFEST</span>
          <span className="text-primary">2026</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/80">
            <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
              Open System
            </a>
          </Button>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/30 bg-background/95 backdrop-blur-xl px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 w-full rounded-full bg-accent text-accent-foreground">
            <a href="http://localhost:5080" target="_blank" rel="noopener noreferrer">
              Open System
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
