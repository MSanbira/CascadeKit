import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './CodeBlock.css';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  className?: string;
  mixin?: MixinProps;
}

export function CodeBlock({ 
  children, 
  language = 'css', 
  filename, 
  className = '', 
  mixin 
}: CodeBlockProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <div className={classNames('CodeBlock--root', [mixinClassName, className])} style={mixinStyle}>
      {filename && (
        <div className="CodeBlock--header">
          <span className="CodeBlock--filename">{filename}</span>
          <span className="CodeBlock--language">{language}</span>
        </div>
      )}
      <pre className="CodeBlock--pre">
        <code className={`CodeBlock--code language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}
