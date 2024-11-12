import CodeBlock from "./codeblock";

interface CardProps {
  title: string;
  codeSnippet: string;
  children: React.ReactNode;
}

export default function Card({ title, children, codeSnippet }: CardProps) {
  return (
    <div className="flex flex-col flex-1 gap-4 border-gray-700 bg-neutral-900 p-4 border rounded-lg">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="text-gray-300 text-sm">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-2">
            <h5 className="font-bold text-lg">Preview</h5>
            {children}
          </div>
          <div className="flex flex-col gap-y-2">
            <h5 className="font-bold text-lg">Code Sample</h5>
            <CodeBlock language="typescript" code={codeSnippet} />
          </div>
        </div>
      </div>
    </div>
  );
}
