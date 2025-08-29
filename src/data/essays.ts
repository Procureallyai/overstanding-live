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
    title: "Meta's Superintelligence Pivot: What Power Forgets, and What Responsibility Requires",
    excerpt: "The pursuit of superintelligence is no longer confined to academic speculation. Meta has made it formal.",
    content: "The pursuit of superintelligence is no longer confined to academic speculation. Meta has made it formal. With the launch of Meta Superintelligence Labs, and its $14.3 billion acquisition of Scale AI, the company is repositioning itself not merely as a participant in the AI race, but as one of its architects.\n\nThe stated goal is personal superintelligence. Not general, not corporate, but personal. Systems embedded into our lives. Systems that remember, that reason, that augment our cognition, creativity, and agency. Systems, if they work, that will mediate what we see, what we say, and what we trust.\n\nThe philosophical shift is subtle but strategic. AI is no longer sold as tool. It is presented as companion. Mark Zuckerberg speaks of intelligence woven through glasses, assistants, and relationships. A layer that does not replace, but reshapes.\n\nBut this vision cannot be evaluated in isolation. Context governs meaning.\n\nMeta is not a neutral actor entering the AI field. It is a company with a history. A company fined €1.2 billion for GDPR violations. A company now under scrutiny in Italy for deploying Meta AI inside WhatsApp without prior consent. A company that briefly attempted to train its models on European user content, until regulatory pressure forced a reversal.\n\nNo rhetoric about empowerment can outrun the gravity of precedent.\n\nAnd then there is LLaMA.\n\nMeta's LLaMA models have significantly influenced the open-weight ecosystem. Yet while the code and weights are accessible, the licensing terms remain exclusionary by open-source standards. This is a tension that will not resolve quietly. The open community does not simply care about access. It cares about control, about stewardship, about guarantees that future versions will not be withheld or restricted when commercial stakes rise.\n\nAs Meta races toward superintelligence, several questions become urgent.\n\nWill openness remain a genuine commitment, or a transient tactic?\n\nWill the personal AI it envisions be agent of the user, or instrument of the platform?\n\nWill responsible deployment frameworks be shaped before release, or patched in hindsight?\n\nThere is no innovation without consequence. No intelligence without alignment. No trust without governance.\n\nTo build personal superintelligence is not just to build a model. It is to build a new kind of infrastructure. One that touches cognition, memory, autonomy. And whatever is built, will reflect the assumptions behind it.\n\nIf Meta is to lead this transition, it must do so with more than ambition. It must lead with restraint, with rigour, and with responsibility. That means meaningful transparency. That means participatory oversight. That means consent that is not just legal, but informed and revocable.\n\nThe future will not be shaped by those who scale the fastest. It will be shaped by those who earn trust, and keep it.",
    author: "Live 📿",
    theme: "AI Ethics",
    image: "/images/writings/essays/meta-superintelligence-pivot.jpg",
    date: "2025-08-29",
    slug: "meta-superintelligence-pivot",
    readTime: 6
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
