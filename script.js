/* ============================================
   INITIALIZATION & DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  initializeStarfield();
  initializeTheme();
  initializeNavigation();
  initializeScrollReveal();
  initializeIntersectionObserver();
});

/* ============================================
   STARFIELD BACKGROUND ANIMATION
   ============================================ */
function initializeStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    const count = Math.floor((canvas.width + canvas.height) / 10);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random(),
        da: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1)
      });
    }
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a <= 0) {
        s.a = 0;
        s.da *= -1;
      }
      if (s.a >= 1) {
        s.a = 1;
        s.da *= -1;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(animateStars);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initStars();
  });

  resizeCanvas();
  initStars();
  animateStars();
}

/* ============================================
   THEME TOGGLE
   ============================================ */
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('light');
    themeToggle.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

/* ============================================
   NAVIGATION
   ============================================ */
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const section = document.querySelector(targetId);

      if (section) {
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initializeScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

/* ============================================
   INTERSECTION OBSERVER FOR SECTIONS
   ============================================ */
function initializeIntersectionObserver() {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Update active nav link based on scroll position
  document.addEventListener('scroll', () => {
    updateActiveNavLink();
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   PARALLAX EFFECT
   ============================================ */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero && window.pageYOffset < window.innerHeight) {
    hero.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
  }
});

/* ============================================
   BUTTON RIPPLE EFFECT
   ============================================ */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
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

/* ============================================
   SCROLL TOP BUTTON
   ============================================ */
const scrollTopBtn = createScrollTopButton();

function createScrollTopButton() {
  const btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.className = 'scroll-top-btn';
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 900;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.3);
  `;

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-5px)';
    btn.style.boxShadow = '0 10px 25px rgba(56, 189, 248, 0.5)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
    btn.style.boxShadow = '0 5px 15px rgba(56, 189, 248, 0.3)';
  });

  document.body.appendChild(btn);
  return btn;
}

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

/* ============================================
   SMOOTH ANIMATION ON LOAD
   ============================================ */
window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach((section, index) => {
    section.style.animation = `fadeIn 0.8s ease-out ${index * 0.1}s forwards`;
    section.style.opacity = '0';
  });
});

/* ============================================
   PROJECT CARD HOVER EFFECT
   ============================================ */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    const image = this.querySelector('.project-image');
    if (image) {
      image.style.transform = 'scale(1.1)';
    }
  });

  card.addEventListener('mouseleave', function () {
    const image = this.querySelector('.project-image');
    if (image) {
      image.style.transform = 'scale(1)';
    }
  });
});

document.querySelectorAll('.project-image').forEach(image => {
  image.style.cssText += 'transition: transform 0.3s ease; overflow: hidden;';
});

/* ============================================
   STAT COUNTER ANIMATION
   ============================================ */
function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  window.addEventListener('scroll', () => {
    if (hasAnimated) return;

    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if (window.pageYOffset + window.innerHeight > heroBottom - 200) {
      statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        animateToValue(stat, finalValue);
      });
      hasAnimated = true;
    }
  });
}

function animateToValue(element, finalValue) {
  let currentValue = 0;
  const increment = Math.ceil(finalValue / 30);
  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      element.textContent = finalValue + '+';
      clearInterval(interval);
    } else {
      element.textContent = currentValue + '+';
    }
  }, 30);
}

animateCounters();

/* ============================================
   SKILL BAR ANIMATION
   ============================================ */
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.animation = 'growWidth 1s ease-out forwards';
          entry.target.style.width = width;
        }, 50);
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
}

animateSkillBars();

/* ============================================
   ACTIVE NAV LINK STYLING
   ============================================ */
const style = document.createElement('style');
style.textContent = `
  .nav-link.active::after {
    width: 100%;
  }

  .scroll-top-btn:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(10px, 10px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    .nav-menu.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.95);
      padding: 1rem 0;
      gap: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-menu.active li {
      width: 100%;
      padding: 0.75rem 1rem;
    }

    .nav-menu.active .nav-link {
      display: block;
    }
  }

  @media (max-width: 480px) {
    .scroll-top-btn {
      bottom: 20px !important;
      right: 20px !important;
      width: 45px !important;
      height: 45px !important;
      font-size: 1.2rem !important;
    }
  }
`;
document.head.appendChild(style);

/* ============================================
   CONSOLE MESSAGE
   ============================================ */
console.log('%cHey! 👋', 'font-size: 20px; font-weight: bold;');
console.log('%cWelcome to Santhosh S M Portfolio', 'font-size: 16px; color: #38bdf8;');
console.log('%cBuilt with HTML, CSS, JavaScript & Modern Technologies', 'font-size: 12px; color: #64748b;');
