/* =============================================
   SHARED JAVASCRIPT — G12 Research Website
   Particles + Theme Toggle + Navbar + Scroll
   ============================================= */

// ── PARTICLES ANIMATION ──────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let W, H;
  let raf;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  const isLight = () => document.body.classList.contains('light-theme');

  function randomParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() * 1.8 + 0.4,
      dx:   (Math.random() - 0.5) * 0.35,
      dy:   (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() < 0.6 ? '#6C63FF' : '#00D4AA',
    };
  }

  function initParticleList() {
    const count = Math.min(Math.floor(W * H / 14000), 80);
    particles = Array.from({ length: count }, randomParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const lineMax = 130;

    // Draw connection lines first
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < lineMax) {
          const opacity = (1 - dist / lineMax) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = isLight()
            ? `rgba(108,99,255,${opacity})`
            : `rgba(108,99,255,${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      ctx.beginPath();
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      grd.addColorStop(0, p.color + 'cc');
      grd.addColorStop(1, p.color + '00');
      ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Move
      p.x += p.dx;
      p.y += p.dy;

      // Wrap
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });

    raf = requestAnimationFrame(draw);
  }

  resize();
  initParticleList();
  draw();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    initParticleList();
    draw();
  });
})();


// ── THEME TOGGLE ─────────────────────────────
(function initTheme() {
  const btn     = document.getElementById('theme-toggle');
  const body    = document.body;
  const STORAGE = 'g12-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light-theme');
      if (btn) btn.title = 'Switch to Dark Mode';
      if (btn) btn.innerHTML = '☀️';
    } else {
      body.classList.remove('light-theme');
      if (btn) btn.title = 'Switch to Light Mode';
      if (btn) btn.innerHTML = '🌙';
    }
    localStorage.setItem(STORAGE, theme);
  }

  // Load saved preference
  const saved = localStorage.getItem(STORAGE) || 'dark';
  applyTheme(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = body.classList.contains('light-theme') ? 'light' : 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }
})();


// ── NAVBAR HAMBURGER ─────────────────────────
(function initNav() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  // Highlight active link
  const current = decodeURIComponent(window.location.pathname.split('/').pop()) || 'homepage.html';
  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });
})();


// ── SCROLL REVEAL ─────────────────────────────
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
})();


// ── ACCORDION ────────────────────────────────
(function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(el => el.classList.remove('open'));
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });
})();
