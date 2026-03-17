import { useRef } from "react";
import santhoshImage from "../assets/santhosh.png";

export default function Hero() {
  const photoRef = useRef(null);

  const handlePhotoTilt = (event) => {
    const element = photoRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 20;
    const rotateX = (0.5 - (y / bounds.height)) * 20;

    element.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    element.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    element.style.setProperty("--shine-x", `${(x / bounds.width) * 100}%`);
    element.style.setProperty("--shine-y", `${(y / bounds.height) * 100}%`);
  };

  const resetPhotoTilt = () => {
    const element = photoRef.current;
    if (!element) return;
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.style.setProperty("--shine-x", "50%");
    element.style.setProperty("--shine-y", "50%");
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-title">Santhosh S M</h1>
          <p className="hero-subtitle">Full-Stack Developer</p>
          <p className="hero-description">
            Building responsive web applications, AI-powered systems, and innovative
            solutions using modern technologies.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number" data-value="10">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="5">5+</span>
              <span className="stat-label">Tech Stacks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="2">2+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="100">100+</span>
              <span className="stat-label">Passion</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-image-wrapper"
            ref={photoRef}
            onMouseMove={handlePhotoTilt}
            onMouseLeave={resetPhotoTilt}
          >
            <div className="hero-photo-shadow"></div>
            <div className="hero-image-ring"></div>
            <div className="hero-image-ring hero-image-ring--outer"></div>
            <div className="hero-photo-orbit">
              <div className="hero-photo-3d">
                <img src={santhoshImage} alt="Santhosh S M" className="hero-photo" />
                <span className="hero-photo-shine" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
