const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "API Integration",
    ],
  },
  {
    title: "Data & Tools",
    skills: [
      "PostgreSQL",
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "VS Code",
      "Axios",
      "Vercel",
      "Render",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <p className="eyebrow">
          <span /> Technical toolkit
        </p>

        <h2>
          Tools I use to build <i>reliable</i> products.
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
