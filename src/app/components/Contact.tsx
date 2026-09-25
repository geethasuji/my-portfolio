type ContactProps = {
  email?: string;
};

export default function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-wrapper">
        <div className="contact-background-text">
          LET&apos;S TALK
        </div>

        <div className="contact-top">
          <p className="eyebrow contact-eyebrow">
            <span /> Get in touch
          </p>

        </div>

        <div className="contact-grid">
          <div className="contact-heading">
            <h2>
              Let&apos;s build something
              <i> meaningful.</i>
            </h2>
          </div>

          <div className="contact-info">
            <p>
              Whether you have a project in mind, want to discuss an
              opportunity, or simply want to connect, I&apos;d be happy to
              hear from you.
            </p>

            {email && (
              <a
                className="contact-email"
                href={`mailto:${email}`}
              >
                {email}
                <span>↗</span>
              </a>
            )}

            <div className="contact-details">
              <div>
                <span>Based in</span>
                <strong>Dubai, UAE</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Full Stack Development</strong>
              </div>
            </div>
          </div>
        </div>

        {email && (
          <div className="contact-action">
            <a
              className="contact-button"
              href={`mailto:${email}`}
            >
              Start a conversation
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}