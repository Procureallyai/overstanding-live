export function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/overstanding_live_logo_200x200.jpg" 
            alt="Overstanding Live" 
            className="h-[275px] w-[275px] mx-auto mb-8 rounded-lg"
          />
          <h1 className="text-4xl md:text-6xl font-heading mb-6 text-foreground">
            An experiment in understanding
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Essays, aphorisms, and themes on wisdom, understanding, and the pursuit of deeper knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/essays" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Read Essays
            </a>
            <a 
              href="/aphorisms" 
              className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-md hover:bg-accent transition-colors"
            >
              Browse Aphorisms
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading mb-12 text-center">Featured Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder cards */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-heading mb-3">Latest Essay</h3>
              <p className="text-muted-foreground mb-4">
                Exploring the depths of understanding and the nature of knowledge itself.
              </p>
              <span className="text-sm text-primary">5 min read</span>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-heading mb-3">Popular Theme</h3>
              <p className="text-muted-foreground mb-4">
                A collection of thoughts on wisdom and its practical applications.
              </p>
              <span className="text-sm text-primary">12 pieces</span>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-heading mb-3">Recent Aphorism</h3>
              <p className="text-muted-foreground mb-4">
                "Understanding is not the accumulation of knowledge, but the transformation of perspective."
              </p>
              <span className="text-sm text-primary">Share</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
