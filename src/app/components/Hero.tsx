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
            <span /> <b>Full Stack Developer</b>
          </p>

          <h1 className="reveal-up delay-1">
            Building complete <i>web applications.</i>
          </h1>

          <p className="hero-intro reveal-up delay-2">
            I&apos;m Geetha Sujith—a full stack developer who turns complex
            workflows into thoughtful, dependable digital experiences.
          </p>

          <div className="hero-actions reveal-up delay-3">
            <a className="button button-primary" href="#about">
              <b>Explore my work</b> <ArrowDownRight />
            </a>

            <a className="text-link" href="#about">
              <b>A little about me</b> <span>↓</span>
            </a>
          </div>
        </div>

        {/* Developer visual */}
        <div className="hero-art reveal-in">
          <div className="developer-orbit orbit-a" />
          <div className="developer-orbit orbit-b" />

          <div className="developer-card">
            <div className="developer-card-top">
              <span className="developer-label">GEETHA SUJITH</span>

              <span className="developer-status">
                <span /> Available
              </span>
            </div>

            <div className="developer-main">
              <div
                className="developer-monogram"
                aria-label="Geetha Sujith monogram"
              >
                G<span>S</span>
              </div>

              <div className="developer-role">
                <span>FULL STACK</span>
                <strong>DEVELOPER</strong>
              </div>
            </div>

            <div className="developer-code">
              <span className="code-line">
                <b>const</b> developer = &#123;
              </span>

              <span className="code-line indent">
                name: <i>&quot;Geetha&quot;</i>,
              </span>

              <span className="code-line indent">
                stack: <i>&quot;Full Stack&quot;</i>,
              </span>

              <span className="code-line indent">
                focus: <i>&quot;Web Apps&quot;</i>
              </span>

              <span className="code-line">&#125;;</span>
            </div>

            <div className="developer-stack">
              <span>React</span>
              <span>Next.js</span>
              <span>Python</span>
              <span>Django</span>
            </div>
          </div>

          <div className="floating-chip floating-chip-code">&lt;/&gt;</div>

          <div className="floating-chip floating-chip-api">API</div>

          <div className="floating-chip floating-chip-db">PostgreSQL</div>

          <div className="floating-note">
            <span className="status-dot" />
            Currently building
          </div>
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
