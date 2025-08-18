export function Library() {
  const categories = [
    {
      title: "Philosophy",
      books: [
        {
          title: "Meditations",
          author: "Marcus Aurelius",
          description: "Timeless reflections on virtue, mortality, and the human condition.",
          link: "#",
          downloadable: true
        },
        {
          title: "The Republic",
          author: "Plato",
          description: "Foundational work on justice, truth, and the ideal state.",
          link: "#",
          downloadable: true
        }
      ]
    },
    {
      title: "Wisdom Literature",
      books: [
        {
          title: "The Art of Living",
          author: "Epictetus",
          description: "Practical philosophy for daily life and inner freedom.",
          link: "#",
          downloadable: false
        },
        {
          title: "Letters from a Stoic",
          author: "Seneca",
          description: "Personal correspondence revealing timeless wisdom.",
          link: "#",
          downloadable: true
        }
      ]
    },
    {
      title: "Understanding & Knowledge",
      books: [
        {
          title: "The Structure of Scientific Revolutions",
          author: "Thomas Kuhn",
          description: "How paradigm shifts transform our understanding of reality.",
          link: "#",
          downloadable: false
        },
        {
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          description: "Insights into how we make decisions and form judgments.",
          link: "#",
          downloadable: false
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-heading mb-4">Library</h1>
          <p className="text-xl text-muted-foreground">
            Curated references and resources that inform and inspire the themes explored on this site.
          </p>
        </header>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl font-heading mb-6 pb-2 border-b border-border">
                {category.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.books.map((book, bookIndex) => (
                  <div key={bookIndex} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-heading mb-2">{book.title}</h3>
                        <p className="text-primary font-medium">{book.author}</p>
                      </div>
                      <div className="flex gap-2">
                        {book.downloadable && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            PDF
                          </span>
                        )}
                        <span className="px-2 py-1 bg-secondary/10 text-secondary-foreground text-xs rounded-full">
                          External
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {book.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <a 
                        href={book.link}
                        className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        View Resource →
                      </a>
                      {book.downloadable && (
                        <a 
                          href={`/downloads/${book.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                        >
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Submission Note */}
        <section className="mt-16 border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-heading mb-4">Suggest a Resource</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Know of a book, paper, or resource that aligns with the themes explored here? 
            I'd love to hear your recommendations.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Send Suggestion
          </a>
        </section>
      </div>
    </div>
  )
}
