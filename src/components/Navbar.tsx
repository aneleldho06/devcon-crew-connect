import { useState } from "react";
import { Menu, X, Sparkles, Phone } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Stack", href: "#technical" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tight text-accent-foreground">
          <Sparkles size={22} className="text-primary" strokeWidth={2.5} />
          <span>TECHFEST</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/90 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Phone size={16} className="text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="text-xs font-semibold uppercase text-accent-foreground/70">
            <div>Event Line</div>
            <div className="text-sm font-bold text-accent-foreground">+43 879 5673 9876</div>
          </div>
        </div>

        <button className="text-accent-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="bg-accent/95 backdrop-blur-xl px-6 pb-6 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold uppercase text-accent-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
