import { aboutTraits } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science and Design undergraduate specializing in full-stack
              web development and machine learning. I build scalable web applications
              using React.js, Node.js, MongoDB, SQL, REST APIs, and Supabase, and I
              have hands-on experience implementing machine learning models for real-world
              problems.
            </p>
            <p>
              I completed an 8-month internship at Posspole Pvt. Ltd., contributing to
              live client projects and production websites. I am passionate about
              solving complex problems, learning emerging technologies, and delivering
              impactful digital solutions through clean, maintainable code.
            </p>

            <div className="about-traits">
              {aboutTraits.map((trait) => (
                <div className="trait" key={trait.name}>
                  <span className="trait-icon">{trait.icon}</span>
                  <span className="trait-name">{trait.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
