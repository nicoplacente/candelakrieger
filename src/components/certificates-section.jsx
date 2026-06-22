"use client";

import { useId, useState } from "react";
import { certificates } from "@/data/portfolio";
import { MediaTile } from "./media-tile";
import { ModalOverlay } from "./modal-overlay";
import { SectionHeading } from "./section-heading";

export function CertificatesSection() {
  const [selected, setSelected] = useState(null);
  const titleId = useId();

  function closeDialog() {
    setSelected(null);
  }

  return (
    <section className="section certificates-section" id="certificados" aria-labelledby="certificates-title">
      <div className="container">
        <div id="certificates-title"><SectionHeading eyebrow="Acreditaciones" title="Certificados" /></div>
        <div className="certificate-masonry">
          {certificates.map((certificate) => (
            <button className="certificate-card" type="button" key={certificate.id} onClick={() => setSelected(certificate)} aria-label={`Abrir certificado: ${certificate.title}`}>
              <MediaTile media={certificate} label="Certificado" sizes="(max-width: 760px) 100vw, 33vw" />
              <span className="certificate-caption"><strong>{certificate.title}</strong><small>{certificate.issuer} — {certificate.year}</small></span>
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <ModalOverlay className="image-dialog" labelledBy={titleId} onClose={closeDialog}>
          <div className="image-dialog__content">
            <button className="dialog-close" type="button" onClick={closeDialog} aria-label="Cerrar certificado">Cerrar</button>
            <MediaTile media={selected} label="Certificado" sizes="90vw" />
            <div><p className="eyebrow">{selected.issuer} — {selected.year}</p><h2 id={titleId}>{selected.title}</h2></div>
          </div>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
