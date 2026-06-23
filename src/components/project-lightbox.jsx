"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

const mobileTouchQuery = "(max-width: 760px) and (pointer: coarse)";
const minimumSwipeDistance = 50;
const directionLockDistance = 8;

export function ProjectLightbox({ categoryLabel, images, imageIndex, onClose, onNext, onPrevious }) {
  const closeButtonRef = useRef(null);
  const gestureRef = useRef(null);
  const pendingResetDirectionRef = useRef(null);
  const trackRef = useRef(null);
  const transitionDirectionRef = useRef(null);
  const resetFrameRef = useRef(null);
  const imageCount = images.length;
  const previousImageIndex = (imageIndex - 1 + imageCount) % imageCount;
  const nextImageIndex = (imageIndex + 1) % imageCount;
  const visibleImages = imageCount > 1
    ? [
        { media: images[previousImageIndex], position: "previous" },
        { media: images[imageIndex], position: "current" },
        { media: images[nextImageIndex], position: "next" },
      ]
    : [{ media: images[imageIndex], position: "current" }];

  useLayoutEffect(() => {
    const direction = pendingResetDirectionRef.current;
    const track = trackRef.current;
    if (!direction || !track) return;

    pendingResetDirectionRef.current = null;
    track.classList.add("is-resetting");
    track.classList.remove(`is-swiping-${direction}`);

    resetFrameRef.current = requestAnimationFrame(() => {
      track.classList.remove("is-resetting");
      resetFrameRef.current = null;
    });
  }, [imageIndex]);

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
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (resetFrameRef.current) cancelAnimationFrame(resetFrameRef.current);
    };
  }, [onNext, onPrevious]);

  function handlePointerDown(event) {
    if (imageCount <= 1 || event.pointerType !== "touch" || transitionDirectionRef.current || pendingResetDirectionRef.current || !window.matchMedia(mobileTouchQuery).matches) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    gestureRef.current = {
      axis: null,
      offset: 0,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
    };
    trackRef.current?.classList.add("is-dragging");
  }

  function handlePointerMove(event) {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    const horizontalDistance = event.clientX - gesture.startX;
    const verticalDistance = event.clientY - gesture.startY;

    if (!gesture.axis) {
      if (Math.max(Math.abs(horizontalDistance), Math.abs(verticalDistance)) < directionLockDistance) return;
      gesture.axis = Math.abs(horizontalDistance) > Math.abs(verticalDistance) ? "horizontal" : "vertical";
    }

    if (gesture.axis !== "horizontal") return;

    event.preventDefault();
    gesture.offset = horizontalDistance;
    trackRef.current?.style.setProperty("--swipe-offset", `${horizontalDistance}px`);
  }

  function finishGesture(event, cancelled = false) {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    gestureRef.current = null;
    const track = trackRef.current;
    if (!track) return;

    track.classList.remove("is-dragging");
    void track.offsetWidth;

    if (gesture.axis !== "horizontal") {
      track.style.removeProperty("--swipe-offset");
      return;
    }

    if (Math.abs(gesture.offset) < 1) {
      track.style.removeProperty("--swipe-offset");
      return;
    }

    const shouldChangeImage = !cancelled && Math.abs(gesture.offset) >= minimumSwipeDistance;
    if (!shouldChangeImage) {
      transitionDirectionRef.current = "cancel";
      track.style.removeProperty("--swipe-offset");
      return;
    }

    const direction = gesture.offset < 0 ? "next" : "previous";
    transitionDirectionRef.current = direction;
    track.classList.add(`is-swiping-${direction}`);
    track.style.removeProperty("--swipe-offset");
  }

  function handleTransitionEnd(event) {
    if (event.target !== trackRef.current || event.propertyName !== "transform") return;

    const direction = transitionDirectionRef.current;
    if (!direction) return;

    transitionDirectionRef.current = null;

    if (direction === "cancel") return;

    pendingResetDirectionRef.current = direction;

    if (direction === "next") onNext();
    else onPrevious();
  }

  return (
    <div className="project-lightbox" role="region" aria-label={`Vista ampliada de ${categoryLabel}`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-lightbox__toolbar">
        <p>{categoryLabel} <span>{String(imageIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</span></p>
        <button ref={closeButtonRef} className="project-lightbox__close" type="button" onClick={onClose}>Cerrar vista</button>
      </div>
      <div
        className="project-lightbox__stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishGesture}
        onPointerCancel={(event) => finishGesture(event, true)}
      >
        <div ref={trackRef} className={`project-lightbox__track${imageCount === 1 ? " project-lightbox__track--single" : ""}`} onTransitionEnd={handleTransitionEnd}>
          {visibleImages.map(({ media, position }) => (
            <div className="project-lightbox__slide" key={imageCount > 2 ? media.id : `${position}-${media.id}`} aria-hidden={position === "current" ? undefined : true}>
              <Image src={media.src} alt={position === "current" ? media.alt : ""} fill sizes="100vw" loading="eager" decoding="sync" />
            </div>
          ))}
        </div>
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
