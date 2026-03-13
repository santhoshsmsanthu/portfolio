import { projects } from "../data/portfolioData";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Showcasing innovative solutions built with modern technologies</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">
                <div className="project-placeholder">{project.emoji}</div>
              </div>
              <div className="project-content">
                <span className="project-year">{project.year}</span>
                {project.internship ? <span className="project-internship">{project.internship}</span> : null}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-icon"
                  aria-label={`Open ${project.title} on GitHub`}
                  title="Open on GitHub"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-item">
            <span className="summary-number">6+</span>
            <span className="summary-label">Projects Completed</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">8+</span>
            <span className="summary-label">Technologies</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">3</span>
            <span className="summary-label">Project Types</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">100%</span>
            <span className="summary-label">Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
