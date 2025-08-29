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
    title: "Responsible AI and LLM Security are the same craft on two clocks",
    excerpt: "Before the fact we govern how models come to be. After the fact we govern how they behave. Separate these at your peril.",
    content: "Dear Tech world,\nBefore the fact we govern how models come to be. After the fact we govern how they behave. Separate these at your peril.\n\nBefore the fact\nAdopt an AI Management System. ISO/IEC 42001 provides the operating model for roles, policies, risks, controls, and continual improvement. It is the frame, not the paint.\n\nStandardise the language of risk. The AI Risk Atlas unifies categories across input, inference, output, non-technical, and agentic risks, with mappings to OWASP and NIST. Use it to align security, legal, and product on the same taxonomy.\n\nThreat-model against the OWASP LLM Top 10. Treat prompt injection, insecure output handling, poisoning, model DoS, and supply chain issues as backlog items with tests, not folklore.\n\nGovern with NIST's Generative AI Profile. It translates trust goals into lifecycle actions and pairs well with ISO 42001 for auditability.\n\nKnow your dates. EU AI Act obligations for general-purpose models and governance begin 2 August 2025, with fuller application through 2026 and some elements into 2027. Prepare your transparency and copyright posture now.\n\nAfter the fact\nInstrument reality. Establish autonomy levels, behaviour monitoring, audit trails, and agent lifecycle controls to prevent sprawl. Architect for an agentic mesh so agents work within observable boundaries rather than improvising in the dark.\n\nMake risk actionable. Map identified risks to detectors and recommended actions, automate questionnaires, and keep humans as final arbiters. Your objective is not zero incidents. It is fast detection, proportionate response, and demonstrable due care.\n\nEthics matters to method\nIf future systems qualify for moral consideration, alignment that uses deception or harm becomes a wrong in itself. Build as if you will need to defend both the safety case and the moral case.\n\nWhat to ask this week\nAre we 42001-ready. Are our LLM threats modelled against OWASP. Do our agent policies cap autonomy and prevent sprawl. Can we evidence NIST-aligned actions. Are we prepared for the EU timeline.\n\nSecurity without responsibility is brittle. Responsibility without security is theatre. Practise one craft, on two clocks.",
    author: "Live 📿",
    theme: "AI Security",
    image: "/images/writings/essays/responsible-ai-llm-security.jpg",
    date: "2025-08-29",
    slug: "responsible-ai-llm-security",
    readTime: 5
  },
  {
    id: 2,
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
