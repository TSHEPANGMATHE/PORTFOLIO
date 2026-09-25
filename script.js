document.getElementById('yr').textContent = new Date().getFullYear();
const navToggle = document.getElementById('navToggle');
const navlinks = document.getElementById('navlinks');
navToggle.addEventListener('click', ()=>{
  const open = navlinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navlinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navlinks.classList.remove('open')));

const io = new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('in'), (i%6)*60); io.unobserve(e.target); }
  });
},{threshold:.15});
document.querySelectorAll('.rv').forEach(el=> io.observe(el));
