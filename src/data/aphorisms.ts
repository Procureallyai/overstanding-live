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
    text: "You do not truly know someone until you have disagreed. Conflict reveals what calm conceals. In peace, we meet the persona. In friction, we meet the principle. Disagreement is not dysfunction. It is revelation. Character is not tested by harmony, but by heat. Watch how someone holds themselves when resisted. Does a mask slip? Does a hidden truth emerge? Do they hold on to resentment? Or do they remain anchored in integrity, empathy, respect and communication? In the fullness of time, with enough data, all is revealed. What remains, stands the test of time. These are leadership qualities that cannot be faked. Crisis does not distort. It distills.",
    author: "Live 📿",
    theme: "Character",
    image: "/images/writings/aphorisms/conflict-reveals-character.jpg",
    date: "2025-08-29",
    slug: "conflict-reveals-character"
  },
  {
    id: 2,
    text: "Some want to lead while waiting for instructions. That is an unholy paradox.",
    author: "Live 📿",
    theme: "Leadership",
    image: "/images/writings/aphorisms/leadership-paradox-instructions.jpg",
    date: "2025-08-29",
    slug: "leadership-paradox"
  },
  {
    id: 3,
    text: "When it comes to love from the neurotypical toward the neurodivergent, too often it is metered. Measured in labour. Priced in convenience. Charged by the hour, like a service rendered. What a tragedy, to witness love reduced to invoice.",
    author: "Live 📿",
    theme: "Love",
    image: "/images/writings/aphorisms/love-metered-invoice.jpg",
    date: "2025-08-29",
    slug: "love-metered-invoice"
  },
  {
    id: 4,
    text: "The Bible ought to be called \"Astrobiblica.\" Framed by the stars. Steeped in the skies. New word alert, by the way.",
    author: "Live 📿",
    theme: "Language",
    image: "/images/writings/aphorisms/astrobiblica-stars.jpg",
    date: "2025-08-29",
    slug: "astrobiblica"
  },
  {
    id: 5,
    text: "Beyond the egos, beyond the personas, beyond the masks we wear—there lies the dust in the wind, and in that dust, the eternal dance of becoming.",
    author: "Live 📿",
    theme: "Identity",
    image: "/images/writings/aphorisms/dust-in-wind-humility.jpg",
    date: "2025-08-28",
    slug: "dust-in-wind"
  },
  {
    id: 6,
    text: "Twice born: once in blood, and then in the fire and ashes of the human experience. Now, a walking tempest yet confined in a bottle.",
    author: "Live 📿",
    theme: "Human Experience",
    image: "/images/writings/aphorisms/twice-born-tempest.jpg",
    date: "2025-08-27",
    slug: "twice-born-tempest"
  },
  {
    id: 7,
    text: "Understanding is not the accumulation of knowledge, but the transformation of perspective.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-12-01",
    slug: "understanding-transformation"
  },
  {
    id: 8,
    text: "Wisdom begins where certainty ends.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-11-15",
    slug: "wisdom-certainty"
  },
  {
    id: 9,
    text: "The deepest truths are often found in the simplest observations.",
    author: "Live 📿",
    theme: "Truth",
    date: "2024-11-01",
    slug: "deepest-truths"
  },
  {
    id: 10,
    text: "To overstand is to rise above the surface and see the patterns beneath.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-10-20",
    slug: "overstand-patterns"
  },
  {
    id: 11,
    text: "Knowledge tells us what is; wisdom tells us what matters.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-10-05",
    slug: "knowledge-wisdom"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
