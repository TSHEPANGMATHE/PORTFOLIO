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

  // The PNG files are stored in the repository root, not assets/images.
  document.querySelectorAll('img').forEach((image) => {
    const source = image.getAttribute('src') || '';
    const filename = source.split('/').pop();

    if (filename === 'tut-logo.png' || filename === 'ccna-certificate.png') {
      const localPath = `./${filename}`;
      const rawPath = `https://raw.githubusercontent.com/TSHEPANGMATHE/PORTFOLIO/main/${filename}`;

      image.onerror = () => {
        if (image.src !== rawPath) image.src = rawPath;
      };
      image.src = localPath;
    }
  });

  const revealElements = document.querySelectorAll('.rv');
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
