import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/netflix-movie-collage.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
          Unlimited movies,
          <br />
          TV shows and more
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-serif">Starts at ₹7.99. Cancel at any time.</p>
        <p className="text-lg mb-8 text-muted-foreground font-serif">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <Input type="email" placeholder="Email address" className="flex-1 h-14 text-lg bg-card/80 border-border" />
          <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90">
            Get Started
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
