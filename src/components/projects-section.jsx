import { projects } from "@/data/portfolio";
import { ProjectsShowcase } from "./projects-showcase";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section className="section projects" id="proyectos" aria-labelledby="projects-title">
      <div className="container">
        <div id="projects-title">
          <SectionHeading eyebrow="Portfolio selecto" title="Proyectos Destacados" centered large />
        </div>
        <ProjectsShowcase projects={projects} />
      </div>
    </section>
  );
}
