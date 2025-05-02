"use client";
import LeftSide from "@/components/pageComponents/dashboard/create-readme/leftSide";
import RightSide from "@/components/pageComponents/dashboard/create-readme/rightSide";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-xl font-bold">Create readme</h1>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        consectetur voluptatum a nemo animi, dolore quod
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div >
          <LeftSide />
        </div>
        <RightSide />
      </div>
    </div>
  );
}
