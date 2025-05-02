import SavedReadme from "@/components/pageComponents/dashboard/savedReadme";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function AllReadme() {
  return (
    <div>
      <h1 className="text-xl font-bold">Your Readme&apos;s</h1>
      <p className="text-sm text-muted-foreground mt-2 w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        minima quo natus, dicta eius, quisquam ad voluptates saepe aperiam
        accusamus ut numquam non? Repudiandae sapiente aut consectetur
        voluptatem tenetur nesciunt?
      </p>
      <div>
        <div className="bg-white mt-5 p-2 rounded-xl flex justify-center items-center gap-2">
            <SearchIcon className="mr-1 h-4 w-4 cursor-pointer" />
          <Input placeholder="Search readme" /> 
        </div>
        <SavedReadme />
      </div>
    </div>
  );
}
