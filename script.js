/* ==========================================================================
   DevStudio — Jitter-style interactions
   Lenis smooth scroll · robust anchor nav · 60fps reveals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('header');
  const headerH = () => (header ? header.offsetHeight : 80);

  /* ---------- Lenis smooth scroll (graceful fallback) ---------- */
  let lenis = null;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof Lenis !== 'undefined' && !prefersReduced) {
    lenis = new Lenis({ duration: 1.05, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  /* ---------- Robust anchor smooth-scroll ----------
     Works for every same-page #anchor. Falls back to native if needed. */
  const scrollToId = (id) => {
    const el = document.querySelector(id);
    if (!el) return false;
    const top = el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) - headerH() + 1;
    if (lenis) lenis.scrollTo(top, { duration: 1.05 });
    else window.scrollTo({ top, behavior: 'smooth' });
    return true;
  };

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    link.addEventListener('click', (e) => {
      // modal triggers handle their own click
      if (link.classList.contains('trigger-modal')) return;
      if (document.querySelector(id)) {
        e.preventDefault();
        scrollToId(id);
        closeMenu();
        history.replaceState(null, '', id);
      }
    });
  });

  /* ---------- Header scrolled state ---------- */
  const onScroll = (y) => { header && header.classList.toggle('scrolled', y > 30); };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  onScroll(window.scrollY || 0);

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  function closeMenu() { navLinks && navLinks.classList.remove('open'); menuToggle && menuToggle.classList.remove('open'); }
  if (menuToggle) menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  /* ---------- Logged-in nav swap ---------- */
  const loginLink = document.querySelector('.nav-login-link');
  if (loginLink && localStorage.getItem('devstudio_logged_in') === 'true') {
    const email = localStorage.getItem('devstudio_client_email') || 'Client';
    loginLink.textContent = `Logout (${email.split('@')[0]})`;
    loginLink.setAttribute('href', '#');
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      ['devstudio_logged_in','devstudio_client_email','devstudio_client_phone'].forEach(k => localStorage.removeItem(k));
      window.location.reload();
    });
  }

  /* ---------- Scroll reveals (60fps: opacity + transform) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger for siblings revealing together
          setTimeout(() => entry.target.classList.add('in'), (i % 6) * 60);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Active nav link ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const setActive = (y) => {
    let cur = '';
    sections.forEach(s => { if (y >= s.offsetTop - 200) cur = s.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => setActive(scroll));
  else window.addEventListener('scroll', () => setActive(window.scrollY), { passive: true });

  /* ---------- Modal ---------- */
  const modal = document.getElementById('consultationModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalForm = document.getElementById('modalForm');
  const closeBtn = modal ? modal.querySelector('.modal-close') : null;
  const openModal = (title = 'Get Free Consultation', sub = "Tell me about your business and website goals. I'll get back to you with a strategic plan.") => {
    if (!modal) return;
    modalTitle.textContent = title;
    modalSubtitle.textContent = sub;
    modal.classList.add('open');
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    if (lenis) lenis.start();
    document.body.style.overflow = '';
    modalForm && modalForm.reset();
  };
  document.querySelectorAll('.trigger-modal').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); openModal(btn.getAttribute('data-cta') || 'Get Free Consultation'); });
  });
  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal && modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal(); });

  /* ---------- FAQ accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    trigger.addEventListener('click', () => {
      const active = item.classList.contains('active');
      faqItems.forEach(i => { i.classList.remove('active'); i.querySelector('.faq-trigger').setAttribute('aria-expanded','false'); i.querySelector('.faq-content').style.maxHeight = null; });
      if (!active) { item.classList.add('active'); trigger.setAttribute('aria-expanded','true'); content.style.maxHeight = content.scrollHeight + 'px'; }
    });
  });

  /* ---------- Toast + forms ---------- */
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    if (!toast) return;
    toast.querySelector('.toast-text').textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 3800);
  };
  const handleForm = (form, isModal = false) => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const details = form.querySelector('[name="details"]').value.trim();
      if (!name || !email || !details) { showToast('Please fill in all required fields.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.'); return; }
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.textContent; btn.disabled = true; btn.textContent = 'Sending…';
      setTimeout(() => { btn.disabled = false; btn.textContent = orig; showToast('Thank you! Your request has been sent successfully.'); form.reset(); if (isModal) closeModal(); }, 1300);
    });
  };
  handleForm(document.getElementById('contactForm'), false);
  handleForm(modalForm, true);

  const newsForm = document.getElementById('newsForm');
  if (newsForm) newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = newsForm.querySelector('input').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showToast('Please enter a valid email address.'); return; }
    newsForm.reset(); showToast('Subscribed successfully!');
  });

  /* ---------- Stat counters ---------- */
  const stats = document.querySelectorAll('.stat-num');
  const animateStat = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1500, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick); else el.textContent = target + suffix;
    };
    requestAnimationFrame(tick);
  };
  if (stats.length && 'IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { animateStat(entry.target); sio.unobserve(entry.target); } });
    }, { threshold: 0.5 });
    stats.forEach(s => sio.observe(s));
  } else stats.forEach(animateStat);

  /* ---------- Land on hash (deep-link) with header offset ---------- */
  if (window.location.hash && document.querySelector(window.location.hash)) {
    const id = window.location.hash;
    setTimeout(() => scrollToId(id), 200);
  }
});
