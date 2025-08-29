import { useState } from 'react'
import { essays } from '@/data/essays'

export function Essays() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('')

  const filteredEssays = essays.filter(essay => {
    const matchesSearch = essay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         essay.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         essay.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTheme = !selectedTheme || essay.theme.toLowerCase() === selectedTheme.toLowerCase()
    return matchesSearch && matchesTheme
  })

  const themes = [...new Set(essays.map(essay => essay.theme))]

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select 
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">All themes</option>
            {themes.map(theme => (
              <option key={theme} value={theme}>{theme}</option>
            ))}
          </select>
        </div>

        {/* Essays List */}
        <div className="space-y-8">
          {filteredEssays.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No essays found matching your criteria.
              </p>
            </div>
          ) : (
            filteredEssays.map((essay, index) => {
              const isLatest = index === 0;
              const hasImage = !!essay.image;
              
              if (isLatest && hasImage) {
                // Featured layout for the latest essay with image
                return (
                  <article key={essay.id} className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="order-2 lg:order-1 p-8 flex flex-col justify-center">
                        <div className="mb-6">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                              Latest
                            </span>
                            <time>{new Date(essay.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</time>
                            <span>•</span>
                            <span>{essay.readTime} min read</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {essay.theme}
                            </span>
                          </div>
                          
                          <h2 className="text-2xl lg:text-3xl font-heading mb-4 text-foreground">
                            {essay.title}
                          </h2>
                          
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {essay.excerpt}
                          </p>
                          
                          <a 
                            href={`/essays/${essay.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors border border-border rounded-md hover:border-primary/50 font-medium"
                          >
                            Read full essay →
                          </a>
                        </div>
                      </div>
                      
                      <div className="order-1 lg:order-2 aspect-[4/5] lg:aspect-auto overflow-hidden">
                        <img 
                          src={essay.image} 
                          alt={`Visual representation for: ${essay.title}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </article>
                );
              }
              
              // Standard layout for other essays
              return (
                <article key={essay.id} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 sm:mb-0">
                      <time>{new Date(essay.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                      <span>•</span>
                      <span>{essay.readTime} min read</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {essay.theme}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-heading mb-3 hover:text-primary transition-colors cursor-pointer">
                    {essay.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {essay.excerpt}
                  </p>
                  <a 
                    href={`/essays/${essay.slug}`}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read more →
                  </a>
                </article>
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}
