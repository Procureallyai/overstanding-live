import { useState } from 'react'

export function Aphorisms() {
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const aphorisms = [
    {
      id: 1,
      text: "Understanding is not the accumulation of knowledge, but the transformation of perspective.",
      theme: "Understanding"
    },
    {
      id: 2,
      text: "Wisdom begins where certainty ends.",
      theme: "Wisdom"
    },
    {
      id: 3,
      text: "The deepest truths are often found in the simplest observations.",
      theme: "Truth"
    },
    {
      id: 4,
      text: "To overstand is to rise above the surface and see the patterns beneath.",
      theme: "Understanding"
    },
    {
      id: 5,
      text: "Knowledge tells us what is; wisdom tells us what matters.",
      theme: "Wisdom"
    }
  ]

  const filteredAphorisms = aphorisms.filter(aphorism =>
    aphorism.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aphorism.theme.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
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

        {/* Search */}
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search aphorisms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Aphorisms List */}
        <div className="space-y-6">
          {filteredAphorisms.map((aphorism) => (
            <div key={aphorism.id} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <blockquote className="text-lg leading-relaxed mb-4 text-foreground">
                    "{aphorism.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {aphorism.theme}
                    </span>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAphorisms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No aphorisms found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
