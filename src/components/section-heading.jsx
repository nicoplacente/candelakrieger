export function SectionHeading({ eyebrow, title, centered = false, large = false }) {
  return (
    <div className={`section-heading${centered ? " section-heading--centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={large ? "display-title" : undefined}>{title}</h2>
    </div>
  );
}
