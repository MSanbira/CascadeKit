import { classNames } from '../../helpers/classNameHelper';
import './Heading.css';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Heading({ level = 2, children, className = '', id }: HeadingProps) {
  const Tag = `h${level}` as const;
  
  return (
    <Tag 
      id={id}
      className={classNames('Heading', [`Heading--h${level}`, className])}
    >
      {children}
    </Tag>
  );
}
