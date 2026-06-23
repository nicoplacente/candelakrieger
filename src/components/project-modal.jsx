"use client";

import { useCallback, useId, useRef, useState } from "react";
import { MediaTile } from "./media-tile";
import { ModalOverlay } from "./modal-overlay";
import { ProjectLightbox } from "./project-lightbox";

const categories = [
  { key: "renders", label: "Renders" },
  { key: "planos", label: "Planos" },
];

export default function ProjectModal({ project, projectCount, onClose }) {
  const availableCategories = categories.filter((category) => project.galleries[category.key].length > 0);
  const [activeCategory, setActiveCategory] = useState(availableCategories[0].key);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const tabsRef = useRef([]);
  const id = useId();

  function selectCategory(index) {
    setActiveCategory(availableCategories[index].key);
    setSelectedImageIndex(null);
    tabsRef.current[index]?.focus();
  }

  function handleKeyDown(event, index) {
    if (event.key === "ArrowRight") selectCategory((index + 1) % availableCategories.length);
    if (event.key === "ArrowLeft") selectCategory((index - 1 + availableCategories.length) % availableCategories.length);
    if (event.key === "Home") selectCategory(0);
    if (event.key === "End") selectCategory(availableCategories.length - 1);
  }

  const activeIndex = availableCategories.findIndex((category) => category.key === activeCategory);
  const activeItems = project.galleries[activeCategory];
  const activeImages = activeItems.filter((item) => item.type === "image");
  const selectedImage = selectedImageIndex === null ? null : activeImages[selectedImageIndex];

  const closeLightbox = useCallback(() => setSelectedImageIndex(null), []);
  const showPreviousImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) => (currentIndex - 1 + activeImages.length) % activeImages.length);
  }, [activeImages.length]);
  const showNextImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) => (currentIndex + 1) % activeImages.length);
  }, [activeImages.length]);

  function openImage(item) {
    setSelectedImageIndex(activeImages.findIndex((image) => image.id === item.id));
  }

  return (
    <ModalOverlay className="project-dialog" labelledBy={`${id}-title`} onClose={onClose} onEscape={selectedImage ? closeLightbox : onClose}>
      <div className="project-dialog__shell">
        <div className="project-dialog__content" inert={Boolean(selectedImage)}>
          <header className="project-dialog__header">
            <div><p className="project-index">{project.number} / {String(projectCount).padStart(2, "0")} — {project.location}</p><h2 id={`${id}-title`}>{project.title}</h2></div>
            <button className="dialog-close" type="button" onClick={onClose} aria-label={`Cerrar proyecto ${project.title}`}>Cerrar</button>
          </header>
          <div className={`project-dialog__tabs project-dialog__tabs--${availableCategories.length}`} role="tablist" aria-label={`Contenido de ${project.title}`}>
            {availableCategories.map((category, index) => (
              <button
                key={category.key}
                ref={(element) => { tabsRef.current[index] = element; }}
                id={`${id}-tab-${category.key}`}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.key}
                aria-controls={`${id}-panel`}
                tabIndex={activeCategory === category.key ? 0 : -1}
                onClick={() => selectCategory(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >{category.label}<span>{project.galleries[category.key].length.toString().padStart(2, "0")}</span></button>
            ))}
          </div>
          <section id={`${id}-panel`} className="project-dialog__gallery" role="tabpanel" aria-labelledby={`${id}-tab-${availableCategories[activeIndex].key}`}>
            {activeItems.map((item, index) => item.type === "image" ? (
              <button className="project-dialog__gallery-item" type="button" key={item.id} onClick={() => openImage(item)} aria-label={`Ampliar ${item.alt}`}>
                <MediaTile media={item} label={`${availableCategories[activeIndex].label} ${index + 1}`} sizes="(max-width: 760px) 100vw, 48vw" naturalRatio />
              </button>
            ) : <MediaTile key={item.id} media={item} label={`${availableCategories[activeIndex].label} ${index + 1}`} sizes="(max-width: 760px) 100vw, 48vw" />)}
          </section>
        </div>
        {selectedImage ? <ProjectLightbox categoryLabel={availableCategories[activeIndex].label} images={activeImages} imageIndex={selectedImageIndex} onClose={closeLightbox} onNext={showNextImage} onPrevious={showPreviousImage} /> : null}
      </div>
    </ModalOverlay>
  );
}
