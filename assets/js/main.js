/* ─────────────────────────────────────────
   Mastercraft Global Ltd — Main JS
   Edit popup behaviour here
   ───────────────────────────────────────── */

(function() {

  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.08 + 's';
    revealObserver.observe(el);
  });

  /* ── MOBILE NAV ── */
  window.toggleMenu = function(btn) {
    const links = document.querySelector('.nav-links');
    const open = links.classList.toggle('mobile-open');
    if (open) {
      links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:65px;left:0;right:0;background:#0A0A0A;padding:1.5rem 5vw 2rem;border-bottom:1px solid rgba(201,169,110,0.15);gap:1.2rem;z-index:99;';
      if (!document.getElementById('mobile-cta-clone')) {
        const cta = document.querySelector('.nav-cta');
        if (cta) {
          const clone = cta.cloneNode(true);
          clone.id = 'mobile-cta-clone';
          clone.style.cssText = 'display:block;text-align:center;margin-top:0.5rem;';
          links.appendChild(clone);
        }
      }
    } else {
      links.removeAttribute('style');
      const c = document.getElementById('mobile-cta-clone');
      if (c) c.remove();
    }
  };

  /* ── ANNOUNCEMENT BAR ── */
  const annBar = document.getElementById('ann-bar');
  const annClose = document.getElementById('ann-bar-close');
  if (annBar && annClose) {
    const dismissed = sessionStorage.getItem('ann_bar_dismissed');
    if (!dismissed) {
      annBar.style.display = 'flex';
      // Push nav down
      const nav = document.querySelector('nav');
      if (nav) nav.classList.add('with-bar');
    }
    annClose.addEventListener('click', () => {
      annBar.style.display = 'none';
      sessionStorage.setItem('ann_bar_dismissed', '1');
      const nav = document.querySelector('nav');
      if (nav) nav.classList.remove('with-bar');
    });
  }

  /* ── NEWSLETTER MODAL ── */
  const modal = document.getElementById('newsletter-modal');
  if (modal) {
    const trigger = modal.dataset.trigger || 'exit_intent';
    const showOnce = modal.dataset.showOnce === 'true';
    const storageKey = 'mc_modal_shown';

    if (showOnce && localStorage.getItem(storageKey)) return;

    function openModal() {
      modal.classList.add('active');
      if (showOnce) localStorage.setItem(storageKey, '1');
    }

    if (trigger === 'exit_intent') {
      document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 10) openModal();
      }, { once: true });
    } else if (trigger === 'scroll_50') {
      window.addEventListener('scroll', function onScroll() {
        const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (pct >= 0.5) { openModal(); window.removeEventListener('scroll', onScroll); }
      });
    } else if (trigger.startsWith('timer_')) {
      const secs = parseInt(trigger.split('_')[1]) * 1000;
      setTimeout(openModal, secs);
    }

    // Close handlers
    const closeBtn = document.getElementById('modal-close');
    const skipBtn = document.getElementById('modal-skip');
    const overlay = modal;
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    if (skipBtn) skipBtn.addEventListener('click', () => modal.classList.remove('active'));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) modal.classList.remove('active'); });

    // Form submit
    const form = document.getElementById('modal-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        if (btn) { btn.textContent = '✓ Subscribed!'; btn.disabled = true; }
        setTimeout(() => modal.classList.remove('active'), 1500);
      });
    }
  }

  /* ── COOKIE NOTICE ── */
  const cookieBar = document.getElementById('cookie-bar');
  if (cookieBar) {
    const accepted = localStorage.getItem('mc_cookies');
    if (!accepted) {
      setTimeout(() => cookieBar.classList.add('active'), 800);
    }
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    function dismissCookie(val) {
      cookieBar.classList.remove('active');
      localStorage.setItem('mc_cookies', val);
    }
    if (acceptBtn) acceptBtn.addEventListener('click', () => dismissCookie('accepted'));
    if (declineBtn) declineBtn.addEventListener('click', () => dismissCookie('declined'));
  }

  /* ── CONTACT FORM ── */
  window.handleSubmit = function(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('successMsg');
    if (!form || !msg) return;
    form.querySelectorAll('input,select,textarea,button').forEach(el => el.disabled = true);
    msg.style.display = 'block';
    msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

})();
