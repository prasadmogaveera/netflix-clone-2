const footerLinks = [
  ["FAQ", "Help Centre", "Account", "Media Centre"],
  ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
  ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
  ["Speed Test", "Legal Notices", "Only on Netflix"],
]

export function NetflixFooter() {
  return (
    <footer className="py-16 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <p className="text-muted-foreground mb-8 font-serif">Questions? Call 1-844-542-4448</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="block text-muted-foreground hover:text-foreground mb-3 text-sm underline font-serif"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2 mb-6">
          <select className="bg-card border border-border rounded px-3 py-2 text-sm">
            <option>English</option>
          </select>
        </div>

        <p className="text-muted-foreground text-sm font-serif">Netflix India</p>
      </div>
    </footer>
  )
}
