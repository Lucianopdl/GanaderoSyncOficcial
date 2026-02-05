import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { AiAnalysis } from "@/components/landing/ai-analysis";
import { Pricing } from "@/components/landing/pricing";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <DashboardPreview />
        <AiAnalysis />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
