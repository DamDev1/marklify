"use client";
import Plan from "@/components/pageComponents/dashboard/billings/plan";
import React from "react";

export default function Billings() {
  return (
    <div className="">
      <h1 className="text-xl font-bold">Our Pricing</h1>
      <p className="text-sm text-muted-foreground">
        Choose a plan that works best for you
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mt-5">
        <Plan />
      </div>
    </div>
  );
}
