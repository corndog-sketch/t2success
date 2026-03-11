/* ============================================================
   TUTOR 2 SUCCESS - Shared Scripts
   ============================================================ */

/* ── NAV SCROLL SHADOW ── */
(function () {
  var nav = document.querySelector('nav');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── MOBILE NAV: close on link click ── */
(function () {
  var links = document.querySelectorAll('.nav-links a');
  var navLinks = document.getElementById('nav-links');
  var hamburger = document.querySelector('.nav-hamburger');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks) navLinks.classList.remove('open');
      if (hamburger) hamburger.classList.remove('is-open');
    });
  });

  /* hamburger X animation */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-open');
    });
  }
})();

/* ── SCROLL-REVEAL ── */
(function () {
  document.documentElement.classList.add('js');

  var els = document.querySelectorAll(
    '.feat-card, .step-card, .trust-item, .price-card, .service-card, .faq-item, .section-label, h2, .section-intro, .cred-item'
  );
  els.forEach(function (el) {
    el.classList.add('reveal');
  });

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('revealed'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(function (el) { observer.observe(el); });
})();

/* ── FAQ ACCORDION ── */
(function () {
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      /* close all */
      document.querySelectorAll('.faq-item.open').forEach(function (open) {
        open.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });
})();
