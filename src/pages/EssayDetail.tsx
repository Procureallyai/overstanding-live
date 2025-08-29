import { useParams, Link } from 'react-router-dom'
import { essays } from '@/data/essays'

export function EssayDetail() {
  const { slug } = useParams<{ slug: string }>()
  const essay = essays.find(e => e.slug === slug)

  if (!essay) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-heading mb-4">Essay Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The essay you're looking for doesn't exist.
          </p>
          <Link 
            to="/essays"
            className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:text-primary/80 transition-colors border border-border rounded-md hover:border-primary/50 font-medium"
          >
            ← Back to Essays
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/essays"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Essays
          </Link>
        </div>

        {/* Essay Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
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
          
          <h1 className="text-4xl lg:text-5xl font-heading mb-6 text-foreground">
            {essay.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {essay.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        {essay.image && (
          <div className="mb-12">
            <div className="rounded-lg border border-border overflow-hidden">
              <img 
                src={essay.image} 
                alt={`Visual representation for: ${essay.title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Essay Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-foreground leading-relaxed">
            {essay.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Author Attribution */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <cite className="text-lg text-muted-foreground not-italic">
              — {essay.author}
            </cite>
            <div className="flex items-center gap-4">
              <Link 
                to="/essays"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                More Essays →
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
