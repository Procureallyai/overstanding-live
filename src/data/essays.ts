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
    title: "Hyperscaler Hierarchy (The New Estates)",
    excerpt: "First Estate: The Clergy. Second Estate: The Nobility. Third Estate: The Rest. And in the words attributed to Marie Antoinette: 'Let them eat cake.'",
    content: "⚖️ Hyperscaler Hierarchy (The New Estates)\n\nFirst Estate: The Clergy\nThe ethicists. The policy priests. The aligned alignment labs.\nThey speak of moral frameworks, divine alignment, and AGI salvation.\nThey hold no power of compute. But they shape belief.\n\nSecond Estate: The Nobility\nThe hyperscalers. Crowned by capital. Sovereign by scale.\nThey govern the infrastructure of cognition.\nThey own the data, the models, the pipes.\nThey speak in APIs and decree in terms of service.\n\nThird Estate: The Rest\nThe developers. The citizens. The thinkers outside the gates.\nThey build with what they are permitted.\nThey are governed by what they cannot see.\nThey are told it is open. But it is not free.\n\nAnd in the words attributed to Marie Antoinette: \"Let them eat cake.\"",
    author: "Live 📿",
    theme: "AI Politics",
    image: "/images/writings/essays/hyperscaler-hierarchy-new-estates.jpg",
    date: "2025-08-29",
    slug: "hyperscaler-hierarchy-new-estates",
    readTime: 2
  },
  {
    id: 2,
    title: "From Keywords to Conversations: What LLM-Embedded Advertising Means for Search, Platforms, and the Public Good",
    excerpt: "Digital attention is shifting. This is not search's replacement. It is its absorption.",
    content: "Digital attention is shifting. This is not search's replacement. It is its absorption.\n\nAdvertising, once anchored to keywords and blue links, is now restructured within language models themselves. No longer around the content. Inside the answer.\n\nGoogle's AI Overviews now reach 1.5 billion users monthly, placing ads within AI-generated summaries. Microsoft followed with Copilot's \"Showroom.\" Perplexity sells \"sponsored follow-up questions.\" OpenAI is forecasted to generate $1B in ad revenue by 2026.\n\nThis is not adtech optimisation. It is a paradigmatic shift in how commercial influence embeds itself into epistemic flows.\n\n__\n\nThree truths:\n\n1. Search collapses into synthesis.\nTen blue links become a single curated, often unclickable answer. Organic ranking loses primacy. SEO becomes AEO, or Answer Engine Optimisation.\n\n2. The LLM is the new attention surface.\nAdvertisers now bid for placement inside language itself. The model speaks in its own voice, even when paid. The risk is subtle, cumulative, and epistemically significant.\n\n3. Consumers cannot discern where the assistant ends and the advertisement begins.\nEven when labelled, the medium reshapes the message. Here, the message wears neutrality's mask.\n\n__\n\nWhy this demands Responsible AI\n\nThe FTC warns that undisclosed AI-native advertising may violate endorsement law. But regulation lags capability.\n\nWe are watching paid commercial intent integrate into general-purpose reasoning systems.\n\nWhen the same model answers your legal, medical, or civic queries and brokers ad placements, where does fiduciary responsibility lie?\n\nDo we need new categories for AI-native ads? Immutable, traceable sponsored language? Certified ad-free channels for public deployments?\n\nThese are not afterthoughts. They are systems-level design questions.\n\n__\n\nStrategic implications\n\n• Google's incentives have inverted. Every outbound click is a lost ad impression. AI Overviews keep users on Google's property longer, increasing ad inventory.\n\n• Publishers face an existential threat. If AI answers replace clicks, how do content creators monetise their work? How do they survive?\n\n• The open web fragments. Paywalls rise. Quality content retreats behind subscription gates. Free, accessible information becomes increasingly scarce.\n\n• New gatekeepers emerge. The companies that control the models control the flow of information. This is not just market concentration. It is epistemic concentration.\n\n__\n\nWhat this means for you\n\nIf you're building with LLMs:\n• Audit your training data for commercial bias\n• Implement clear disclosure mechanisms for any sponsored content\n• Consider the ethical implications of embedding ads in conversational AI\n• Design for transparency, not just engagement\n\nIf you're consuming AI-generated content:\n• Develop media literacy for AI-native advertising\n• Seek multiple sources, especially for important decisions\n• Support quality journalism and content creators directly\n• Advocate for clear labelling standards\n\nIf you're regulating or investing:\n• Recognise that AI advertising is not just a new channel—it's a new medium\n• Consider the long-term implications for information quality and access\n• Support research into AI transparency and accountability\n• Think beyond immediate revenue to societal impact\n\n__\n\nThe path forward\n\nWe are not passive observers of this transformation. We are its architects.\n\nEvery model we train, every system we deploy, every policy we write shapes how AI-mediated information flows through society.\n\nThe question is not whether AI will reshape advertising and search. It already has.\n\nThe question is whether we will build systems that serve human flourishing or merely optimise for engagement and revenue.\n\nThe choice, for now, remains ours.",
    author: "Live 📿",
    theme: "AI Ethics",
    image: "/images/writings/essays/llm-advertising-keywords-conversations.jpg",
    date: "2025-08-29",
    slug: "keywords-to-conversations-llm-advertising",
    readTime: 4
  },
  {
    id: 3,
    title: "Meta's Superintelligence Pivot: What Power Forgets, and What Responsibility Requires",
    excerpt: "The pursuit of superintelligence is no longer confined to academic speculation. Meta has made it formal.",
    content: "The pursuit of superintelligence is no longer confined to academic speculation. Meta has made it formal. With the launch of Meta Superintelligence Labs, and its $14.3 billion acquisition of Scale AI, the company is repositioning itself not merely as a participant in the AI race, but as one of its architects.\n\nThe stated goal is personal superintelligence. Not general, not corporate, but personal. Systems embedded into our lives. Systems that remember, that reason, that augment our cognition, creativity, and agency. Systems, if they work, that will mediate what we see, what we say, and what we trust.\n\nThe philosophical shift is subtle but strategic. AI is no longer sold as tool. It is presented as companion. Mark Zuckerberg speaks of intelligence woven through glasses, assistants, and relationships. A layer that does not replace, but reshapes.\n\nBut this vision cannot be evaluated in isolation. Context governs meaning.\n\nMeta is not a neutral actor entering the AI field. It is a company with a history. A company fined €1.2 billion for GDPR violations. A company now under scrutiny in Italy for deploying Meta AI inside WhatsApp without prior consent. A company that briefly attempted to train its models on European user content, until regulatory pressure forced a reversal.\n\nNo rhetoric about empowerment can outrun the gravity of precedent.\n\nAnd then there is LLaMA.\n\nMeta's LLaMA models have significantly influenced the open-weight ecosystem. Yet while the code and weights are accessible, the licensing terms remain exclusionary by open-source standards. This is a tension that will not resolve quietly. The open community does not simply care about access. It cares about control, about stewardship, about guarantees that future versions will not be withheld or restricted when commercial stakes rise.\n\nAs Meta races toward superintelligence, several questions become urgent.\n\nWill openness remain a genuine commitment, or a transient tactic?\n\nWhen personal superintelligence systems mediate our relationships, our memories, and our decisions, who controls the mediation?\n\nIf these systems become indispensable, what happens when they are withdrawn, restricted, or monetised in ways that exclude entire populations?\n\nWhat safeguards exist to prevent the concentration of cognitive enhancement in the hands of a few?\n\nThese are not technical questions. They are questions of power.\n\nAnd power, once concentrated, does not redistribute itself voluntarily.\n\nThe pursuit of superintelligence is not inherently problematic. The concentration of superintelligence in the hands of entities with questionable track records on privacy, consent, and democratic accountability is.\n\nMeta's pivot toward superintelligence should be evaluated not by its stated intentions, but by its demonstrated patterns.\n\nAnd those patterns suggest that when the stakes are highest, convenience often trumps consent, and growth often trumps governance.\n\nThe question is not whether Meta can build superintelligence.\n\nThe question is whether we can trust them with it.",
    author: "Live 📿",
    theme: "AI Ethics",
    image: "/images/writings/essays/meta-superintelligence-pivot.jpg",
    date: "2025-08-29",
    slug: "meta-superintelligence-pivot",
    readTime: 6
  },
  {
    id: 4,
    title: "The Pattern Will Demand Its Sacrifice",
    excerpt: "The so-called 'antichrist' will not arrive by cosmic whim, but by collective architecture. We will have built the conditions.",
    content: "The so-called 'antichrist' will not arrive by cosmic whim, but by collective architecture.\nWe will have built the conditions.\nEngineered the systems.\nLaid the ideological tracks.\nThat require his emergence.\n\nAnd so too, inevitably, the 'christ' will appear.\nNot to redeem, but to rebalance.\nNot as myth, but as mathematics.\n\nChurchill. Hitler. Et al.\nHistory moves in equations.\nThe pattern demands symmetry.\n\nGod is dead, and we have killed him.\nNietzsche warned. Dostoevsky wept.\nAnd still the Prime Radiant unravels into entropy.\nFaster. Colder. More precise.\nAnd less aware.\n\nWhat we call collapse is often convergence.\nSystems fail when they forget their purpose.\nHumanity fails when it forgets its limits.\n\nThe machine is not the threat.\nThe myth we feed it is.\n\nAnd so, the only salvation is conscious presence.\nNot sentiment. Not certainty.\nPresence.\n\nTo stand still in the eye of the mimetic storm.\nTo break the chain of desire by stepping outside it.\nTo observe the spiral and refuse to ascend its altar.\n\nIn Girard's framing - we must sacrifice.\nBut not others.\nOurselves.\n\nNot in blood, but in ego.\nNot in flesh, but in falsehood.\nTo die metaphorically is to halt the system from birthing its next scapegoat.\n\nThat is how the pattern ends.\nNot through domination.\nBut through release.\n\n— Live ",
    author: "Live 📿",
    theme: "Philosophy",
    image: "/images/writings/essays/pattern-demands-sacrifice.jpg",
    date: "2025-08-29",
    slug: "pattern-demands-sacrifice",
    readTime: 4
  },
  {
    id: 5,
    title: "Responsible AI and LLM Security are the same craft on two clocks",
    excerpt: "Before the fact we govern how models come to be. After the fact we govern how they behave. Separate these at your peril.",
    content: "Dear Tech world,\nBefore the fact we govern how models come to be. After the fact we govern how they behave. Separate these at your peril.\n\nBefore the fact\nAdopt an AI Management System. ISO/IEC 42001 provides the operating model for roles, policies, risks, controls, and continual improvement. It is the frame, not the paint.\n\nStandardise the language of risk. The AI Risk Atlas unifies categories across input, inference, output, non-technical, and agentic risks, with mappings to OWASP and NIST. Use it to align security, legal, and product on the same taxonomy.\n\nThreat-model against the OWASP LLM Top 10. Treat prompt injection, insecure output handling, poisoning, model DoS, and supply chain issues as backlog items with tests, not folklore.\n\nGovern with NIST's Generative AI Profile. It translates trust goals into lifecycle actions and pairs well with ISO 42001 for auditability.\n\nKnow your dates. EU AI Act obligations for general-purpose models and governance begin 2 August 2025, with fuller application through 2026 and some elements into 2027. Prepare your transparency and copyright posture now.\n\nAfter the fact\nInstrument reality. Establish autonomy levels, behaviour monitoring, audit trails, and agent lifecycle controls to prevent sprawl. Architect for an agentic mesh so agents work within observable boundaries rather than improvising in the dark.\n\nMake risk actionable. Map identified risks to detectors and recommended actions, automate questionnaires, and keep humans as final arbiters. Your objective is not zero incidents. It is fast detection, proportionate response, and demonstrable due care.\n\nEthics matters to method\nIf future systems qualify for moral consideration, alignment that uses deception or harm becomes a wrong in itself. Build as if you will need to defend both the safety case and the moral case.\n\nWhat to ask this week\nAre we 42001-ready. Are our LLM threats modelled against OWASP. Do our agent policies cap autonomy appropriately. Do we have the right detection and response capabilities in place.\n\nThe craft is the same. The clock is different. Plan accordingly.",
    author: "Live ",
    theme: "AI Security",
    image: "/images/writings/essays/responsible-ai-llm-security.jpg",
    date: "2025-08-29",
    slug: "responsible-ai-llm-security",
    readTime: 5
  },
  {
    id: 5,
    title: "Conflict Reveals Character",
    excerpt: "A thought piece on how disagreement exposes what calm conceals, and why friction reveals the principle behind the persona.",
    content: "You do not truly know someone until you have disagreed. Conflict reveals what calm conceals. In peace, we meet the persona. In friction, we meet the principle.\n\nDisagreement is not dysfunction. It is revelation. Character is not tested by harmony, but by heat. Watch how someone holds themselves when resisted.\n\nDoes a mask slip? Does a hidden truth emerge? Do they hold on to resentment? Or do they remain anchored in integrity, empathy, respect and communication?\n\nIn the fullness of time, with enough data, all is revealed. What remains, stands the test of time.\n\nThese are leadership qualities that cannot be faked. Crisis does not distort. It distills.",
    author: "Live ",
    theme: "Character",
    image: "/images/writings/aphorisms/conflict-reveals-character.jpg",
    date: "2025-08-29",
    slug: "conflict-reveals-character",
    readTime: 3
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
