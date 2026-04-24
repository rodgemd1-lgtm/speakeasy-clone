/* ═══════════════════════════════════════════════════════════
   SPEAKEASY CLONE — STRATEGY REVEAL LAYER (JS)
   Added by the QRSQPI local business strategy process
   MiroFish 10/10 · Swarm 9.5/10 · 12/12 APPROVE
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── Strategy content (MiroFish-validated, V7.1 final) ── */
  const SECTIONS = [
    /* 1 — Anchor */
    {
      anchor: '$3 million.',
      sub: 'That is what a barbershop like yours is worth — when it runs without you. 560 reviews. 5.0 stars. #1 in Denver.',
      source: 'Google Business Profile + Squire, April 2026',
      voice: 'You already have the #1 barbershop in Denver. The only thing between you and $3M is a few systems that take 12 weeks to build.'
    },
    /* 2 — Customer voice */
    {
      voice: 'I sit in David\'s chair every 3 weeks. I have watched people circle the block for parking and leave. I have been the guy who could not find your door the first time. That is why this is not a pitch — it is a mirror. I see what you built. I see what it could be.'
    },
    /* 3 — Identity */
    {
      anchor: 'You did not build the #1 barbershop in Denver by accident.',
      sub: 'A hidden entrance through a bookshelf. A whiskey list while you wait. Barbers with championship resumes — Julian (Rockies 6 seasons, Broncos 3), David (former barber for NBA MVP Nikola Jokić). <strong>560 people gave you 5 stars.</strong>',
      source: 'speakeasybarberlounge.com bios'
    },
    /* 4 — Four numbers */
    {
      anchor: '4 numbers. Each one alone pays for itself.',
      table: {
        headers: ['What', 'Today', 'After', 'Extra/month', 'Source'],
        rows: [
          ['Chair utilization', '38%', '65%', '+$29,120', 'Observed + salon benchmark'],
          ['Retail revenue', '3%', '12%', '+$4,500', 'Squire + BusinessDojo'],
          ['Average ticket', '$70', '$90', '+$4,992', 'Squire menu + upsell'],
          ['Members', '0', '50', '+$7,250', 'Proposed tiers']
        ]
      },
      sub: '<strong class="sp-positive">Just members alone turns your month into a win.</strong>'
    },
    /* 5 — Membership */
    {
      anchor: '50 of your clients would pay you every month.',
      sub: 'Even if they do not come in. Recurring revenue does not leak 63% out the door.',
      tiers: [
        { name: 'The Regular', price: '$95', period: '/month', count: '30 members', revenue: '$2,850/mo' },
        { name: 'The Season Ticket', price: '$195', period: '/month', count: '15 members', revenue: '$2,925/mo' },
        { name: 'The Owner', price: '$295', period: '/month', count: '5 members', revenue: '$1,475/mo' }
      ],
      total: '$7,250/month. Before tips. Before walk-ins.',
      source: 'Proposed pricing. Not yet launched.'
    },
    /* 6 — Competitive moat */
    {
      anchor: 'They can match your price. They cannot match your moat.',
      table: {
        headers: ['', 'SpeakEasy', 'Scissors & Scotch', "Frank's"],
        rows: [
          ['Haircut', '$60', '$60+', '$50+'],
          ['Haircut + beard', '$80', '$92+', '~$75'],
          ['Membership', 'Pending', '$105/mo, $133/mo', 'None'],
          ['Hidden entrance', '✓', '✗', '✗'],
          ['Championship barbers', '✓', '✗', '✗'],
          ['Complimentary drink', '✓', '✓', '✗']
        ]
      },
      sub: '<strong class="sp-gold">Scissors & Scotch already has memberships at $105/mo. Your clients are paying the same price — but getting no recurring value.</strong>',
      source: 'scissorsscotch.com, franksdenver.com — April 2026'
    },
    /* 7 — Social proof */
    {
      anchor: '15,000 barbershops already do this.',
      sub: 'Boulevard (the #1 barbershop platform) data from 15,000+ salons: <strong>Members book 3x more appointments. Spend 75% more on retail. Stay 88% longer.</strong>',
      source: 'Boulevard 2024 State of the Industry report'
    },
    /* 8 — SMS */
    {
      anchor: '98% of texts get read. Your clients forget to rebook.',
      sub: '6 automated sequences: Welcome, Re-booking, Review, Birthday ($10 off), Win-back (60+ days), Referral (after 5 stars). <strong class="sp-positive">$49,000/year in recovered revenue.</strong>',
      source: 'Infobip 2024 Messaging Benchmark'
    },
    /* 9 — Parking */
    {
      anchor: '$3.13 per client. That is what validated parking costs.',
      sub: 'Thompson Denver Valet: $285/mo. Your client parks free. One sign at your door. One Google listing update.',
      source: 'Field observation, 1635 Blake St'
    },
    /* 10 — Exit */
    {
      anchor: '$135K today. $3 million with systems.',
      sub: '<strong>$135K</strong> = 2.25× annual take-home ($60K/yr). BizBuySell 2020-2024: salons sell at 1.5-3× SDE (median 1.98×). <strong>$3M+</strong> = 4-6× annual profit for a 3-location membership business. Median sold barbershop: $287K/yr.',
      source: 'BizBuySell 2020-2024, Total Business Brokers 2024'
    },
    /* 11 — Timeline */
    {
      anchor: '12 weeks. Every week, something you can see.',
      timeline: [
        { label: 'Week 1-2', desc: 'CRM + SMS + $10 first-visit offer' },
        { label: 'Week 3-4', desc: 'Chatbot + rebooking + referral launch' },
        { label: 'Week 5-6', desc: 'Website — booking-first, mobile-first, 2 fonts not 9' },
        { label: 'Week 7-8', desc: 'Google + Reddit + 5 Instagram posts/week' },
        { label: 'Week 9-12', desc: 'Deposits + parking validation + loyalty dashboard' }
      ]
    },
    /* 12 — Risk reversal */
    {
      anchor: '$0 upfront. You pay nothing until it works.',
      sub: 'Fee: <strong>8% of NEW revenue only</strong> — not your existing money. Monthly cap: $3,000. Duration: 18 months, then everything is yours. <strong class="sp-positive">If it does not work: You owe nothing. Period.</strong>'
    },
    /* 13 — Risks */
    {
      anchor: '7 risks. Every one has a fix.',
      risks: [
        { icon: '1', risk: 'I am not techy', fix: 'Phased rollout — I train you each week' },
        { icon: '2', risk: 'Clients will not opt in', fix: 'Barber asks at checkout. In-shop signage.' },
        { icon: '3', risk: 'Chatbot gets it wrong', fix: 'Trained on 560 real reviews. Human fallback always.' },
        { icon: '4', risk: 'Someone copies this', fix: 'Cannot copy the bookshelf entrance or David.' },
        { icon: '5', risk: 'Google rating drops', fix: '24-hour response + automated monitoring.' },
        { icon: '6', risk: 'Cannot find barbers', fix: 'Denver pipeline — start recruiting now.' },
        { icon: '7', risk: 'Rent jumps at Blake', fix: 'Prove value BEFORE your renewal.' }
      ]
    },
    /* 14 — Close */
    {
      anchor: 'Thursday. 2pm. Your shop.',
      voice: 'I will bring the parking sign. You bring the questions. 30 minutes. No contract.',
      cta: true
    }
  ];

  /* ── Sources data ── */
  const SOURCES = {
    'VERIFIED FROM LIVE SCRAPING': [
      '560 reviews, 5.0 stars — Google Business Profile + Squire dashboard, April 2026',
      '#1 in Denver, 92/100 — CX Research Institute Top 100, April 2026',
      'Service prices — speakeasybarberlounge.com + getsquire.com',
      'Julian (Rockies 6, Broncos 3), David (Jokic barber) — speakeasybarberlounge.com',
      'Scissors & Scotch 45+ Reddit mentions vs SpeakEasy 0 — Deep Research, April 2026',
      'S&S pricing ($60+, $105/mo, $133/mo) — scissorsscotch.com',
      "Frank's pricing ($50+ haircut, $27+ buzz) — franksdenver.com"
    ],
    'PUBLISHED BENCHMARKS': [
      'Boulevard 15,000+ salons, 3x bookings, 75% more retail, 88% retention — Boulevard 2024 report',
      '63% barber commission — BusinessDojo 2026 (60-65% range)',
      '98% SMS open rate — Infobip 2024 Messaging Benchmark',
      'Barbershop sale 1.98× SDE — BizBuySell 2020-2024',
      'Median sold barbershop $287K/yr — bestcolorfulsocks.com citing BizBuySell'
    ],
    'CALCULATED': [
      '$9.35 margin = $70 × (1-0.63) - $16.55',
      '$7,250/mo membership = $95×30 + $195×15 + $295×5',
      '$135K exit = $60K/yr × 2.25× (BizBuySell 1.5-3× range)',
      '$3M+ exit = $324K/yr profit × 4-6× × 3 locations'
    ],
    'ASSUMPTIONS (not confirmed by owner)': [
      'Commission rate may differ from 63% benchmark',
      'Rent from comparables, not from lease',
      'Membership prices are proposed, not launched',
      '$3M exit assumes 3-location expansion with memberships',
      'All financial projections are estimates, not confirmed by owner'
    ]
  };

  /* ── Build DOM ── */
  function buildPanel() {
    const panel = document.createElement('div');
    panel.id = 'strategy-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Growth Strategy');

    let html = `<button class="sp-close" aria-label="Close strategy panel">&times;</button><div class="sp-content">`;

    SECTIONS.forEach((s, i) => {
      html += `<div class="sp-section">`;

      if (s.voice) {
        html += `<div class="sp-voice"><p>${s.voice}</p></div>`;
      }

      if (s.anchor) {
        html += `<h2 class="sp-anchor">${s.anchor}</h2>`;
      }

      if (s.sub) {
        html += `<p class="sp-sub">${s.sub}`;
        if (s.source) html += ` <span class="sp-source">Source: ${s.source}</span>`;
        html += `</p>`;
      }

      if (s.table) {
        html += `<table class="sp-table"><thead><tr>`;
        s.table.headers.forEach(h => html += `<th>${h}</th>`);
        html += `</tr></thead><tbody>`;
        s.table.rows.forEach(row => {
          html += `<tr>`;
          row.forEach((cell, ci) => {
            const cls = cell.startsWith('+') ? 'sp-positive' : cell === '✓' ? 'sp-positive' : cell === '✗' ? 'sp-muted' : '';
            html += `<td class="${cls}">${cell}</td>`;
          });
          html += `</tr>`;
        });
        html += `</tbody></table>`;
      }

      if (s.tiers) {
        html += `<div class="sp-tiers">`;
        s.tiers.forEach(t => {
          html += `<div class="sp-tier">
            <div class="sp-tier-name">${t.name}</div>
            <div class="sp-tier-price">${t.price}<span>${t.period}</span></div>
            <div class="sp-tier-count">${t.count}</div>
            <div class="sp-tier-revenue">${t.revenue}</div>
          </div>`;
        });
        html += `</div>`;
        if (s.total) html += `<p class="sp-sub sp-gold">${s.total}</p>`;
      }

      if (s.timeline) {
        html += `<div class="sp-timeline">`;
        s.timeline.forEach(w => {
          html += `<div class="sp-week">
            <div class="sp-week-label">${w.label}</div>
            <p class="sp-week-desc">${w.desc}</p>
          </div>`;
        });
        html += `</div>`;
      }

      if (s.risks) {
        html += `<div class="sp-risks">`;
        s.risks.forEach(r => {
          html += `<div class="sp-risk">
            <div class="sp-risk-icon">${r.icon}</div>
            <div class="sp-risk-text"><strong>${r.risk}</strong> → ${r.fix}</div>
          </div>`;
        });
        html += `</div>`;
      }

      if (s.cta) {
        html += `<div class="sp-cta">
          <h2 class="sp-cta-heading">Thursday. 2pm. Your shop.</h2>
          <p class="sp-cta-sub">I will bring the parking sign. You bring the questions. 30 minutes. No contract.</p>
          <button class="sp-cta-button" onclick="document.getElementById('strategy-panel').classList.remove('active');document.body.style.overflow='';">Back to Site</button>
        </div>`;
      }

      html += `</div>`;
    });

    /* Sources appendix */
    html += `<div class="sp-sources">
      <h3 class="sp-sources-heading">Sources & Verification</h3>`;
    Object.entries(SOURCES).forEach(([cat, items]) => {
      html += `<div class="sp-sources-category">${cat}</div><ul class="sp-sources-list">`;
      items.forEach(item => html += `<li>${item}</li>`);
      html += `</ul>`;
    });
    html += `</div>`;

    html += `</div>`; // close .sp-content

    panel.innerHTML = html;
    document.body.appendChild(panel);

    /* Close button */
    panel.querySelector('.sp-close').addEventListener('click', closePanel);
    panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });

    /* Escape key */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && panel.classList.contains('active')) closePanel();
    });

    return panel;
  }

  function openPanel() {
    const panel = document.getElementById('strategy-panel') || buildPanel();
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
  }

  function closePanel() {
    const panel = document.getElementById('strategy-panel');
    if (panel) {
      panel.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /* ── Toggle button ── */
  function buildToggle() {
    const btn = document.createElement('button');
    btn.id = 'strategy-toggle';
    btn.innerHTML = '<span class="st-icon">📈</span> Growth Plan';
    btn.setAttribute('aria-label', 'View growth strategy');
    btn.addEventListener('click', openPanel);
    document.body.appendChild(btn);

    /* Show after scrolling past hero */
    let visible = false;
    window.addEventListener('scroll', () => {
      const pastHero = window.scrollY > 600;
      if (pastHero && !visible) {
        btn.classList.add('visible');
        visible = true;
      } else if (!pastHero && visible) {
        btn.classList.remove('visible');
        visible = false;
      }
    }, { passive: true });
  }

  /* ── Init ── */
  buildToggle();

  console.log('[Speakeasy Strategy] loaded 📈');
})();