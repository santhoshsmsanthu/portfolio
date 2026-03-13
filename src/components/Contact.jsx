export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's collaborate and build something amazing together</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:santhoshsmsanthu0@gmail.com" className="info-value">santhoshsmsanthu0@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Mobile</span>
              <a href="tel:+917795154902" className="info-value">+91 7795154902</a>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Bangalore, India</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value status-available">🟢 Available for Work</span>
            </div>
          </div>

          <form className="contact-cta contact-form" action="mailto:santhoshsmsanthu0@gmail.com" method="post" encType="text/plain">
            <input type="text" name="name" className="contact-input" placeholder="Your Name" required />
            <input type="email" name="email" className="contact-input" placeholder="Your Email" required />
            <textarea name="message" className="contact-input contact-textarea" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary btn-large">Send me an email</button>
          </form>

          <div className="social-links">
            <a href="tel:+917795154902" className="social-link" title="Call"><span>Call</span></a>
            <a href="https://github.com/santhoshsmsanthu" target="_blank" rel="noreferrer" className="social-link" title="GitHub"><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/santhosh-s-m-50a6082a5" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn"><span>LinkedIn</span></a>
            <a href="mailto:santhoshsmsanthu0@gmail.com" className="social-link" title="Email"><span>Email</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
