/* ═══════════════════════════════════════
   SPEAKEASY CLONE — MAGIC LAYER JS
   re-creates the interactive features
   ═══════════════════════════════════════ */

(function() {
  'use strict';

  /* ── utils ── */
  const $  = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
  const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

  /* ═══════════════════════════════════════
     1. Sticky Header
     ═══════════════════════════════════════ */
  (function stickyHeader() {
    const header = document.querySelector('header') || document.querySelector('.site-header') || document.querySelector('[role="banner"]');
    if (!header) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 120) header.classList.add('is-sticky');
      else header.classList.remove('is-sticky');
    }, { passive: true });
  })();

  /* ═══════════════════════════════════════
     2. FAQ Accordion
     ═══════════════════════════════════════ */
  (function faqAccordion() {
    const titles = document.querySelectorAll('.elementor-tab-title');
    titles.forEach(title => {
      title.addEventListener('click', () => {
        const content = document.getElementById(title.getAttribute('aria-controls'));
        const isOpen  = title.getAttribute('aria-expanded') === 'true';
        // close siblings
        titles.forEach(t => {
          if (t !== title) {
            t.setAttribute('aria-expanded', 'false');
            const c = document.getElementById(t.getAttribute('aria-controls'));
            if (c) { c.style.maxHeight = '0'; c.style.opacity = '0'; c.classList.remove('is-open'); }
          }
        });
        title.setAttribute('aria-expanded', String(!isOpen));
        if (content) {
          if (isOpen) {
            content.style.maxHeight = '0';
            content.style.opacity   = '0';
            content.classList.remove('is-open');
          } else {
            content.classList.add('is-open');
            content.style.maxHeight = content.scrollHeight + 40 + 'px';
            content.style.opacity   = '1';
          }
        }
      });
    });
  })();

  /* ═══════════════════════════════════════
     3. Gallery Carousel (touch + arrow + autoplay)
     ═══════════════════════════════════════ */
  (function galleryCarousel() {
    const wrapper = document.querySelector('.elementor-image-carousel-wrapper');
    const track   = document.querySelector('.elementor-image-carousel.swiper-wrapper');
    if (!wrapper || !track) return;

    const slides = [...track.querySelectorAll('.swiper-slide')];
    if (!slides.length) return;

    const prevBtn = wrapper.querySelector('.elementor-swiper-button-prev');
    const nextBtn = wrapper.querySelector('.elementor-swiper-button-next');
    const bullets = [...wrapper.querySelectorAll('.swiper-pagination-bullet')];

    let idx = 0;
    const total = slides.length;
    const slideW = slides[0].offsetWidth + 18;
    let autoplayTimer = null;

    function goTo(i) {
      idx = ((i % total) + total) % total;
      track.style.transition = 'transform 500ms cubic-bezier(.25,.46,.45,.94)';
      track.style.transform  = 'translate3d(-' + (idx * slideW) + 'px, 0, 0)';
      bullets.forEach((b, bi) => {
        b.classList.toggle('swiper-pagination-bullet-active', bi === idx);
        b.setAttribute('tabindex', bi === idx ? '0' : '-1');
        b.setAttribute('aria-current', bi === idx ? 'true' : 'false');
      });
    }
    function next() { goTo(idx + 1); }
    function prev() { goTo(idx - 1); }

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
    bullets.forEach((b, bi) => b.addEventListener('click', () => { goTo(bi); resetAutoplay(); }));

    // Touch swipe
    let sx = 0, sy = 0, dragging = false;
    wrapper.addEventListener('touchstart', e => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
      dragging = true;
      track.style.transition = 'none';
    }, { passive: true });
    wrapper.addEventListener('touchmove', e => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - sx;
      const dy = e.touches[0].clientY - sy;
      if (Math.abs(dy) > Math.abs(dx)) return;
      track.style.transform = 'translate3d(-' + (idx * slideW - dx) + 'px, 0, 0)';
    }, { passive: true });
    wrapper.addEventListener('touchend', e => {
      if (!dragging) return;
      dragging = false;
      const dx = e.changedTouches[0].clientX - sx;
      track.style.transition = 'transform 500ms cubic-bezier(.25,.46,.45,.94)';
      if (dx < -50) next();
      else if (dx > 50) prev();
      else goTo(idx);
      resetAutoplay();
    });

    // Mouse drag (desktop)
    let mx = 0, mDown = false;
    wrapper.addEventListener('mousedown', e => { mx = e.clientX; mDown = true; track.style.transition='none'; });
    window.addEventListener('mousemove', e => {
      if (!mDown) return;
      const dx = e.clientX - mx;
      track.style.transform = 'translate3d(-' + (idx * slideW - dx) + 'px, 0, 0)';
    });
    window.addEventListener('mouseup', e => {
      if (!mDown) return;
      mDown = false;
      const dx = e.clientX - mx;
      track.style.transition = 'transform 500ms cubic-bezier(.25,.46,.45,.94)';
      if (dx < -60) next();
      else if (dx > 60) prev();
      else goTo(idx);
      resetAutoplay();
    });

    function resetAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, 4000);
    }
    resetAutoplay();

    wrapper.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { next(); resetAutoplay(); }
      if (e.key === 'ArrowLeft')  { prev(); resetAutoplay(); }
    });
  })();

  /* ═══════════════════════════════════════
     4. Mobile Hamburger
     ═══════════════════════════════════════ */
  (function mobileMenu() {
    const toggle = document.querySelector('.hfe-nav-menu__toggle');
    const menu   = document.querySelector('.hfe-nav-menu__layout-horizontal');
    if (!toggle || !menu) return;

    if (!toggle.querySelector('span')) {
      toggle.innerHTML = '<span style="display:block;width:24px;height:2px;background:currentColor;margin:5px 0;border-radius:1px;"></span>' +
                         '<span style="display:block;width:24px;height:2px;background:currentColor;margin:5px 0;border-radius:1px;"></span>' +
                         '<span style="display:block;width:24px;height:2px;background:currentColor;margin:5px 0;border-radius:1px;"></span>';
    }

    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      let overlay = document.getElementById('mobile-menu-overlay');
      if (open) {
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = 'mobile-menu-overlay';
          overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:99999;cursor:pointer;';
          document.body.appendChild(overlay);
          overlay.addEventListener('click', () => {
            menu.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            overlay.remove();
          });
        }
      } else if (overlay) {
        overlay.remove();
      }
    });
  })();

  /* ═══════════════════════════════════════
     5. Scroll Reveal (IntersectionObserver)
     ═══════════════════════════════════════ */
  (function scrollReveal() {
    const animated = document.querySelectorAll('.animated');
    if (!animated.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    animated.forEach(el => observer.observe(el));
  })();

  /* ═══════════════════════════════════════
     6. Trustindex fallback
     ═══════════════════════════════════════ */
  (function trustIndexFallback() {
    const widget = document.querySelector('.elementor-shortcode .bv-tag-attr-replace[data-src*="trustindex"]');
    if (!widget) return;
    setTimeout(() => {
      if (widget.children.length === 0 || widget.offsetHeight < 20) {
        widget.innerHTML = '<div style="text-align:center;padding:20px;color:#aaa;font-size:14px;">' +
                           '<span style="color:gold;font-size:20px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br>' +
                           '5.0 Stars — 350+ Verified Google Reviews<br>' +
                           '<a href="https://g.co/kgs/speakeasybarberlounge" target="_blank" rel="noopener" style="color:var(--gold,#c9a962);text-decoration:underline;font-size:12px;">Read Reviews on Google</a>' +
                           '</div>';
      }
    }, 3500);
  })();

  /* ═══════════════════════════════════════
     7. Book Now modal (styled iframe for Squire)
     ═══════════════════════════════════════ */
  (function bookNowHandler() {
    document.querySelectorAll('.elementor-button[href*="speakeasybarberlounge"], .elementor-button[href="#book"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const modal = document.createElement('div');
        modal.innerHTML = '<div id="book-modal" style="position:fixed;inset:0;z-index:999998;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.85);backdrop-filter:blur(6px);">' +
          '<div style="position:relative;width:95%;max-width:800px;height:85vh;background:#0a0a0a;border:1px solid #c9a962;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;">' +
          '<button id="book-close" style="position:absolute;top:10px;right:14px;background:none;border:none;color:#c9a962;font-size:28px;cursor:pointer;z-index:10;line-height:1;">&times;</button>' +
          '<iframe src="https://www.speakeasybarberlounge.com/" style="width:100%;flex:1;border:none;" title="Book Now"></iframe>' +
          '</div></div>';
        document.body.appendChild(modal.firstElementChild);
        const closeBtn = document.getElementById('book-close');
        const bookModal = document.getElementById('book-modal');
        closeBtn.addEventListener('click', () => bookModal.remove());
        bookModal.addEventListener('click', e => { if (e.target === bookModal) bookModal.remove(); });
      });
    });
  })();

  /* ═══════════════════════════════════════
     8. Parallax (subtle)
     ═══════════════════════════════════════ */
  (function parallaxHero() {
    const hero = document.querySelector('.elementor-element-4a2b192') || document.querySelector('.elementor-section-height-full');
    if (!hero) return;
    const bg = getComputedStyle(hero).backgroundImage;
    if (!bg || bg === 'none') return;
    window.addEventListener('scroll', () => {
      hero.style.backgroundPosition = 'center ' + (window.scrollY * 0.3) + 'px';
    }, { passive: true });
  })();

  /* ═══════════════════════════════════════
     9. Reduced motion
     ═══════════════════════════════════════ */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.querySelectorAll('.animated').forEach(el => el.classList.add('in-view'));
  }

  console.log('[Speakeasy Magic] loaded ✨');
})();
