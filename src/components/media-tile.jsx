import Image from "next/image";

export function MediaTile({ media, label, sizes = "(max-width: 760px) 100vw, 50vw", previewDocument = true, naturalRatio = false }) {
  const ratio = `${media.width} / ${media.height}`;
  const isDocument = media.type === "document";

  return (
    <div className={`media-tile${isDocument ? " media-tile--document" : ""}${naturalRatio ? " media-tile--natural" : ""}${media.src ? "" : " media-tile--placeholder"}`} style={naturalRatio ? undefined : { aspectRatio: ratio }}>
      {isDocument && previewDocument ? (
        <iframe src={media.src} title={media.alt} loading="lazy" />
      ) : isDocument ? (
        <div className="media-document-cover" aria-label={media.alt} role="img">
          <span>PDF</span>
          <small>{label}</small>
        </div>
      ) : media.src && naturalRatio ? (
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading={media.loading}
          fetchPriority={media.fetchPriority}
          sizes={sizes}
        />
      ) : media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          loading={media.loading}
          fetchPriority={media.fetchPriority}
          sizes={sizes}
        />
      ) : (
        <div className="media-placeholder" aria-label={`${media.alt}. Imagen pendiente de cargar.`} role="img">
          <span>{label}</span>
          <small>Imagen pendiente</small>
        </div>
      )}
    </div>
  );
}
