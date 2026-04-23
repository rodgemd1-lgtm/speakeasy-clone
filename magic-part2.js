/* ─── extra-magic.js — Part II polish ─── */
(function() {
  'use strict';

  const $  = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

  /* ── 11. Back-to-top button ── */
  (function backToTop() {
    if ($('#back-to-top')) return;
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '&#8593;'; // up arrow
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  /* ── 12. Cursor glow (subtle gold spotlight on dark hero) ── */
  (function cursorGlow() {
    const hero = $('.elementor-element-4a2b192') || $('.elementor-section-height-full');
    if (!hero || window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);
    hero.classList.add('has-cursor-glow');

    hero.addEventListener('mouseenter', () => glow.classList.add('active'));
    hero.addEventListener('mouseleave', () => glow.classList.remove('active'));
    hero.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
  })();

  /* ── 13. Image lightbox for gallery ── */
  (function imageLightbox() {
    if ($('#img-lightbox')) return;
    const galleryImages = $$('.elementor-image-carousel img, .gallery-section img, img[src*="VAN7066"]');
    if (!galleryImages.length) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'img-lightbox';
    lightbox.innerHTML = `
      <button class="lb-close" aria-label="Close">&times;</button>
      <button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>
      <img src="" alt="Gallery preview">
      <button class="lb-nav lb-next" aria-label="Next">&#8250;</button>
    `;
    document.body.appendChild(lightbox);

    const lbImg    = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lb-close');
    const prevBtn  = lightbox.querySelector('.lb-prev');
    const nextBtn  = lightbox.querySelector('.lb-next');
    let currentIdx = 0;

    function show(i) {
      currentIdx = ((i % galleryImages.length) + galleryImages.length) % galleryImages.length;
      lbImg.src = galleryImages[currentIdx].src || galleryImages[currentIdx].dataset.src || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    galleryImages.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => show(i));
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
    });
    prevBtn.addEventListener('click', e => { e.stopPropagation(); show(currentIdx - 1); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); show(currentIdx + 1); });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
      if (e.key === 'ArrowRight') show(currentIdx + 1);
      if (e.key === 'ArrowLeft')  show(currentIdx - 1);
    });
  })();

  /* ── 14. Active nav link on scroll ── */
  (function activeNavOnScroll() {
    const sections = $$('section[id], [id]:not(header):not(footer)');
    const navLinks = $$('.hfe-menu-item[href^="./"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('is-active',
              link.getAttribute('href').includes('#' + id) ||
              link.getAttribute('href').includes(id.replace(/-section$/,''))
            );
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));
  })();

  /* ── 15. Counter animation for stats ── */
  (function numberCounter() {
    const targets = $$('[data-count]');
    if (!targets.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const t = entry.target;
          const end = parseInt(t.dataset.count, 10);
          const dur = parseInt(t.dataset.duration, 10) || 1500;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3); // easeOutCubic
            t.textContent = Math.round(ease * end);
            if (p < 1) requestAnimationFrame(tick);
            else t.textContent = end;
          }
          requestAnimationFrame(tick);
          observer.unobserve(t);
        }
      });
    }, { threshold: 0.5 });
    targets.forEach(t => observer.observe(t));
  })();

  /* ── 16. Lazy-loaded images shimmer removal ── */
  (function lazyImageLoaded() {
    const lazyImages = $$('img[loading="lazy"]');
    lazyImages.forEach(img => {
      if (img.complete) img.classList.add('loaded');
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => img.classList.add('loaded'));
    });
  })();

  /* ── 17. Text typing effect for hero (once) ── */
  (function typeWriterEffect() {
    const heroHeading = $('h1.elementor-heading-title');
    if (!heroHeading || sessionStorage.getItem('heroTyped')) return;
    const original = heroHeading.textContent;
    heroHeading.textContent = '';
    heroHeading.classList.add('type-cursor');
    let i = 0;
    function type() {
      if (i < original.length) {
        heroHeading.textContent += original[i];
        i++;
        setTimeout(type, 45);
      } else {
        heroHeading.classList.remove('type-cursor');
        sessionStorage.setItem('heroTyped', '1');
      }
    }
    setTimeout(type, 250);
  })();

  /* ── 18. Smooth anchor scrolling ── */
  (function smoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  })();

  /* ── 19. Prefers-reduced-motion respect ── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    $$('.animated').forEach(el => el.classList.add('in-view'));
  }

  console.log('[Speakeasy Extra Magic] loaded ✨');
})();
