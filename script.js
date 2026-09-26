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

  const revealElements = document.querySelectorAll('.rv');

  // Reveal the page immediately so content is never permanently hidden if
  // IntersectionObserver is unavailable or fails to initialise.
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
