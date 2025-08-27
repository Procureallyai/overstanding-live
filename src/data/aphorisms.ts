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
    text: "Twice born: once in blood, and then in the fire and ashes of the human experience. Now, a walking tempest yet confined in a bottle.",
    author: "Live 📿",
    theme: "Human Experience",
    image: "/images/writings/aphorisms/ChatGPT Image Aug 27, 2025, 04_15_26 PM.png",
    date: "2025-08-27",
    slug: "twice-born-tempest"
  },
  {
    id: 2,
    text: "Understanding is not the accumulation of knowledge, but the transformation of perspective.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-12-01",
    slug: "understanding-transformation"
  },
  {
    id: 3,
    text: "Wisdom begins where certainty ends.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-11-15",
    slug: "wisdom-certainty"
  },
  {
    id: 4,
    text: "The deepest truths are often found in the simplest observations.",
    author: "Live 📿",
    theme: "Truth",
    date: "2024-11-01",
    slug: "deepest-truths"
  },
  {
    id: 5,
    text: "To overstand is to rise above the surface and see the patterns beneath.",
    author: "Live 📿",
    theme: "Understanding",
    date: "2024-10-20",
    slug: "overstand-patterns"
  },
  {
    id: 6,
    text: "Knowledge tells us what is; wisdom tells us what matters.",
    author: "Live 📿",
    theme: "Wisdom",
    date: "2024-10-05",
    slug: "knowledge-wisdom"
  }
]
