"use client";

import { useState } from "react";
import { Close, Menu } from "@/app/components/icons";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Training", href: "#training" },
  { label: "What I Do", href: "#what-i-do" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">

        {/* Brand */}
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Geetha Sujith home"
        >
          <span className="brand-mark">GS</span>

          <span>
            Geetha <em>Sujith</em>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/resume/Geetha_Sujith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>

        {/* Contact */}
        <a className="nav-contact" href="#contact">
          Let&apos;s talk <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Close /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/resume/Geetha_Sujith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume ↗
          </a>

          {/* Contact */}
          <a
            href="#contact"
            onClick={closeMenu}
          >
            Let&apos;s talk ↗
          </a>
        </div>

      </nav>
    </header>
  );
}