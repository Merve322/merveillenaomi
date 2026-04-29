/* ============================================================
   script.js — Merveille Naomi Portfolio
   Builds the homepage dynamically from PORTFOLIO data
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ── Populate personal details ──────────────────────────────
  document.getElementById('nav-hire').href = 'mailto:' + ME.email;
  document.getElementById('hero-count').textContent = PORTFOLIO.length;
  document.getElementById('hero-tagline').innerHTML = ME.tagline;
  document.getElementById('hero-sub').textContent = ME.subtagline;
  document.getElementById('about-name').innerHTML = ME.name.replace(' ', '<br>');
  document.getElementById('about-bio').textContent = ME.bio;
  document.getElementById('about-cta').href = 'mailto:' + ME.email;
  document.getElementById('stat-spec').textContent = ME.speciality;
  document.getElementById('stat-avail').textContent = ME.availability;
  document.getElementById('stat-loc').textContent = ME.location;
  document.getElementById('stat-markets').textContent = ME.markets;
  document.getElementById('footer-name').textContent = ME.name;
  document.getElementById('footer-loc').textContent = ME.location;

  // ── Work section heading adapts to piece count ────────────
  const count = PORTFOLIO.length;
  const headings = {
    1: 'One piece.<br>One standard.',
    2: 'Two pieces.<br>Two angles.',
    3: 'Three pieces.<br>One API.<br>Every angle.',
    4: 'Four pieces.<br>Multiple APIs.<br>Every angle.',
    5: 'Five pieces.<br>Range and depth.',
  };
  document.getElementById('work-heading').innerHTML = headings[count] || count + ' pieces.<br>Range and depth.';

  // ── Work section description adapts dynamically ───────────
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
  
  document.getElementById('work-desc').textContent =
    `${count} piece${count > 1 ? 's' : ''} covering ${apiText} — including ${typeText}. Each demonstrates a different skill: how I audit existing docs, guide developers end to end, and analyse where integrations break down.`;

  // ── Build work list dynamically ────────────────────────────
  const list = document.getElementById('pieces-list');
  PORTFOLIO.forEach((piece, i) => {
    const row = document.createElement('a');
    row.className = 'piece-row';
    row.href = piece.filename;
    row.innerHTML = `
      <div class="piece-num">${String(i+1).padStart(2,'0')}</div>
      <div class="piece-info">
        <div class="piece-badge">${piece.type}</div>
        <div class="piece-title-main">${piece.title}</div>
        <div class="piece-desc-main">${piece.summary}</div>
        <div class="piece-tags-row">${piece.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
      </div>
      <div class="piece-cta">Read <div class="cta-arrow">→</div></div>
    `;
    list.appendChild(row);
  });

  // ── Build marquee ───────────────────────────────────────────
  const marquee = document.getElementById('marquee');
  const items = [
    'API Documentation','SDK Guides','Developer Experience',
    'Technical Writing','Paystack · Flutterwave · Mono','Stripe · Square · Airwallex',
    'Documentation Audits','Integration Guides','African Fintech','Global Financial Technology',
  ];
  [...items, ...items].forEach((text, i) => {
    const span = document.createElement('span');
    span.className = 'marquee-item' + (i % 2 === 0 ? ' gold' : '');
    span.textContent = text;
    marquee.appendChild(span);
  });

});
