import { techCategories } from "../data/portfolioData";

export default function Tech() {
  return (
    <section id="tech" className="tech">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with to bring ideas to life</p>

        <div className="tech-grid">
          {techCategories.map((category) => (
            <div className="tech-category" key={category.title}>
              <h3 className="tech-category-title">{category.title}</h3>
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
