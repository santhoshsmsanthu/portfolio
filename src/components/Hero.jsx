export default function Hero() {
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
          <div className="hero-image-wrapper">
            <div className="hero-image-ring"></div>
            <div className="hero-image-ring hero-image-ring--outer"></div>
            <img src="/santhosh.png" alt="Santhosh S M" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
