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
    id: "adyen-checkout-api",
    type: "API Reference & Integration Guide",
    title: "Adyen Checkout API Documentation",
    summary: 
      "A complete API reference and integration guide for the Adyen Checkout API built with OpenAPI 3.0 and rendered with Redocly.",
    intro: 
      "Documents the full Drop-in integration flow for web including session creation, payment methods, card payment processing, and auth-capture flows. Authentication, error codes, and changelog included.",
    tags: ["OpenAPI", "Redocly", "Payments API", "API Reference"],
  },
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
  id: "",
    type: "",
    title: "",
    summary:
      "",
    intro:
      "",
    tags: [""],
  // 2. Paste it AT THE TOP of this array
  // 3. Fill in: id, type, title, summary, intro, tags
  // 4. Add a matching article component under src/components/articles/content
  // 5. Register it in src/pages/pieces/[slug].astro
  // ---------------------------------------------------------
];

export const HOMEPAGE_PIECE_LIMIT = 4;

/** Tags treated as API/product names when generating the work section blurb. */
export const KNOWN_API_TAGS = [
  'Paystack',
  'Flutterwave',
  'Mono',
  'Kuda',
  'Termii',
  'Stripe',
  'Twilio',
  'OpenWeatherMap',
] as const;

/** Dynamic heading and description for the homepage work section (single source of truth). */
export function getWorkSectionCopy(pieces: PortfolioPiece[]) {
  const headings: Record<number, string> = {
    1: 'One piece.<br>One standard.',
    2: 'Two pieces.<br>Two angles.',
    3: 'Three pieces.<br>One API.<br>Every angle.',
    4: 'Four pieces.<br>Multiple APIs.<br>Every angle.',
    5: 'Five pieces.<br>Range and depth.',
  };

  const workHeading =
    headings[pieces.length] ?? `${pieces.length} pieces.<br>Range and depth.`;

  const known = new Set<string>(KNOWN_API_TAGS);
  const apis = [...new Set(pieces.flatMap(p => p.tags))].filter(t => known.has(t));
  const types = [...new Set(pieces.map(p => p.type))];

  const apiText =
    apis.length > 1
      ? `${apis.slice(0, -1).join(', ')} and ${apis[apis.length - 1]}`
      : apis[0] ?? 'multiple APIs';

  const typeText =
    types.length > 2
      ? `${types.slice(0, -1).join(', ').toLowerCase()}, and ${types[types.length - 1].toLowerCase()}`
      : types.map(t => t.toLowerCase()).join(' and ');

  const workDesc = `${pieces.length} piece${pieces.length > 1 ? 's' : ''} covering ${apiText} — including ${typeText}. Each demonstrates a different skill: how I audit existing docs, guide developers end to end, and analyse where integrations break down.`;

  return { workHeading, workDesc };
}

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
