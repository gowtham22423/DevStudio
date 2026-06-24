/* ==========================================================================
   DevStudio — Premium interactions
   Lenis smooth scroll · 60fps reveals (transform/opacity) · editorial motion
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------------------------
     Page loader
     --------------------------------------------------------------------------- */
  const loader = document.getElementById('pageLoader');
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('loaded'), 600);
  });
  // Fallback in case load already fired
  setTimeout(() => loader && loader.classList.add('loaded'), 1600);

  /* ---------------------------------------------------------------------------
     Lenis smooth scroll (graceful fallback to native)
     --------------------------------------------------------------------------- */
  let lenis = null;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof Lenis !== 'undefined' && !prefersReduced) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Smooth anchor navigation (works with or without Lenis)
  const scrollToTarget = (target) => {
    const el = document.querySelector(target);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: 0 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  document.querySelectorAll('a[href*="#"]').forEach(link => {
    const href = link.getAttribute('href');
    const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
    // Only intercept same-page anchors that exist
    if (hash && hash.length > 1 && document.querySelector(hash)) {
      link.addEventListener('click', (e) => {
        // Let modal triggers behave normally
        if (link.classList.contains('trigger-modal')) return;
        e.preventDefault();
        scrollToTarget(hash);
        closeMenu();
      });
    }
  });

  /* ---------------------------------------------------------------------------
     Header scroll state
     --------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const onScroll = (y) => {
    if (y > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  if (lenis) {
    lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  } else {
    window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  }
  onScroll(window.scrollY);

  /* ---------------------------------------------------------------------------
     Mobile menu
     --------------------------------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const closeMenu = () => {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    menuToggle && menuToggle.classList.remove('open');
  };
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }

  /* ---------------------------------------------------------------------------
     Logged-in nav state
     --------------------------------------------------------------------------- */
  const loginLink = document.querySelector('.nav-login-link');
  if (loginLink && localStorage.getItem('devstudio_logged_in') === 'true') {
    const clientEmail = localStorage.getItem('devstudio_client_email') || 'Client';
    const emailPrefix = clientEmail.split('@')[0];
    loginLink.textContent = `Logout (${emailPrefix})`;
    loginLink.setAttribute('href', '#');
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('devstudio_logged_in');
      localStorage.removeItem('devstudio_client_email');
      localStorage.removeItem('devstudio_client_phone');
      window.location.reload();
    });
  }

  /* ---------------------------------------------------------------------------
     Hero line reveal (mask up) — runs after loader
     --------------------------------------------------------------------------- */
  const heroLines = document.querySelectorAll('.hero-title .line-inner');
  const revealHero = () => {
    heroLines.forEach((line, i) => {
      line.style.transition = `transform 1s var(--ease)`;
      line.style.transitionDelay = `${i * 0.09}s`;
      line.style.transform = 'translateY(0)';
    });
    document.querySelectorAll('.hero-lede, .scroll-cue, .hero-meta').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 500 + i * 120);
    });
  };
  setTimeout(revealHero, prefersReduced ? 0 : 900);

  /* ---------------------------------------------------------------------------
     Scroll reveals (IntersectionObserver — GPU compositing, 60fps)
     --------------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------------------------------------------------------------------------
     Active nav link on scroll
     --------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href*="#"]');
  const setActiveNav = (y) => {
    let current = '';
    sections.forEach(sec => {
      if (y >= sec.offsetTop - 220) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href.endsWith('#' + current) && current !== '');
    });
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => setActiveNav(scroll));
  else window.addEventListener('scroll', () => setActiveNav(window.scrollY), { passive: true });

  /* ---------------------------------------------------------------------------
     Work rows — floating image preview that follows cursor (desktop)
     --------------------------------------------------------------------------- */
  if (window.matchMedia('(pointer: fine)').matches) {
    const workRows = document.querySelectorAll('.work-row');
    workRows.forEach(row => {
      const media = row.querySelector('.work-media');
      if (!media) return;
      let raf = null;
      let lastX = 0, lastY = 0;
      const move = (e) => {
        lastX = e.clientX; lastY = e.clientY;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          media.style.transform = `translate(${lastX}px, ${lastY}px) translate(-50%, -50%) scale(1)`;
          raf = null;
        });
      };
      row.addEventListener('mouseenter', () => row.classList.add('preview-active'));
      row.addEventListener('mousemove', move);
      row.addEventListener('mouseleave', () => {
        row.classList.remove('preview-active');
        media.style.transform = `translate(${lastX}px, ${lastY}px) translate(-50%, -50%) scale(0.85)`;
      });
    });
  }

  /* ---------------------------------------------------------------------------
     Modal
     --------------------------------------------------------------------------- */
  const modal = document.getElementById('consultationModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalForm = document.getElementById('modalForm');
  const closeBtn = modal ? modal.querySelector('.modal-close') : null;

  const openModal = (title = 'Get Free Consultation', subtitle = "Tell me about your business and website goals. I'll get back to you with a strategic plan.") => {
    if (!modal) return;
    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
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
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn.getAttribute('data-cta') || 'Get Free Consultation');
    });
  });
  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal && modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });

  /* ---------------------------------------------------------------------------
     FAQ accordion
     --------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-content').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  /* ---------------------------------------------------------------------------
     Toast + form handling
     --------------------------------------------------------------------------- */
  const toast = document.getElementById('toast');
  const showToast = (message) => {
    if (!toast) return;
    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 4000);
  };

  const handleFormSubmit = (form, isModal = false) => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const details = form.querySelector('[name="details"]').value.trim();
      if (!name || !email || !details) { showToast('Please fill in all required fields.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.'); return; }
      const submitBtn = form.querySelector('[type="submit"]');
      const original = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = original;
        showToast('Thank you! Your request has been sent successfully.');
        form.reset();
        if (isModal) closeModal();
      }, 1400);
    });
  };
  handleFormSubmit(document.getElementById('contactForm'), false);
  handleFormSubmit(modalForm, true);

  // Footer newsletter
  const newsForm = document.getElementById('newsForm');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newsForm.querySelector('input').value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { showToast('Please enter a valid email address.'); return; }
      newsForm.reset();
      showToast('Subscribed successfully!');
    });
  }

  /* ---------------------------------------------------------------------------
     Stat counters
     --------------------------------------------------------------------------- */
  const stats = document.querySelectorAll('.stat-number');
  const animateStat = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(tick);
  };
  if (stats.length && 'IntersectionObserver' in window) {
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateStat(entry.target); statIo.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    stats.forEach(s => statIo.observe(s));
  } else {
    stats.forEach(s => animateStat(s));
  }

});
