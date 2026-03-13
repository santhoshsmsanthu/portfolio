import { useMemo, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
    [formData.email]
  );

  const isFormValid =
    formData.name.trim().length > 0 &&
    isEmailValid &&
    formData.message.trim().length > 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/santhoshsmsanthu0@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Contact from ${formData.name.trim()}`,
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form className="contact-cta contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="contact-input contact-textarea"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary btn-large" disabled={!isFormValid || isSubmitting}>
              {isSubmitting ? "Sending..." : "Send me an email"}
            </button>
            {submitStatus === "success" && (
              <p className="contact-form-status success">Message sent successfully.</p>
            )}
            {submitStatus === "error" && (
              <p className="contact-form-status error">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="social-links">
            <a href="tel:+917795154902" className="social-link" title="Call">
              <span>Call</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.22a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
            <a href="https://github.com/santhoshsmsanthu" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <span>GitHub</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/santhosh-s-m-50a6082a5" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <span>LinkedIn</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.586s.043-8.816 0-9.734h3.586v1.381c.43-.664 1.202-1.609 2.923-1.609 2.135 0 3.74 1.678 3.74 5.284v4.678zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.927.754 1.94 1.71 0 .951-.753 1.71-1.983 1.71zm1.581 11.597H3.721V9.618h3.197v10.834zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
              </svg>
            </a>
            <a href="mailto:santhoshsmsanthu0@gmail.com" className="social-link" title="Email">
              <span>Email</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
