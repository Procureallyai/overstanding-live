import { Link } from 'react-router-dom'
import { essays } from '@/data/essays'
import { aphorisms } from '@/data/aphorisms'

export function Home() {
  // Get the latest essay, most popular theme, and recent aphorism
  const latestEssay = essays[0]
  const recentAphorism = aphorisms[0]
  
  // Get most common theme from aphorisms for "popular theme"
  const themeCount = aphorisms.reduce((acc, aphorism) => {
    acc[aphorism.theme] = (acc[aphorism.theme] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const popularTheme = Object.entries(themeCount)
    .sort(([,a], [,b]) => b - a)[0]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/overstanding_live_logo_transparent.png" 
            alt="Overstanding Live" 
            className="h-[275px] w-[275px] mx-auto mb-8"
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
            
            {/* Latest Essay Card */}
            <Link 
              to={`/essays/${latestEssay.slug}`}
              className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-heading group-hover:text-primary transition-colors">Latest Essay</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">NEW</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary/90 transition-colors line-clamp-2">
                {latestEssay.title}
              </h4>
              <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                {latestEssay.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary font-medium">{latestEssay.readTime} min read</span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {latestEssay.theme}
                </span>
              </div>
            </Link>

            {/* Popular Theme Card */}
            <Link 
              to="/aphorisms"
              className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-heading group-hover:text-primary transition-colors">Popular Theme</h3>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">TRENDING</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary/90 transition-colors">
                {popularTheme[0]}
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Explore our collection of thoughts and insights on {popularTheme[0].toLowerCase()}, featuring diverse perspectives and deep reflections.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary font-medium">{popularTheme[1]} pieces</span>
                <span className="text-xs text-muted-foreground">Browse all →</span>
              </div>
            </Link>

            {/* Recent Aphorism Card */}
            <Link 
              to="/aphorisms"
              className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-heading group-hover:text-primary transition-colors">Recent Aphorism</h3>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">WISDOM</span>
              </div>
              <blockquote className="text-foreground mb-4 italic text-sm leading-relaxed border-l-2 border-primary/30 pl-3">
                "{recentAphorism.text.length > 120 ? recentAphorism.text.substring(0, 120) + '...' : recentAphorism.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary font-medium">View all aphorisms</span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {recentAphorism.theme}
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  )
}
