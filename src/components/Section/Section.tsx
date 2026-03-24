import { classNames } from '../../helpers/classNameHelper';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={classNames('Section', [className])}>
      {children}
    </section>
  );
}
