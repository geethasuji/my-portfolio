const experienceItems = [
  {
    period: "Current",
    title: "Full Stack Developer",
    organisation: "Live CRM development",
    description:
      "Working with modern frontend, backend, and database technologies in an active CRM project environment.",
  },
  {
    // period: "2005",
    title: "Master of Computer Applications",
    organisation: "MCA completed",
    description:
      "Academic foundation in computer applications and software development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <p className="eyebrow">
          <span /> Journey so far
        </p>
        <h2>
          Learning, building, and growing through <i>real work.</i>
        </h2>

        <div className="timeline">
          {experienceItems.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.title}`}>
              <span className="timeline-period">{item.period}</span>

              <div>
                <h3>{item.title}</h3>
                <p className="timeline-organisation">{item.organisation}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}