import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DemoAccessSection } from "@/components/DemoAccessSection";
import { TechnicalSection } from "@/components/TechnicalSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TechFest 2026 Volunteer System" },
      { name: "description", content: "Manage volunteers, shifts, and event operations efficiently with Engelsystem." },
      { property: "og:title", content: "TechFest 2026 Volunteer System" },
      { property: "og:description", content: "Manage volunteers, shifts, and event operations efficiently with Engelsystem." },
    ],
  }),
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoAccessSection />
      <TechnicalSection />
      <Footer />
    </div>
  );
}
