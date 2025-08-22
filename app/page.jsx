import { NetflixHeader } from "@/components/netflix-header"
import { HeroSection } from "@/components/hero-section"
import { TrendingSection } from "@/components/trending-section"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { NetflixFooter } from "@/components/netflix-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NetflixHeader />
      <main>
        <HeroSection />
        <TrendingSection />
        <FeaturesSection />
        <FAQSection />
      </main>
      <NetflixFooter />
    </div>
  )
}
