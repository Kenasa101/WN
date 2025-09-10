// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => menu.classList.toggle('show'));

// Dropdown toggle mobile
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', e => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle('show');
    }
  });
});

// Close dropdown/menu when clicking outside
window.addEventListener('click', e => {
  if(!e.target.closest('.menu') && !e.target.closest('.hamburger')){
    document.querySelectorAll('.dropdown-content').forEach(dc => dc.classList.remove('show'));
    menu.classList.remove('show');
  }
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 70;
    const height = sec.offsetHeight;
    if(scrollY >= top && scrollY < top + height){
      links.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.menu li a[href="#${sec.id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
});

// Like button functionality
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const count = btn.querySelector('.like-count');
    count.textContent = parseInt(count.textContent) + 1;
  });
});