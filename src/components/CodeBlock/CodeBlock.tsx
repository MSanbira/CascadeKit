import './CodeBlock.css';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ children, language = 'css', filename }: CodeBlockProps) {
  return (
    <div className="CodeBlock--root">
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
