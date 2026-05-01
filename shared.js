// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
  observer.observe(el);
});

// Mobile nav
function toggleMenu(btn) {
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  const open = links.classList.toggle('mobile-open');
  if (open) {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:65px;left:0;right:0;background:#0A0A0A;padding:1.5rem 5vw;border-bottom:1px solid rgba(201,169,110,0.15);gap:1.2rem;z-index:99;';
    cta.style.cssText = 'display:block;margin:0 5vw 1rem;text-align:center;';
  } else {
    links.removeAttribute('style');
    cta.removeAttribute('style');
  }
}
