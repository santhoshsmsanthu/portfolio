import { aboutTraits } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Full-Stack Developer and Machine Learning enthusiast with
              a strong foundation in software engineering. My journey in programming has
              been driven by curiosity and a desire to solve real-world problems through
              innovative technology solutions.
            </p>
            <p>
              I specialize in building scalable web applications, designing robust APIs,
              implementing machine learning systems, and creating intuitive user
              interfaces. I am proficient in modern frameworks and always eager to
              explore cutting-edge technologies.
            </p>
            <p>
              My approach combines technical excellence with clean code principles,
              ensuring that every project is maintainable, efficient, and built to last.
              I believe in continuous learning and staying updated with industry trends.
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
