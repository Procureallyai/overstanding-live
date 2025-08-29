export interface Aphorism {
  id: number
  text: string
  author: string
  theme: string
  image?: string
  date: string
  slug: string
}

export const aphorisms: Aphorism[] = [
  {
    id: 1,
    text: "A wounded lion in the jungle: unmistakably out of place. Rastafari! Displacement wounds not only the flesh, but the order of things.",
    author: "Live 📿",
    theme: "Displacement",
    image: "/images/writings/aphorisms/wounded-lion-jungle.jpg",
    date: "2025-08-29",
    slug: "wounded-lion-jungle"
  },
  {
    id: 2,
    text: "Mt Sinai derives from \"Sin,\" the ancient moon deity worshipped in Ur and Harran. In this reading, Sinai means mountain of Sin. In the age of algorithms, check the logic: Sin AI. Repent. We have released our own destruction. Just a paragraph from some fiction I'm writing ✍🏽",
    author: "Live 📿",
    theme: "Mythology",
    image: "/images/writings/aphorisms/sinai-sin-ai.jpg",
    date: "2025-08-29",
    slug: "sinai-sin-ai"
  },
  {
    id: 3,
    text: "I wonder if heaven has a ghetto. If class and caste trail the soul beyond death. If salvation, too, is segregated, And the sheeple drift in obedient purgatory. I'll take my portion now. I've no patience for nirvana.",
    author: "Jah Live 📿",
    theme: "Spirituality",
    image: "/images/writings/aphorisms/heaven-has-ghetto.jpg",
    date: "2025-08-29",
    slug: "heaven-has-ghetto"
  },
  {
    id: 4,
    text: "Ah, the Age of Aquarius. Knowledge pours. Algorithms rise. The waters of knowing flood the circuits of the mind, Ushering in the age of AI. What a time to be alive.",
    author: "Live 📿",
    theme: "Technology",
    image: "/images/writings/aphorisms/age-of-aquarius-ai.jpg",
    date: "2025-08-29",
    slug: "age-of-aquarius-ai"
  },
  {
    id: 5,
    text: "Perch lightly. When the branch gives, move.",
    author: "Live 📿",
    theme: "Adaptability",
    image: "/images/writings/aphorisms/perch-lightly-bird.jpg",
    date: "2025-08-29",
    slug: "perch-lightly"
  },
  {
    id: 6,
    text: "Some want to lead while waiting for instructions. That is an unholy paradox.",
    author: "Live 📿",
    theme: "Leadership",
    image: "/images/writings/aphorisms/leadership-paradox-instructions.jpg",
    date: "2025-08-29",
    slug: "leadership-paradox"
  },
  {
    id: 7,
    text: "When it comes to love from the neurotypical toward the neurodivergent, too often it is metered. Measured in labour. Priced in convenience. Charged by the hour, like a service rendered. What a tragedy, to witness love reduced to invoice.",
    author: "Live 📿",
    theme: "Love",
    image: "/images/writings/aphorisms/love-metered-invoice.jpg",
    date: "2025-08-29",
    slug: "love-metered-invoice"
  },
  {
    id: 8,
    text: "The Bible ought to be called \"Astrobiblica.\" Framed by the stars. Steeped in the skies. New word alert, by the way.",
    author: "Live 📿",
    theme: "Language",
    image: "/images/writings/aphorisms/astrobiblica-stars.jpg",
    date: "2025-08-29",
    slug: "astrobiblica"
  },
  {
    id: 9,
    text: "Beyond the egos, beyond the personas, beyond the masks we wear—there lies the dust in the wind, and in that dust, the eternal dance of becoming.",
    author: "Live 📿",
    theme: "Identity",
    image: "/images/writings/aphorisms/dust-in-wind-humility.jpg",
    date: "2025-08-28",
    slug: "dust-in-wind"
  },
  {
    id: 10,
    text: "Twice born: once in blood, and then in the fire and ashes of the human experience. Now, a walking tempest yet confined in a bottle.",
    author: "Live 📿",
    theme: "Human Experience",
    image: "/images/writings/aphorisms/twice-born-tempest.jpg",
    date: "2025-08-27",
    slug: "twice-born-tempest"
  },
  {
    id: 11,
    text: "Understanding is not the accumulation of knowledge, but the transformation of perspective.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-12-01",
    slug: "understanding-transformation"
  },
  {
    id: 12,
    text: "Wisdom begins where certainty ends.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-11-15",
    slug: "wisdom-certainty"
  },
  {
    id: 13,
    text: "The deepest truths are often found in the simplest observations.",
    author: "Live 📿",
    theme: "Truth",
    date: "2024-11-01",
    slug: "deepest-truths"
  },
  {
    id: 14,
    text: "To overstand is to rise above the surface and see the patterns beneath.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-10-20",
    slug: "overstand-patterns"
  },
  {
    id: 15,
    text: "Knowledge tells us what is; wisdom tells us what matters.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-10-05",
    slug: "knowledge-wisdom"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
