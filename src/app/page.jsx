import Image from "next/image";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { CurrentYear } from "@/components/current-year";
import { ProjectsSection } from "@/components/projects-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { contact, education, experience, skills } from "@/data/portfolio";

const siteUrl = "https://candelakrieger.codeluxe.tech";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Candela Krieger",
      alternateName: "KC Interiorismo",
      url: siteUrl,
      image: `${siteUrl}/cande.webp`,
      jobTitle: "Diseñadora de interiores",
      email: contact.email,
      telephone: contact.phone,
      sameAs: [contact.linkedinUrl, contact.instagramUrl],
      knowsAbout: ["Diseño de interiores", "SketchUp", "AutoCAD", "V-Ray"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coronel Suárez",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: "KC Interiorismo",
      url: siteUrl,
      image: `${siteUrl}/images/residencia-almagro.png`,
      email: contact.email,
      telephone: contact.phone,
      founder: { "@id": `${siteUrl}/#person` },
      sameAs: [contact.linkedinUrl, contact.instagramUrl],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Buenos Aires, Argentina",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coronel Suárez",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      serviceType: [
        "Diseño de interiores",
        "Interiorismo residencial",
        "Renders arquitectónicos",
        "Planos técnicos",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            src="/images/residencia-almagro.png"
            alt="Interior contemporáneo sereno y luminoso"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Interiorismo &amp; Dirección Creativa</p>
            <h1 id="hero-title">
              Diseño de Interiores
              <br />
              con identidad propia
            </h1>
            <a className="button" href="#proyectos">
              Ver proyectos
            </a>
          </div>
          <p className="hero-note">Coronel Suárez — Buenos Aires</p>
        </section>

        <section
          className="section about"
          id="sobre-mi"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="portrait-frame">
              <Image
                src="/cande.webp"
                alt="Candela Krieger | Diseñadora de interiores"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow">Sobre mí</p>
              <h2 id="about-title">
                Interiores pensados para habitar con bienestar.
              </h2>
              <p>
                Diseñadora de interiores graduada, enfocada en la creación de
                espacios funcionales, estéticos y personalizados. Experiencia en
                proyectos residenciales, desarrollo de propuestas de
                interiorismo, selección de materiales y elaboración de renders.
              </p>
              <p>
                Integro mi formación en Psicopedagogía y Comunicación con la
                mirada del interiorismo para crear espacios que respondan a las
                necesidades de cada cliente.
              </p>
              <dl className="about-facts">
                <div>
                  <dt>Enfoque</dt>
                  <dd>Interiores con alma y funcionalidad real</dd>
                </div>
                <div>
                  <dt>Ubicación</dt>
                  <dd>{contact.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          className="section section--tinted"
          id="experiencia"
          aria-labelledby="experience-title"
        >
          <div className="container">
            <div id="experience-title">
              <SectionHeading
                eyebrow="Trayectoria"
                title="Experiencia Profesional"
              />
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="experience-card" key={item.role}>
                  <div>
                    <h3>{item.role}</h3>
                    <time>{item.period}</time>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section
          className="section"
          id="formacion"
          aria-labelledby="education-title"
        >
          <div className="container">
            <div id="education-title">
              <SectionHeading eyebrow="Formación" title="Educación" />
            </div>
            <div className="education-grid">
              {education.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CertificatesSection />

        <section
          className="section section--tinted"
          id="habilidades"
          aria-labelledby="skills-title"
        >
          <div className="container">
            <div id="skills-title">
              <SectionHeading eyebrow="Competencias" title="Habilidades" />
            </div>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#inicio">
          KC Interiorismo
        </a>
        <nav aria-label="Redes sociales">
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
        <p>
          © <CurrentYear /> KC Interiorismo. Todos los derechos reservados.
        </p>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
