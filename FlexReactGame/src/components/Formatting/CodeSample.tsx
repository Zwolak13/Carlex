import type { ReactNode } from "react";
type CodeSampleProps = {
  children: ReactNode;
};

export default function CodeSample({ children }: CodeSampleProps) {
  return (
    <code className="bg-gray-100 text-sm text-gray-800 px-1 py-0.5 rounded">
      {children}
    </code>
  );
}
