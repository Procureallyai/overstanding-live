export function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-heading mb-4">About</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the purpose and philosophy behind Overstanding Live.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-6">The Project</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Overstanding Live is an experiment in exploring the depths of understanding, wisdom, and knowledge. 
                It's a space dedicated to examining what it means to truly comprehend something beyond surface-level awareness.
              </p>
              <p>
                The term "overstanding" suggests rising above mere understanding to gain a broader, more encompassing view—
                seeing patterns, connections, and contexts that might otherwise remain hidden.
              </p>
              <p>
                Through essays, aphorisms, and thematic explorations, this site aims to cultivate deeper insight 
                into the nature of reality, consciousness, and human experience.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-6">Philosophy</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Knowledge tells us what is; wisdom tells us what matters. Understanding bridges the gap between 
                information and insight, transforming raw data into meaningful comprehension.
              </p>
              <p>
                This site operates on the principle that true understanding is not passive consumption but active 
                engagement—questioning assumptions, examining perspectives, and remaining open to transformation.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-6">Approach</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Each piece of content is crafted with intention, focusing on clarity, depth, and practical wisdom. 
                The goal is not to provide definitive answers but to ask better questions and offer frameworks 
                for deeper exploration.
              </p>
              <p>
                The aphorisms serve as concentrated wisdom—brief expressions that capture complex ideas in 
                memorable, shareable form. The essays provide space for more detailed exploration of themes 
                and concepts.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-6">Speaking & Collaboration</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Interested in exploring these themes in conversation? I'm available for speaking engagements, 
                workshops, and collaborative discussions on topics related to understanding, wisdom, and knowledge.
              </p>
              <p>
                <a href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  Get in touch
                </a> to discuss possibilities.
              </p>
            </div>
          </section>


          {/* Signature Section */}
          <section className="mt-16 pt-8 border-t border-border">
            <div className="text-right">
              <div className="inline-block">
                <div className="mb-2">
                  <span className="text-2xl font-cursive text-primary italic">
                    Live F. Livingstone Rowe
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Founder, Overstanding Live
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
