"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function ProjectLightbox({ categoryLabel, image, imageCount, imageIndex, onClose, onNext, onPrevious }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus({ preventScroll: true });

    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrevious]);

  return (
    <div className="project-lightbox" role="region" aria-label={`Vista ampliada de ${categoryLabel}`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-lightbox__toolbar">
        <p>{categoryLabel} <span>{String(imageIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</span></p>
        <button ref={closeButtonRef} className="project-lightbox__close" type="button" onClick={onClose}>Cerrar vista</button>
      </div>
      <div className="project-lightbox__stage">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" />
      </div>
      {imageCount > 1 ? (
        <div className="project-lightbox__navigation" aria-label="Navegación de imágenes">
          <button type="button" onClick={onPrevious} aria-label="Ver imagen anterior">← Anterior</button>
          <button type="button" onClick={onNext} aria-label="Ver imagen siguiente">Siguiente →</button>
        </div>
      ) : null}
    </div>
  );
}
