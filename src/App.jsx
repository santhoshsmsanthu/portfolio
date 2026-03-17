import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";
import CursorTrail from "./components/CursorTrail";
import Hero from "./components/Hero";
import About from "./components/About";
import Credentials from "./components/Credentials";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const revealSelector = useMemo(
    () =>
      ".section-title, .section-subtitle, .about-text, .trait, .credential-card, .tech-category, .project-card, .summary-item, .info-item, .contact-cta, .social-link, .footer-section",
    []
  );

  useEffect(() => {
    const revealTargets = document.querySelectorAll(revealSelector);
    revealTargets.forEach((el, index) => {
      el.classList.add("scroll-reveal");
      if (index % 3 === 0) {
        el.classList.add("from-left");
      } else if (index % 3 === 1) {
        el.classList.add("from-right");
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));

    const sections = document.querySelectorAll("section");
    const updateActiveLink = () => {
      let current = "home";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 220) {
          current = section.id;
        }
      });
      setActiveSection(current);
      setShowScrollTop(window.scrollY > 500);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".stat-number").forEach((stat) => {
            if (stat.dataset.animated === "true") return;
            const finalValue = Number(stat.dataset.value || "0");
            let currentValue = 0;
            const increment = Math.max(1, Math.ceil(finalValue / 30));
            const interval = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                stat.textContent = `${finalValue}+`;
                stat.dataset.animated = "true";
                clearInterval(interval);
              } else {
                stat.textContent = `${currentValue}+`;
              }
            }, 30);
          });
          counterObserver.disconnect();
        });
      },
      { threshold: 0.4 }
    );

    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      counterObserver.observe(heroSection);
    }

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            const width = entry.target.style.width;
            entry.target.style.width = "0";
            setTimeout(() => {
              entry.target.style.animation = "growWidth 1s ease-out forwards";
              entry.target.style.width = width;
            }, 50);
            entry.target.classList.add("animated");
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".skill-progress").forEach((bar) => skillObserver.observe(bar));

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      skillObserver.disconnect();
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, [revealSelector]);

  const handleNavigate = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <Starfield />
      <CursorTrail />
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onNavigate={handleNavigate}
      />

      <Hero />
      <About />
      <Credentials />
      <Tech />
      <Projects />
      <Contact />
      <Footer />

      <button
        type="button"
        className="scroll-top-btn"
        style={{ display: showScrollTop ? "block" : "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;
