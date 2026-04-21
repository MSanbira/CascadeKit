import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
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
  const [highlightedHtml, setHighlightedHtml] = useState<string>('');

  useEffect(() => {
    codeToHtml(children, {
      lang: language,
      theme: 'github-dark',
    }).then(setHighlightedHtml);
  }, [children, language]);

  return (
    <div className={classNames('CodeBlock--root', [mixinClassName, className])} style={mixinStyle}>
      {filename && (
        <div className="CodeBlock--header">
          <span className="CodeBlock--filename">{filename}</span>
          <span className="CodeBlock--language">{language}</span>
        </div>
      )}
      {highlightedHtml ? (
        <div className="CodeBlock--shiki" dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
      ) : (
        <pre className="CodeBlock--pre">
          <code className={`CodeBlock--code language-${language}`}>
            {children}
          </code>
        </pre>
      )}
    </div>
  );
}
