import { GalleryVerticalEnd } from "lucide-react";
import React from "react";


export default function Logo() {
  return (
    <div className="flex justify-center gap-2 md:justify-start">
      <a href="#" className="flex items-center gap-2 font-medium">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-primary-foreground">
          <GalleryVerticalEnd className="size-5" />
        </div>
       <span className="text-lg"> Marklify</span>
      </a>
    </div>
  );
}
