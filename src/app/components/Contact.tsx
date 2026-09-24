type ContactProps = {
  email?: string;
};

export default function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-content">
        <p className="eyebrow">
          <span /> Get in touch
        </p>

        <h2>
          Have an idea in mind? Let&apos;s make it <i>useful.</i>
        </h2>

        <p>
          I&apos;d be happy to connect about full stack development,
          collaboration, and thoughtful digital products.
        </p>

        {email ? (
          <a className="button button-primary" href={`mailto:${email}`}>
            Send an email <span>↗</span>
          </a>
        ) : (
          <p className="contact-note">
            Contact details will be added here.
          </p>
        )}
      </div>
    </section>
  );
}