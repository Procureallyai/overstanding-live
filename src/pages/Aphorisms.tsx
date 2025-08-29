import { useState } from 'react'
import { aphorisms } from '@/data/aphorisms'

export function Aphorisms() {
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Calculate pagination
  const totalPages = Math.ceil(aphorisms.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAphorisms = aphorisms.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-heading mb-4">Aphorisms</h1>
          <p className="text-xl text-muted-foreground">
            Concise expressions of wisdom and understanding, ready to share and contemplate.
          </p>
        </header>

        {/* Aphorisms List */}
        <div className="space-y-8">
          {currentAphorisms.map((aphorism, index) => {
            const isLatest = index === 0;
            const hasImage = !!aphorism.image;
            
            if (hasImage) {
              // Image layout for all aphorisms with images
              return (
                <article key={aphorism.id} className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                  <div className={`grid gap-0 ${isLatest ? 'lg:grid-cols-2' : 'md:grid-cols-3'}`}>
                    <div className={`${isLatest ? 'order-2 lg:order-1 p-8' : 'order-2 md:order-1 col-span-2 p-6'} flex flex-col justify-center`}>
                      <div className="mb-6">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                          {isLatest && (
                            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                              Latest
                            </span>
                          )}
                          <time>{new Date(aphorism.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</time>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {aphorism.theme}
                          </span>
                        </div>
                        
                        <blockquote className={`${isLatest ? 'text-2xl lg:text-3xl' : 'text-xl'} leading-relaxed mb-6 text-foreground font-medium`}>
                          "{aphorism.text}"
                        </blockquote>
                        
                        <footer className="flex items-center justify-between">
                          <cite className="text-base text-muted-foreground not-italic">
                            — {aphorism.author}
                          </cite>
                          <button
                            onClick={() => copyToClipboard(aphorism.text, aphorism.id)}
                            className={`flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors ${isLatest ? 'border border-border rounded-md hover:border-primary/50' : 'opacity-0 group-hover:opacity-100'}`}
                          >
                            {copiedId === aphorism.id ? (
                              <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Copied!
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy
                              </>
                            )}
                          </button>
                        </footer>
                      </div>
                    </div>
                    
                    <div className={`${isLatest ? 'order-1 lg:order-2 aspect-[4/5] lg:aspect-auto' : 'order-1 md:order-2 aspect-[4/5]'} overflow-hidden`}>
                      <img 
                        src={aphorism.image} 
                        alt={`Visual representation for: ${aphorism.text.substring(0, 50)}...`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </article>
              );
            }
            
            // Text-only layout for aphorisms without images
            return (
              <article key={aphorism.id} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time>{new Date(aphorism.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</time>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {aphorism.theme}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(aphorism.text, aphorism.id)}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {copiedId === aphorism.id ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-4 text-foreground">
                  "{aphorism.text}"
                </blockquote>
                
                <footer className="flex items-center justify-between">
                  <cite className="text-sm text-muted-foreground not-italic">
                    — {aphorism.author}
                  </cite>
                </footer>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <button 
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:bg-accent'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
