"use client";
import QuickLink from "@/components/pageComponents/dashboard/quickLink";
import SavedReadme from "@/components/pageComponents/dashboard/savedReadme";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <QuickLink />
      <div className="mt-10">
        <h1 className="text-xl font-bold">Previously Created Interview</h1>
        <SavedReadme/>
      </div>
    </div>
  );
}
