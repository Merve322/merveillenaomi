// ============================================================
// PORTFOLIO DATA — Single source of truth
// ============================================================

export interface PortfolioPiece {
  id: string;
  type: string;
  title: string;
  summary: string;
  intro: string;         // Shown on the article detail header
  tags: string[];
}

export const PORTFOLIO: PortfolioPiece[] = [
  // ── Add new pieces at the TOP so latest work shows first ──
  {
    id: "paystack-where-developers-get-stuck",
    type: "Developer experience analysis",
    title: "Where Developers Get Stuck in Paystack's Payment Flow (And How to Fix It)",
    summary:
      "A diagnosis of the exact moment developers misread the flow as complete, and concrete structural fixes to prevent it.",
    intro:
      "A diagnosis of the exact moment developers misread the Paystack flow as complete, and the structural fixes that prevent it.",
    tags: ["Paystack", "DX analysis", "Documentation critique"],
  },
  {
    id: "paystack-complete-flow",
    type: "End-to-end guide",
    title: "Understanding the Complete Payment Flow with Paystack API",
    summary:
      "A sequential walkthrough of the full payment lifecycle, written so every step connects clearly to the next.",
    intro:
      "The complete Paystack payment flow is presented in sequence in this guide, so developers can see and understand how each step connects.",
    tags: ["Paystack", "Developer guide", "Integration flow"],
  },
  {
    id: "paystack-before-after",
    type: "Documentation audit",
    title: "Paystack API — Before → After Documentation Fix",
    summary:
      "Five critical failures in Paystack's official Initialise documentation, identified, diagnosed, and rewritten for developer clarity.",
    intro:
      "The Initialise section of the Paystack API website has several issues that are addressed, and solutions proposed.",
    tags: ["Paystack", "REST API", "Audit & rewrite"],
  },
  // ── TO ADD A NEW PIECE ────────────────────────────────────
  // 1. Copy one object above (everything between { and })
  // 2. Paste it AT THE TOP of this array
  // 3. Fill in: id, type, title, summary, intro, tags
  // 4. Add a matching article component under src/components/articles/content
  // 5. Register it in src/pages/pieces/[slug].astro
  // ---------------------------------------------------------
];

export const HOMEPAGE_PIECE_LIMIT = 4;

export const ME = {
  name: "Merveille Naomi",
  email: "njikoumerveille@gmail.com",
  tagline: "Docs developers<br><em>understand<br>and build with.</em>",
  subtagline:
    "I write API and SDK documentation that reduces integration time, lowers support burden, and earns developer trust, for African and global tech companies.",
  bio: "I'm a technical writer specialising in API and SDK documentation for developer-facing products. My work focuses on the gap between how an API works and how a developer actually understands it, reducing integration time and support overhead for engineering teams across Africa and beyond.",
  availability: "Open to freelance projects — immediate start",
  location: "Abuja, Nigeria · Available remotely worldwide",
  speciality: "API documentation · SDK guides · Developer experience audits",
  markets: "African fintech · Global API-first companies",
};
