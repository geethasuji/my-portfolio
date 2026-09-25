const services = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Building responsive and user-friendly interfaces with React, Next.js, TypeScript, and modern UI libraries.",
  },
  {
    number: "02",
    title: "Backend Development",
    text: "Developing REST APIs, authentication, business logic, and backend services using Python, Django, and FastAPI.",
  },
  {
    number: "03",
    title: "Database & Integration",
    text: "Designing application data flows with PostgreSQL and connecting frontend applications with reliable APIs.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section what-i-do-section">
      <div className="container">
        <p className="eyebrow">
          <span /> What I do
        </p>

        <h2>
          Turning requirements into <i>working software.</i>
        </h2>

        <div className="what-i-do-grid">
          {services.map((service) => (
            <article className="what-i-do-card" key={service.number}>
              <span className="what-i-do-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}