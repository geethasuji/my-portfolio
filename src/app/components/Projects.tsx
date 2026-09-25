"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/app/data/projects";

function ProjectCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="project-carousel">
      <div className="carousel-image-wrapper">
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          className="project-carousel-image"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="carousel-button carousel-prev"
              onClick={previous}
              aria-label="Previous screenshot"
            >
              ←
            </button>

            <button
              type="button"
              className="carousel-button carousel-next"
              onClick={next}
              aria-label="Next screenshot"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Show screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="eyebrow">
          <span /> Selected work
        </p>

        <h2>
          Building software for the work that happens <i>every day.</i>
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              {/* Project image carousel */}
              {project.images && project.images.length > 0 && (
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                />
              )}

              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {/* Live Demo */}
              {project.demo && (
                <div className="project-actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}