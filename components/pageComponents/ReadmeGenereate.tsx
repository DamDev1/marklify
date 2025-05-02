"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyIcon } from "lucide-react";

interface CodeProps {
  inline: boolean;
  className: string;
  children: React.ReactNode;
  [key: string]: any; // for the ...props rest property
}

export default function ReadmeGenereate({readmeContent}:{readmeContent:string}) {
  const [copied, setCopied] = useState(false);
  const markdownRef = useRef<HTMLDivElement>(null);

  const handleCopyRawMarkdown = () => {
    if (readmeContent) {
      navigator.clipboard
        .writeText(readmeContent)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy markdown: ", err);
        });
    }
  };

  const components = {
ode({ inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || "");
      return inline ? (
        <code className="bg-gray-200 px-1 rounded text-sm" {...props}>
          {children}
        </code>
      ) : (
        <div className="relative">
          <div className="flex justify-between items-center bg-gray-800 text-gray-300 px-4 py-2 rounded-t-md">
            <span>{match?.[1] || "code"}</span>
          </div>
          <pre className="bg-gray-800 rounded-b-md p-4 overflow-x-auto">
            <code className={`text-gray-100 ${className}`} {...props}>
              {children}
            </code>
          </pre>
        </div>
      );
    },
    h1: (props: React.HTMLAttributes<HTMLElement>) => (
      <h1 className="text-3xl font-bold text-gray-800 mb-6" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLElement>) => (
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 mt-8" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLElement>) => (
      <h3 className="text-xl font-medium text-gray-700 mb-3 mt-6" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLElement>) => <p className="text-gray-600 mb-4" {...props} />,
    ul: (props: React.HTMLAttributes<HTMLElement>) => (
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLElement>) => (
      <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-4" {...props} />
    ),
    a: (props: React.HTMLAttributes<HTMLElement>) => (
      <a
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4"
        {...props}
      />
    ),
  };

  return (
    <div className=" bg-gradient-to-b">
      
      <div className="max-w-4xl mx-auto">

        {/* README Container */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* README Header */}
          <div className="bg-gray-800 text-white p-6">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <h2 className="text-2xl font-bold">README.md</h2>
              <div className="flex gap-3">
                <Button
                  onClick={handleCopyRawMarkdown}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  <CopyIcon className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy Markdown"}
                </Button>
              </div>
            </div>
            <p className="text-gray-300 mt-2">
              Displaying README content from API
            </p>
          </div>

          {/* README Content */}
          <div className="p-6 prose prose-lg max-w-none" ref={markdownRef}>
            {readmeContent ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {readmeContent}
              </ReactMarkdown>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>Click &apos;Generate README&apos; to fetch and display the content</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
