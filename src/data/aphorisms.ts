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
    text: "When it comes to love from the neurotypical toward the neurodivergent, too often it is metered. Measured in labour. Priced in convenience. Charged by the hour, like a service rendered. What a tragedy, to witness love reduced to invoice.",
    author: "Live 📿",
    theme: "Love",
    image: "/images/writings/aphorisms/love-metered-invoice.jpg",
    date: "2025-08-29",
    slug: "love-metered-invoice"
  },
  {
    id: 2,
    text: "The Bible ought to be called \"Astrobiblica.\" Framed by the stars. Steeped in the skies. New word alert, by the way.",
    author: "Live 📿",
    theme: "Language",
    image: "/images/writings/aphorisms/astrobiblica-stars.jpg",
    date: "2025-08-29",
    slug: "astrobiblica"
  },
  {
    id: 3,
    text: "Beyond the egos, beyond the personas, beyond the masks we wear—there lies the dust in the wind, and in that dust, the eternal dance of becoming.",
    author: "Live 📿",
    theme: "Identity",
    image: "/images/writings/aphorisms/dust-in-wind-humility.jpg",
    date: "2025-08-28",
    slug: "dust-in-wind"
  },
  {
    id: 4,
    text: "Twice born: once in blood, and then in the fire and ashes of the human experience. Now, a walking tempest yet confined in a bottle.",
    author: "Live 📿",
    theme: "Human Experience",
    image: "/images/writings/aphorisms/twice-born-tempest.jpg",
    date: "2025-08-27",
    slug: "twice-born-tempest"
  },
  {
    id: 5,
    text: "Understanding is not the accumulation of knowledge, but the transformation of perspective.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-12-01",
    slug: "understanding-transformation"
  },
  {
    id: 6,
    text: "Wisdom begins where certainty ends.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-11-15",
    slug: "wisdom-certainty"
  },
  {
    id: 7,
    text: "The deepest truths are often found in the simplest observations.",
    author: "Live 📿",
    theme: "Truth",
    date: "2024-11-01",
    slug: "deepest-truths"
  },
  {
    id: 8,
    text: "To overstand is to rise above the surface and see the patterns beneath.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-10-20",
    slug: "overstand-patterns"
  },
  {
    id: 9,
    text: "Knowledge tells us what is; wisdom tells us what matters.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-10-05",
    slug: "knowledge-wisdom"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
