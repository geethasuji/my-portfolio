import { ArrowDownRight } from "@/app/components/icons";

const tools = ["React", "Next.js", "TypeScript", "Python", "Django", "FastAPI"];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal-up">
            <span /> Full Stack Developer
          </p>
          <h1 className="reveal-up delay-1">
            Building the useful <i>side</i> of the web.
          </h1>
          <p className="hero-intro reveal-up delay-2">
            I&apos;m Geetha Sujith—a full stack developer who turns complex
            workflows into thoughtful, dependable digital experiences.
          </p>
          <div className="hero-actions reveal-up delay-3">
            <a className="button button-primary" href="#about">
              Explore my work <ArrowDownRight />
            </a>
            <a className="text-link" href="#about">
              A little about me <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-art reveal-in">
          <div className="portrait-frame">
            <div className="portrait-glow" />
            <div
              className="portrait-initials"
              aria-label="Geetha Sujith monogram"
            >
              G<span>S</span>
            </div>
            <div className="code-chip chip-one">&lt;/&gt;</div>
            <div className="code-chip chip-two">01</div>
            <div className="availability">
              <span className="status-dot" /> Currently building
            </div>
          </div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
        </div>
      </div>

      <div className="container tool-strip" aria-label="Technologies">
        <span className="tool-strip-label">In my toolkit</span>
        <div className="tool-list">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
