export function Essays() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-heading mb-4">Essays</h1>
          <p className="text-xl text-muted-foreground">
            Deep explorations of understanding, wisdom, and the nature of knowledge.
          </p>
        </header>

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search essays..."
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select className="px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">All themes</option>
            <option value="wisdom">Wisdom</option>
            <option value="understanding">Understanding</option>
            <option value="knowledge">Knowledge</option>
          </select>
        </div>

        {/* Essays List */}
        <div className="space-y-8">
          {/* Placeholder essay cards */}
          {[1, 2, 3].map((i) => (
            <article key={i} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 sm:mb-0">
                  <time>December {i}, 2024</time>
                  <span>•</span>
                  <span>{3 + i} min read</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Understanding
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-heading mb-3 hover:text-primary transition-colors cursor-pointer">
                The Nature of Understanding {i}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                An exploration of what it means to truly understand something, beyond mere knowledge acquisition. 
                This essay examines the difference between knowing facts and developing genuine comprehension...
              </p>
              <a 
                href={`/essays/understanding-${i}`}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
              1
            </button>
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
