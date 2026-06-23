document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll Effect ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Check & Update Client Logged-in State ---
  const loginLink = document.querySelector('.nav-login-link');
  if (loginLink && localStorage.getItem('devstudio_logged_in') === 'true') {
    const parentLi = loginLink.parentElement;
    const clientEmail = localStorage.getItem('devstudio_client_email') || 'Client';
    const emailPrefix = clientEmail.split('@')[0];
    
    // Change navigation look to show avatar & logout triggers
    parentLi.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; background-color: rgba(37, 99, 235, 0.05); padding: 0.35rem 0.75rem; border-radius: var(--border-radius-sm); border: 1px solid rgba(37, 99, 235, 0.15); margin-left: 0.5rem;">
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary-color);">👋 ${emailPrefix}</span>
        <button id="logoutBtn" style="background: none; border: none; cursor: pointer; color: var(--text-muted); font-size: 0.8rem; font-weight: 700; padding: 0.25rem; transition: var(--transition-smooth);" onmouseover="this.style.color='var(--primary-color)'" onmouseout="this.style.color='var(--text-muted)'">Logout</button>
      </div>
    `;
    
    // Bind logout button click
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('devstudio_logged_in');
      localStorage.removeItem('devstudio_client_email');
      localStorage.removeItem('devstudio_client_phone');
      window.location.reload();
    });

    // Update Hero badge welcoming text
    const heroBadge = document.querySelector('#hero .badge');
    if (heroBadge) {
      heroBadge.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Welcome back, ${emailPrefix}!
      `;
      heroBadge.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
      heroBadge.style.color = "#10b981";
      heroBadge.style.borderColor = "rgba(16, 185, 129, 0.15)";
    }
  }

  // --- Hamburger Menu Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when clicking a link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // --- Smooth Scroll & Active Nav State on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      
      const navItem = document.querySelector(`.nav-links a[href*=${sectionId}]`);
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // --- Modal Logic ---
  const modal = document.getElementById('consultationModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const openModalBtns = document.querySelectorAll('.trigger-modal');
  const closeModalBtn = document.querySelector('.modal-close');
  const modalForm = document.getElementById('modalForm');

  const openModal = (title = "Get Free Consultation", subtitle = "Tell me about your business and website goals. I'll get back to you with a strategic plan.") => {
    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modalForm.reset();
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const actionText = btn.getAttribute('data-cta') || "Get Free Consultation";
      openModal(actionText);
    });
  });

  closeModalBtn.addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // --- Collapsible FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all open FAQs
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-content').style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- Form submission & validation ---
  const toast = document.getElementById('toast');
  const showToast = (message) => {
    const toastText = toast.querySelector('.toast-text');
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  const handleFormSubmit = (form, isModal = false) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Standard local validation checks
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const details = form.querySelector('[name="details"]').value.trim();
      
      if (!name || !email || !details) {
        showToast("⚠️ Please fill in all required fields.");
        return;
      }
      
      // Simple email check
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("⚠️ Please enter a valid email address.");
        return;
      }

      // Change button state to submitting
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending details...";
      
      // Fake API request simulation
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        showToast("✅ Thank you! Your request has been sent successfully.");
        form.reset();
        if (isModal) {
          closeModal();
        }
      }, 1500);
    });
  };

  const contactSectionForm = document.getElementById('contactForm');
  if (contactSectionForm) handleFormSubmit(contactSectionForm, false);
  if (modalForm) handleFormSubmit(modalForm, true);

  // --- Stats Animation (Counter) ---
  const stats = document.querySelectorAll('.stat-number');
  const animateStats = () => {
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const suffix = stat.getAttribute('data-suffix') || "";
      let count = 0;
      const speed = target / 30; // duration control
      
      const updateCount = () => {
        if (count < target) {
          count = Math.ceil(count + speed);
          if (count > target) count = target;
          stat.textContent = count + suffix;
          setTimeout(updateCount, 40);
        } else {
          stat.textContent = target + suffix;
        }
      };
      updateCount();
    });
  };

  // Intersection observer for triggers
  const statsSection = document.getElementById('about');
  if (statsSection) {
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateStats();
          animated = true;
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(statsSection);
  }
});
