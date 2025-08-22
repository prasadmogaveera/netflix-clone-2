import { Card, CardContent } from "@/components/ui/card"
import { Tv, Download, Globe, Users } from "lucide-react"

const features = [
  {
    icon: Tv,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    icon: Download,
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
  },
  {
    icon: Globe,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  {
    icon: Users,
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-card/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-sans">More reasons to join</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border p-6 hover:bg-card/80 transition-colors">
              <CardContent className="p-0">
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-sans">{feature.title}</h3>
                <p className="text-muted-foreground font-serif">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
