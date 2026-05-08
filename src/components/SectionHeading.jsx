export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </header>
  );
}
