// Work section heading adapts to piece count
const count = PORTFOLIO.length;
const headings = {
  1: 'One piece.<br>One standard.',
  2: 'Two pieces.<br>Two angles.',
  3: 'Three pieces.<br>One API.<br>Every angle.',
  4: 'Four pieces.<br>Multiple APIs.<br>Every angle.',
  5: 'Five pieces.<br>Range and depth.',
};
document.getElementById('work-heading').innerHTML = headings[count] || count + ' pieces.<br>Range and depth.';

// Work section description adapts dynamically from portfolio data
const apis = [...new Set(PORTFOLIO.flatMap(p => p.tags))].filter(t =>
  ['Paystack','Flutterwave','Mono','Kuda','Termii','Stripe','Twilio','OpenWeatherMap'].includes(t)
);
const types = [...new Set(PORTFOLIO.map(p => p.type))];
const apiText = apis.length > 1
  ? apis.slice(0,-1).join(', ') + ' and ' + apis[apis.length-1]
  : apis[0] || 'multiple APIs';
const typeText = types.length > 2
  ? types.slice(0,-1).join(', ').toLowerCase() + ', and ' + types[types.length-1].toLowerCase()
  : types.map(t => t.toLowerCase()).join(' and ');
document.getElementById('section-desc').textContent =
  `${count} piece${count > 1 ? 's' : ''} covering ${apiText} — including ${typeText}. Each demonstrates a different skill: how I audit existing docs, guide developers end to end, and analyse where integrations break down.`;


// ── Marquee builder (used on homepage) ──────────────────────
function buildMarquee() {
  const el = document.getElementById('marquee');
  if (!el) return;
  const items = [
    'API Documentation','SDK Guides','Developer Experience',
    'Technical Writing','Paystack · Flutterwave · Mono','Stripe · Square · Paypal',
    'Documentation Audits','Integration Guides','African Fintech','Global Financial Technology'
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
