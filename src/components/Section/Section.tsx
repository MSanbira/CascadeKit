import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`Section--root ${className}`.trim()}>
      {children}
    </section>
  );
}
