import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function RightSide() {
  const [markdown, setMarkdown] = useState(
    `# Prompt Stash Site\n\nWrite your README here...`
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Failed to copy");
    }
  };
  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-xs p-5 bg-white mt-5">
      <div className="flex flex-col gap-4 h-full">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-60 p-4 rounded border border-gray-300 resize-none"
          placeholder="Write your README..."
        />
        <button
          onClick={handleCopy}
          className="self-end px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Copy
        </button>
        <div className="prose prose-sm max-w-none bg-white p-4 rounded border overflow-auto h-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
