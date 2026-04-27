/* ============================================================
   script.js — Merveille Naomi Portfolio
   Shared scripts across all pages
   ============================================================ */

// ── Marquee builder (used on homepage) ──────────────────────
function buildMarquee() {
  const el = document.getElementById('marquee');
  if (!el) return;
  const items = [
    'API Documentation','SDK Guides','Developer Experience',
    'Technical Writing','Paystack · Flutterwave · Mono',
    'Documentation Audits','Integration Guides','African Fintech'
  ];
  [...items, ...items].forEach((text, i) => {
    const span = document.createElement('span');
    span.className = 'marquee-item' + (i % 2 === 0 ? ' gold' : '');
    span.textContent = text;
    el.appendChild(span);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildMarquee();
});
