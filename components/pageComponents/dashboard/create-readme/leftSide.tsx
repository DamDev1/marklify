import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function LeftSide() {
  return (
    <div className="mt-5">
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-xs p-5 bg-white">
        <form className="grid gap-2">
          <Label>Github Url</Label>
          <Input placeholder="https://github.com/damdev" />
        </form>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Suggestion's</p>
      <div className="divide-y mt-2 divide-gray-200 rounded-xl border border-gray-200 shadow-xs p-5 bg-white">
        <h1 className="text-lg font-bold">Prompt Stash Site</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Prompt Stash Site is a web application designed as the official
          website for Prompt Stash, offering users an intuitive and engaging way
          to explore prompts and related resources.
        </p>
      </div>
      <div className="divide-y mt-2 divide-gray-200 rounded-xl border border-gray-200 shadow-xs p-5 bg-white">
        <h1 className="text-lg font-bold">Prompt Stash Site</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Prompt Stash Site is a web application designed as the official
          website for Prompt Stash, offering users an intuitive and engaging way
          to explore prompts and related resources.
        </p>
      </div>
    </div>
  );
}
