import { ArrowRight } from "@/app/components/icons";
import Image from "next/image";

const focusAreas = [
  [
    "01",
    "Product thinking",
    "Thoughtful interfaces shaped around real people and real work.",
  ],
  [
    "02",
    "Full-stack craft",
    "From a polished frontend to a reliable backend and data layer.",
  ],
  [
    "03",
    "Practical momentum",
    "Steady, focused progress on software that has to work in the real world.",
  ],
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-layout">
        <div className="about-image">
          <Image
            src="/profile/geetha1.jpg.png"
            alt="Geetha Sujith"
            width={400}
            height={500}
          />
        </div>
        <div className="section-intro">
          <p className="eyebrow">
            <span /> The person behind the code
          </p>
          <h2>
            Technology is most powerful when it feels <i>simple.</i>
          </h2>
          <a className="text-link dark-link" href="#skills">
            My technical toolkit <ArrowRight />
          </a>
        </div>

        <div className="about-content">
          <p className="about-lead">
            I&apos;m a full stack developer with an MCA, and
            a current focus on live CRM development.
          </p>
          <p>
            I work across React, Next.js, TypeScript, Python, Django, FastAPI,
            and PostgreSQL—connecting considered interfaces with the systems
            that make them useful.
          </p>
          <p>
            My approach is curious and grounded: understand the workflow, make
            the next interaction clear, then build with care.
          </p>
        </div>
      </div>

      <div className="container focus-grid">
        {focusAreas.map(([number, title, detail]) => (
          <article className="focus-card" key={number}>
            <span className="focus-number">{number}</span>
            <h3>{title}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
