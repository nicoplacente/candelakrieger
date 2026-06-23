"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectModal from "./project-modal";

export function ProjectsShowcase({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  function closeProject() {
    setSelectedProject(null);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let animationContext;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/dist/ScrollTrigger")]).then(([gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      animationContext = gsap.context(() => {
        const projectElements = gsap.utils.toArray(".project");
        projectElements.forEach((project, index) => {
          const copy = project.querySelector(".project-copy");
          const image = project.querySelector(".project-cover img");

          gsap.fromTo(project, { autoAlpha: 0, y: 48 }, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: project, start: "top 82%", once: true },
          });
          gsap.fromTo(copy, { x: index % 2 === 0 ? 28 : -28 }, {
            x: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: project, start: "top 78%", once: true },
          });
          gsap.fromTo(image, { yPercent: -3, scale: 1.04 }, {
            yPercent: 3,
            scale: 1.04,
            ease: "none",
            scrollTrigger: { trigger: project, start: "top bottom", end: "bottom top", scrub: 1.2 },
          });
        });
      }, sectionRef);
    });

    return () => {
      cancelled = true;
      animationContext?.revert();
    };
  }, []);

  return (
    <div className="project-list" ref={sectionRef}>
      {projects.map((project, index) => (
        <article className={`project${project.reverse ? " project--reverse" : ""}`} key={project.title}>
          <div className="project-cover">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority={index === 0}
              loading={project.cover.loading}
              fetchPriority={project.cover.fetchPriority}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <span aria-hidden="true">{project.number}</span>
          </div>
          <div className="project-copy">
            <p className="project-index">{project.number} / {String(projects.length).padStart(2, "0")} — {project.location}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.services.length > 0 ? (
              <ul className="service-list" aria-label="Servicios realizados">
                {project.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            ) : null}
            <button className="text-link" type="button" onClick={() => setSelectedProject(project)}>Ver proyecto completo</button>
          </div>
        </article>
      ))}
      {selectedProject ? <ProjectModal project={selectedProject} projectCount={projects.length} onClose={closeProject} /> : null}
    </div>
  );
}
