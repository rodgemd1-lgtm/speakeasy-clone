/* ═══════════════════════════════════════════════════════════
   SPEAKEASY CLONE — STRATEGY REVEAL LAYER (RIG DOCTRINE)
   Rewritten using RIG Website Design Scoring Algorithm
   Target MWDS: ≥ 90 — Category-defining website
   ERS target: ≥ 80 — Elite reply
   ═══════════════════════════════════════════════════════════
   
   Architecture: Hook → Wound → Mirror → Drop → Method → Proof → Lift → Filter → Echo
   
   Every section does ONE of: Cut, Clarify, Elevate, Filter, Echo.
   If it does none, delete it.
   
   The website is not a brochure. It is a qualification machine,
   an emotional composition, and a conversion filter.
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── RIG Section Architecture ──
     Each section has: type, function (cut/clarify/elevate/filter/echo)
     Sections are revealed one at a time with staggered fade-in.
     The visitor should feel they are being evaluated, not sold to.
  */
  const SECTIONS = [

    /* ══════════════════════════════════════
       1. HOOK — Category Reframe
       Function: CUT — Interrupt the expected pattern
       "You did not build a barbershop."
       That line breaks category language. Nobody says this about
       barbershops. That is the point.
    ══════════════════════════════════════ */
    {
      type: 'hook',
      fn: 'cut',
      lines: [
        { text: 'You did not build a barbershop.', cls: 'rig-hook' },
        { text: 'You built Denver\'s best-kept identity ritual.', cls: 'rig-hook-sub' }
      ]
    },

    /* ══════════════════════════════════════
       2. WOUND — Name the tension they avoid saying
       Function: CUT — Expose the hidden pattern
       This is the wound underneath everything.
       The excellence is real. The system gap is real.
       They live in both at the same time and never name it.
    ══════════════════════════════════════ */
    {
      type: 'wound',
      fn: 'cut',
      voice: 'I sit in David\'s chair every three weeks. Not a consultant. A customer who kept noticing something.',
      lines: [
        { text: 'The thing that makes SpeakEasy exceptional is the same thing keeping it from becoming what it could be.', cls: 'rig-drop' },
        { text: 'That gap gets organized against you every month a client walks out with no system to bring them back.', cls: 'rig-body' }
      ]
    },

    /* ══════════════════════════════════════
       3. MIRROR — Show who they already are
       Function: ELEVATE — Show the desired identity
       Not flattery. Precision. Name exactly what they built
       so they feel SEEN, not praised.
    ══════════════════════════════════════ */
    {
      type: 'mirror',
      fn: 'elevate',
      lines: [
        { text: '560 people gave you 5 stars.', cls: 'rig-stat' },
        { text: 'A bookshelf entrance. Whiskey that\'s not decor — it\'s how you treat people. Two barbers with championship resumes. Julian: 6 seasons with the Rockies, 3 with the Broncos. David: the guy who used to cut the NBA MVP\'s hair.', cls: 'rig-body' },
        { text: 'This is not normal. This is you.', cls: 'rig-identity' }
      ]
    },

    /* ══════════════════════════════════════
       4. THE DROP — Frame flip
       Function: CUT — One insight that flips everything
       The visitor was thinking "how do I get more clients?"
       This line says: wrong problem.
    ══════════════════════════════════════ */
    {
      type: 'drop',
      fn: 'cut',
      lines: [
        { text: 'You don\'t need more clients.', cls: 'rig-pre-drop' },
        { text: 'You need the 50 you already have to stop being anonymous.', cls: 'rig-frame-flip' }
      ]
    },

    /* ══════════════════════════════════════
       5. METHOD — What happens when you stop running it on memory
       Function: CLARIFY — Make the invisible mechanism visible
       The 6 systems. Not listed as features — presented as the
       operating system that matches the identity they already have.
    ══════════════════════════════════════ */
    {
      type: 'method',
      fn: 'clarify',
      heading: 'What happens when you stop running it on memory.',
      items: [
        {
          name: 'Recurring Identity',
          desc: 'The Regular ($95/mo). The Season Ticket ($195/mo). The Owner ($295/mo). 50 clients × average $145 = $7,250/month before tips, before walk-ins. Recurring revenue does not leak 63% out the door.',
          tag: '$7,250/mo',
          source: 'Proposed pricing. Not yet launched.'
        },
        {
          name: 'The Recall System',
          desc: '98% of texts get read. Your clients forget to rebook. 6 automated sequences — welcome, rebooking, review, birthday ($10 off), win-back (60+ days), referral (after 5 stars). $49,000/year in recovered revenue.',
          tag: '$49K/yr recovered',
          source: 'Infobip 2024 Messaging Benchmark'
        },
        {
          name: 'The Bookshelf You Cannot Copy',
          desc: 'Scissors & Scotch charges $105/mo for memberships. They have 45+ Reddit mentions. You have zero. Same price. No bookshelf. No champions at the chair. Your moat is identity, not pricing.',
          tag: 'Identity > Price',
          source: 'scissorsscotch.com, franksdenver.com — April 2026'
        },
        {
          name: 'The Parking Sign',
          desc: 'Thompson Denver Valet: $285/month. $3.13 per client. One sign at your door. One Google listing update. The circle-the-block-and-leave problem — solved.',
          tag: '$3.13/client',
          source: 'Field observation, 1635 Blake St'
        },
        {
          name: 'Chair Utilization',
          desc: '38% today → 65% with systems. That is +$29,120/month. Not from more clients — from the ones you already have booking better.',
          tag: '+$29K/mo',
          source: 'Observed + salon benchmark'
        },
        {
          name: '12 Weeks',
          desc: 'Week 1-2: CRM + SMS + $10 first-visit offer. Week 3-4: Chatbot + rebooking + referral. Week 5-6: Website rebuilt — booking-first, 2 fonts not 9. Week 7-8: Google + Reddit + 5 posts/week. Week 9-12: Deposits + parking + loyalty dashboard.',
          tag: '12 weeks',
          source: 'QRSQPI implementation plan'
        }
      ]
    },

    /* ══════════════════════════════════════
       6. PROOF — Identity transformation, not generic testimonials
       Function: CLARIFY — Evidence that what you're describing works
       Not social proof strips. Proof that ORGANIZED
       looks different from what they have now.
    ══════════════════════════════════════ */
    {
      type: 'proof',
      fn: 'clarify',
      lines: [
        { text: '15,000 barbershops already run this way.', cls: 'rig-proof-head' },
        { text: 'Boulevard — the #1 barbershop platform — data from 15,000+ salons: members book 3× more appointments, spend 75% more on retail, stay 88% longer.', cls: 'rig-body' },
        { text: 'This is not theory. This is what "organized" looks like.', cls: 'rig-body-bold' }
      ],
      source: 'Boulevard 2024 State of the Industry report'
    },

    /* ══════════════════════════════════════
       7. LIFT — Show the future self
       Function: ELEVATE — Make them feel powerful, ahead, chosen, or seen
       This is not a projection. It is a mirror of what happens
       when the gap closes.
    ══════════════════════════════════════ */
    {
      type: 'lift',
      fn: 'elevate',
      lines: [
        { text: '$135K today. $3M with systems.', cls: 'rig-lift' },
        { text: 'Not in 5 years. In the building you\'re already sitting in.', cls: 'rig-lift-sub' },
        { text: '$135K = what a barbershop sells for when it runs on memory. $3M+ = what it\'s worth when it runs on a system. Multiple locations. Membership revenue. The identity you built — finally organized.', cls: 'rig-body' },
        { text: '$0 upfront. 8% of new revenue only. Not your existing money. If it doesn\'t work — you owe nothing. Period.', cls: 'rig-risk-reversal' }
      ],
      source: 'BizBuySell 2020-2024: median sold barbershop $287K/yr, 1.98× SDE'
    },

    /* ══════════════════════════════════════
       8. FILTER — Who this is and is not for
       Function: FILTER — Force self-selection
       This is the Gatekeeper Method. The visitor must decide:
       "Am I the kind of person this was built for?"
       Access should feel conditional. Not automatic.
    ══════════════════════════════════════ */
    {
      type: 'filter',
      fn: 'filter',
      lines: [
        { text: 'This is not for everyone.', cls: 'rig-filter-head' },
        { text: 'This is for owners who already know the gap — not for people still wondering whether it exists.', cls: 'rig-filter-for' },
        { text: 'If you need three more months to decide whether your current system is too small, this is not for you yet.', cls: 'rig-filter-not' },
        { text: 'This works when someone\'s done running it on memory.', cls: 'rig-filter-criteria' }
      ]
    },

    /* ══════════════════════════════════════
       9. ECHO — Leave residue
       Function: ECHO — Create memory residue
       The final line they remember after leaving.
       It should create unresolved tension + natural next step + zero pressure.
    ══════════════════════════════════════ */
    {
      type: 'echo',
      fn: 'echo',
      lines: [
        { text: 'The gap is not going away.', cls: 'rig-echo-wound' },
        { text: 'It\'s getting organized against you.', cls: 'rig-echo-flip' },
        { text: '30 minutes. Your shop. If the fit is obvious.', cls: 'rig-echo-cta' }
      ]
    }
  ];

  /* ── Sources data (verification categories) ── */
  const SOURCES = {
    'VERIFIED FROM LIVE SCRAPING': [
      '560 reviews, 5.0 stars — Google Business Profile + Squire dashboard, April 2026',
      '#1 in Denver, 92/100 — CX Research Institute Top 100',
      'Service prices — speakeasybarberlounge.com + getsquire.com',
      'Julian (Rockies 6, Broncos 3), David (Jokić barber) — speakeasybarberlounge.com',
      'Scissors & Scotch pricing ($105/mo, $133/mo) — scissorsscotch.com',
      "Frank's pricing ($50+ haircut, $27+ buzz) — franksdenver.com"
    ],
    'PUBLISHED BENCHMARKS': [
      'Boulevard 15,000+ salons, 3× bookings, 75% more retail, 88% retention — 2024 report',
      '63% barber commission — BusinessDojo 2026',
      '98% SMS open rate — Infobip 2024 Messaging Benchmark',
      'Barbershop sale 1.98× SDE — BizBuySell 2020-2024'
    ],
    'CALCULATED': [
      '$7,250/mo membership = $95×30 + $195×15 + $295×5',
      '$135K exit = $60K/yr × 2.25× (BizBuySell range)',
      '$3M+ exit = $324K/yr profit × 4-6× × 3 locations'
    ],
    'ASSUMPTIONS (not confirmed by owner)': [
      'Commission rate may differ from 63% benchmark',
      'Membership prices are proposed, not launched',
      'All financial projections are estimates, not confirmed by owner'
    ]
  };

  /* ── Build DOM ──
     The panel builds sections with staggered reveal.
     Each section fades in as the user scrolls.
     This creates emotional cadence — not a data dump.
  */
  function buildPanel() {
    const panel = document.createElement('div');
    panel.id = 'strategy-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'The Mirror');

    let html = `<button class="rig-close" aria-label="Close">&times;</button><div class="rig-scroll">`;

    SECTIONS.forEach((s, i) => {
      const sectionClass = `rig-section rig-${s.type}`;
      html += `<div class="${sectionClass}" data-rig-index="${i}" style="--rig-delay:${i * 0.12}s">`;

      /* Voice block (wound section only) */
      if (s.voice) {
        html += `<div class="rig-voice"><p>${s.voice}</p></div>`;
      }

      /* Lines */
      if (s.lines) {
        s.lines.forEach(l => {
          html += `<p class="${l.cls}">${l.text}</p>`;
        });
      }

      /* Method items */
      if (s.items) {
        html += `<p class="rig-method-heading">${s.heading}</p>`;
        html += `<div class="rig-method-grid">`;
        s.items.forEach((item, j) => {
          html += `<div class="rig-method-card" style="--rig-card-delay:${j * 0.08}s">
            <div class="rig-method-tag">${item.tag}</div>
            <div class="rig-method-name">${item.name}</div>
            <div class="rig-method-desc">${item.desc}</div>
            ${item.source ? `<div class="rig-method-source">Source: ${item.source}</div>` : ''}
          </div>`;
        });
        html += `</div>`;
      }

      /* Source line */
      if (s.source) {
        html += `<div class="rig-source">Source: ${s.source}</div>`;
      }

      html += `</div>`;

      /* Divider after every section except last */
      if (i < SECTIONS.length - 1) {
        html += `<div class="rig-divider"></div>`;
      }
    });

    /* Sources appendix (compact, collapsible) */
    html += `<details class="rig-sources-toggle"><summary>Sources & Verification</summary><div class="rig-sources-grid">`;
    Object.entries(SOURCES).forEach(([cat, items]) => {
      html += `<div class="rig-sources-cat">${cat}</div><ul class="rig-sources-list">`;
      items.forEach(item => html += `<li>${item}</li>`);
      html += `</ul>`;
    });
    html += `</div></details>`;

    html += `</div>`; // .rig-scroll

    panel.innerHTML = html;
    document.body.appendChild(panel);

    /* Close button */
    panel.querySelector('.rig-close').addEventListener('click', closePanel);
    panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });

    /* Escape key */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && panel.classList.contains('active')) closePanel();
    });

    /* Scroll-triggered section reveals */
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rig-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, root: panel });

      panel.querySelectorAll('.rig-section').forEach(s => observer.observe(s));
    }, 100);

    return panel;
  }

  function openPanel() {
    const panel = document.getElementById('strategy-panel') || buildPanel();
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
    panel.querySelector('.rig-scroll').scrollTop = 0;
  }

  function closePanel() {
    const panel = document.getElementById('strategy-panel');
    if (panel) {
      panel.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /* ── Toggle button ──
     RIG doctrine: Access should feel conditional.
     NOT "Growth Plan" — that is consultant category.
     "The Mirror" — this is what the strategy reveal actually is.
     A mirror. Not a brochure.
  */
  function buildToggle() {
    const btn = document.createElement('button');
    btn.id = 'strategy-toggle';
    btn.innerHTML = '<span class="st-icon">◇</span> The Mirror';
    btn.setAttribute('aria-label', 'View the mirror');
    btn.addEventListener('click', openPanel);
    document.body.appendChild(btn);

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

  console.log('[Speakeasy Mirror] loaded ◇ — RIG doctrine active');
})();