export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground">About the System</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          This platform allows volunteers to register, choose shifts, and help run large-scale
          events efficiently using{" "}
          <span className="font-semibold text-foreground">Engelsystem</span> — an open-source
          volunteer coordination tool trusted by events worldwide.
        </p>
      </div>
    </section>
  );
}
