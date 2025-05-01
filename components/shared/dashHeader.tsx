import { BellIcon } from "lucide-react";
import React from "react";

export default function DashHeader() {
  return (
    <div className=" w-full">
      <div className="bg-white p-5 rounded flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Welcome back, DamDev</h1>
          <p className="text-sm text-muted-foreground">
            Here's what's happening with your projects
          </p>
        </div>
        <div className="flex items-center gap-3">
            <BellIcon className="h-6 w-6" />
            <img className="h-8 w-8 rounded-full object-cover" src="https://img.freepik.com/free-photo/people-advertisement-clothing-concept-serious-man-hipster-with-trendy-haircut-red-beard-indicates-blank-space-his-t-shirt_273609-16619.jpg?semt=ais_hybrid&w=740" alt="" />
        </div>
      </div>
    </div>
  );
}
