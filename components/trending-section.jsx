import { Card } from "@/components/ui/card"

const trendingShows = [
  { id: 1, title: "Wednesday", image: "/wednesday-netflix-poster.png" },
  { id: 2, title: "Squid Game", image: "/squid-game-poster.png" },
  { id: 3, title: "Stranger Things", image: "/stranger-things-poster.png" },
  { id: 4, title: "The Crown", image: "/the-crown-inspired-poster.png" },
  { id: 5, title: "Ozark", image: "/ozark-netflix-poster.png" },
]

export function TrendingSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 font-sans">Trending Now</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingShows.map((show, index) => (
            <Card
              key={show.id}
              className="relative group cursor-pointer overflow-hidden bg-card border-border hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img src={show.image || "/placeholder.svg"} alt={show.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="text-6xl font-bold text-white/80 font-sans">{index + 1}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold font-serif">{show.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
