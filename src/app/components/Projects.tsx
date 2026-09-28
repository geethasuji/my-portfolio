"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  // Automatically move to the next screenshot every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-carousel">
      <div className="carousel-image-wrapper">
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          className="project-carousel-image"
          sizes="(max-width: 760px) 100vw, 33vw"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="carousel-button carousel-prev"
              onClick={previous}
              aria-label={`Previous ${title} screenshot`}
            >
              ←
            </button>

            <button
              type="button"
              className="carousel-button carousel-next"
              onClick={next}
              aria-label={`Next ${title} screenshot`}
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
              aria-label={`Show ${title} screenshot ${index + 1}`}
              aria-current={
                current === index ? "true" : undefined
              }
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <p className="carousel-counter">
          {current + 1} / {images.length}
        </p>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <div className="container">
        <p className="eyebrow">
          <span /> Selected work
        </p>

        <h2>
          Building software for the work that happens{" "}
          <i>every day.</i>
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              {/* Project image carousel */}
              {project.images &&
                project.images.length > 0 && (
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                  />
                )}

              {/* Project number and type */}
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              {/* Project title */}
              <h3>{project.title}</h3>

              {/* Project description */}
              <p>{project.description}</p>

              {/* Key Features */}
              <div className="project-features">
                <h4>Key Features</h4>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-tags">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              {/* View Project */}
              {project.demo && (
                <div className="project-actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project ↗
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