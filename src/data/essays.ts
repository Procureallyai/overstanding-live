export interface Essay {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  theme: string
  image?: string
  date: string
  slug: string
  readTime: number
}

export const essays: Essay[] = [
  {
    id: 1,
    title: "Conflict Reveals Character",
    excerpt: "A thought piece on how disagreement exposes what calm conceals, and why friction reveals the principle behind the persona.",
    content: "You do not truly know someone until you have disagreed. Conflict reveals what calm conceals. In peace, we meet the persona. In friction, we meet the principle.\n\nDisagreement is not dysfunction. It is revelation. Character is not tested by harmony, but by heat. Watch how someone holds themselves when resisted.\n\nDoes a mask slip? Does a hidden truth emerge? Do they hold on to resentment? Or do they remain anchored in integrity, empathy, respect and communication?\n\nIn the fullness of time, with enough data, all is revealed. What remains, stands the test of time.\n\nThese are leadership qualities that cannot be faked. Crisis does not distort. It distills.",
    author: "Live 📿",
    theme: "Character",
    image: "/images/writings/aphorisms/conflict-reveals-character.jpg",
    date: "2025-08-29",
    slug: "conflict-reveals-character",
    readTime: 3
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
