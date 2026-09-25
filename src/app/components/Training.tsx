const training = [
  {
    number: "01",
    title: "AI-Powered Full Stack Developement",
    organisation: "UpCode Software Labs",
    description:
       "Intensive training covering React + Python full-stack development, AI-powered features, REST API integration, and cloud deployment.",
  },
  {
    number: "02",
    title: "Frontend Development",
    organisation: "UpCode Software Labs",
    description:
      "Practical experience building responsive interfaces, reusable components, routing, API integration, and modern application layouts.",
  },
  {
    number: "03",
    title: "Backend Development",
    organisation: "UpCode Software Labs",
    description:
      "Practical experience developing REST APIs, authentication, business logic, database integration, and full-stack application workflows.",
  },
];

export default function Training() {
  return (
    <section id="training" className="section training-section">
      <div className="container">
        <div className="training-header">
          <div>
            <p className="eyebrow">
              <span /> <b>Training</b>
            </p>

            <h2>
              Learning by <i>building.</i>
            </h2>
          </div>

          <p>
            My training has focused on developing complete web applications
            through practical, project-based work across frontend, backend,
            APIs, authentication, and databases.
          </p>
        </div>

        <div className="training-grid">
          {training.map((item) => (
            <article className="training-card" key={item.number}>
              <span className="training-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p className="training-organisation">{item.organisation}</p>

              <p className="training-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
