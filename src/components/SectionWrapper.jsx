import { cn } from '../utils/cn';

export default function SectionWrapper({ id, className = '', children, label, title, description }) {
  return (
    <section id={id} className={cn('section-shell', className)} aria-labelledby={`${id}-title`}>
      <div className="section-grid">
        <div className="container-width">
          {label ? <span className="section-eyebrow">{label}</span> : null}
          {title ? (
            <h2 id={`${id}-title`} className="section-title">
              {title}
            </h2>
          ) : null}
          {description ? <p className="section-copy">{description}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
