// Active section highlight in the sheet-nav
const links = document.querySelectorAll('#sheetnav a');
const targets = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));
const setActive = () => {
  let current = targets[0];
  const y = window.scrollY + 120;
  targets.forEach(t => { if (t && t.offsetTop <= y) current = t; });
  links.forEach(l => l.classList.toggle('active', document.querySelector(l.getAttribute('href')) === current));
};
document.addEventListener('scroll', setActive, { passive: true });
window.addEventListener('load', setActive);