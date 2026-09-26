(() => {
  const year = document.getElementById('yr');
  if (year) year.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navlinks = document.getElementById('navlinks');

  if (navToggle && navlinks) {
    navToggle.addEventListener('click', () => {
      const open = navlinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navlinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navlinks.classList.remove('open'));
    });
  }

  // The image files are stored in the repository root. Keep the existing
  // markup working by correcting the old assets/images/ paths at runtime.
  document.querySelectorAll('img[src^="assets/images/"]').forEach((image) => {
    const filename = image.getAttribute('src').split('/').pop();
    image.src = `./${filename}`;
  });

  const revealElements = document.querySelectorAll('.rv');

  // Reveal content immediately so it cannot remain hidden when animation APIs
  // are unavailable or blocked by the hosting environment.
  revealElements.forEach((element) => element.classList.add('in'));

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => observer.observe(element));
})();
