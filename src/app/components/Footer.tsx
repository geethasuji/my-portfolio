export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="brand" href="#home" aria-label="Back to top">
          <span className="brand-mark">GS</span>
          <span>
            Geetha <em>Sujith</em>
          </span>
        </a>

        <p>© {new Date().getFullYear()} Geetha Sujith. Built with care❤️.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}