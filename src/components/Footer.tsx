export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-semibold text-foreground">TechFest 2026 Volunteer Management System</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Built for Engelsystem Deployment Quest
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Your Name Here
        </p>
      </div>
    </footer>
  );
}
