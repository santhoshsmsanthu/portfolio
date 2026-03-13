import { credentials } from "../data/portfolioData";

export default function Credentials() {
  return (
    <section id="credentials" className="credentials">
      <div className="container">
        <h2 className="section-title">Profile Highlights</h2>
        <p className="section-subtitle">
          Education, technical strengths, achievements, certifications, and
          extracurriculars from my resume
        </p>

        <div className="credentials-grid">
          {credentials.map((section) => (
            <article className="credential-card" key={section.title}>
              <h3 className="credential-title">{section.title}</h3>
              <ul className={`credential-list ${section.twoCol ? "two-col" : ""}`}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
