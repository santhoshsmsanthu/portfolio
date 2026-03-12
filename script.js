// smooth scroll effect

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({behavior: "smooth"});
  });
});

// click event for project button
const projectsBtn = document.getElementById('projects-btn');
if(projectsBtn){
  projectsBtn.addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({behavior:'smooth'});
  });
}

// theme toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'light'){
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Intersection Observer for scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// Add reveal class to elements and observe them
document.querySelectorAll('section').forEach(el => {
  observer.observe(el);
});

// Add animation delays to cards based on index
document.querySelectorAll('.card').forEach((card, index) => {
  card.style.setProperty('--index', index);
});

document.querySelectorAll('.project').forEach((proj, index) => {
  proj.style.setProperty('--index', index);
});

document.querySelectorAll('.stat').forEach((stat, index) => {
  stat.style.setProperty('--index', index);
});

// simple counter animation when in view
const stats = document.querySelectorAll('.stat strong');
let counted = false;

function animateStats(){
  if(counted) return;
  const trigger = document.querySelector('#home').offsetHeight;
  if(window.scrollY + window.innerHeight > trigger + 100){
    stats.forEach((el, idx) => {
      let end = parseInt(el.textContent.replace('+',''));
      let start = 0;
      const step = Math.ceil(end/50);
      const delay = idx * 100;
      setTimeout(() => {
        const interval = setInterval(() => {
          start += step;
          if(start >= end){
            el.textContent = end + '+';
            clearInterval(interval);
          } else {
            el.textContent = start + '+';
          }
        }, 20);
      }, delay);
    });
    counted = true;
  }
}

window.addEventListener('scroll', animateStats);

// Parallax effect on hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  if(scrolled < window.innerHeight){
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// add ripple effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.background = 'rgba(255,255,255,0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'pulse-ripple 0.6s ease-out';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});
