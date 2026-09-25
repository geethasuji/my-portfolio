import Image from "next/image";
import { ArrowRight } from "@/app/components/icons";

const highlights = [
  {
    number: "01",
    title: "Frontend",
    text: "Building responsive, thoughtful interfaces with React, Next.js, and TypeScript.",
  },
  {
    number: "02",
    title: "Backend",
    text: "Developing APIs and application logic with Python, Django, FastAPI, and PostgreSQL.",
  },
  {
    number: "03",
    title: "Real-world projects",
    text: "Working on practical applications that connect user workflows with reliable systems.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-main">

        {/* Left - Image */}
        <div className="about-visual">
          <div className="about-image-frame">
            <Image
              src="/profile/geetha1.jpg.png"
              alt="Geetha Sujith"
              width={520}
              height={650}
              className="about-photo"
            />

            <div className="about-image-label">
              <span className="about-status-dot" />
              Full Stack Developer
            </div>
          </div>

          <div className="about-side-note">
            <span>Based in</span>
            <strong>Dubai, UAE</strong>
          </div>
        </div>

        {/* Right - Introduction */}
        <div className="about-copy">
          <p className="eyebrow">
            <span /> About me
          </p>

          <h2>
            I enjoy turning ideas into software that feels{" "}
            <i>clear and useful.</i>
          </h2>

          <p className="about-lead">
            I&apos;m Geetha Sujith, a Full Stack Developer with an MCA and
            hands-on experience building modern web applications.
          </p>

          <p>
            My work spans frontend development with React, Next.js, and
            TypeScript, together with backend development using Python,
            Django, FastAPI, and PostgreSQL.
          </p>

          <p>
            I enjoy understanding how a product should work from the user&apos;s
            perspective and then connecting that experience to the APIs,
            business logic, and data behind it.
          </p>

          <div className="about-actions">
            <a className="text-link dark-link" href="#skills">
              Explore my skills
              <ArrowRight />
            </a>

            <a className="text-link dark-link" href="#projects">
              View my projects
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="container about-highlights">
        <div className="about-highlights-heading">
          <p className="eyebrow">
            <span /> What I bring
          </p>

          <p>
            A practical approach to building complete web applications,
            from interface to backend.
          </p>
        </div>

        <div className="focus-grid">
          {highlights.map((item) => (
            <article className="focus-card" key={item.number}>
              <span className="focus-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}