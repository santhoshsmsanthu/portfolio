export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Santhosh S M</h3>
            <p>Full-Stack Developer passionate about creating innovative solutions with modern technologies.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#tech">Tech Stack</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="footer-follow-header">
              <h4>Follow Me</h4>
              <div className="footer-robot-wrap" aria-hidden="true">
                <div className="robot-bubble">Hello!</div>
                <div className="robot">
                  <div className="robot-antenna"></div>
                  <div className="robot-head">
                    <span className="robot-eye"></span>
                    <span className="robot-eye"></span>
                    <span className="robot-mouth"></span>
                  </div>
                  <div className="robot-body">
                    <span className="robot-arm robot-arm-left"></span>
                    <span className="robot-core"></span>
                    <span className="robot-arm robot-arm-right"></span>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li><a href="https://github.com/santhoshsmsanthu" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/santhosh-s-m-50a6082a5" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:santhoshsmsanthu0@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Santhosh S M. All rights reserved. | Built with <span style={{ color: "#ff6b6b" }}>❤️</span> and modern web technologies</p>
        </div>
      </div>
    </footer>
  );
}
