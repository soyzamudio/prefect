import { useEffect } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Prism: any;

export default function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = true,
  title,
}: CodeBlockProps) {
  useEffect(() => {
    if (typeof Prism !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, language]);

  return (
    <div className="rounded-lg overflow-hidden">
      {title && (
        <div className="border-gray-700 bg-gray-800 px-4 py-2 border-b font-mono text-gray-200 text-sm">
          {title}
        </div>
      )}
      <pre
        className={`language-${language} ${
          showLineNumbers ? "line-numbers" : ""
        } p-4 bg-gray-900 overflow-x-auto m-0`}
      >
        <code className={`language-${language} text-sm`}>{code.trim()}</code>
      </pre>
    </div>
  );
}
