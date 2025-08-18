export function Themes() {
  const themes = [
    {
      id: 1,
      title: "Understanding",
      description: "Exploring the nature of comprehension and insight beyond mere knowledge.",
      count: 8,
      color: "bg-primary/10 text-primary"
    },
    {
      id: 2,
      title: "Wisdom",
      description: "The practical application of knowledge and the cultivation of sound judgment.",
      count: 6,
      color: "bg-secondary/10 text-secondary-foreground"
    },
    {
      id: 3,
      title: "Truth",
      description: "Examining the nature of reality and our relationship with what is real.",
      count: 5,
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      id: 4,
      title: "Perspective",
      description: "How our viewpoint shapes our understanding and interpretation of reality.",
      count: 7,
      color: "bg-muted text-muted-foreground"
    },
    {
      id: 5,
      title: "Knowledge",
      description: "The accumulation, organization, and transformation of information.",
      count: 4,
      color: "bg-primary/10 text-primary"
    },
    {
      id: 6,
      title: "Consciousness",
      description: "Awareness, perception, and the nature of subjective experience.",
      count: 3,
      color: "bg-secondary/10 text-secondary-foreground"
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-heading mb-4">Themes</h1>
          <p className="text-xl text-muted-foreground">
            Explore collections of essays and aphorisms organized by central themes and concepts.
          </p>
        </header>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-200 hover:shadow-lg cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-heading group-hover:text-primary transition-colors">
                  {theme.title}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme.color}`}>
                  {theme.count} pieces
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {theme.description}
              </p>
              
              <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                <span className="text-sm font-medium">Explore theme</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Theme Section */}
        <section className="mt-16 border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading mb-4">Featured Theme: Understanding</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most explored theme, examining what it means to truly comprehend something beyond surface-level knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Recent Essays</h3>
              <div className="space-y-3">
                <a href="/essays/nature-of-understanding" className="block p-3 border border-border rounded hover:border-primary/50 transition-colors">
                  <h4 className="font-medium mb-1">The Nature of Understanding</h4>
                  <p className="text-sm text-muted-foreground">5 min read</p>
                </a>
                <a href="/essays/beyond-knowledge" className="block p-3 border border-border rounded hover:border-primary/50 transition-colors">
                  <h4 className="font-medium mb-1">Beyond Knowledge</h4>
                  <p className="text-sm text-muted-foreground">7 min read</p>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Related Aphorisms</h3>
              <div className="space-y-3">
                <blockquote className="p-3 border border-border rounded italic">
                  "Understanding is not the accumulation of knowledge, but the transformation of perspective."
                </blockquote>
                <blockquote className="p-3 border border-border rounded italic">
                  "To overstand is to rise above the surface and see the patterns beneath."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
