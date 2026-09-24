import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="eyebrow">
          <span /> Selected work
        </p>

        <h2>
          Building software for the work that happens <i>every day.</i>
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}