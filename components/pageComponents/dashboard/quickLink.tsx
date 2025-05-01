import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollText } from "lucide-react";
import Link from "next/link";

export default function QuickLink() {
  return (
    <div className="mt-5 flex md:flex-row flex-col  gap-4">
      <Link href="/dashboard/create-readme" className="w-full">
        <Card>
          <CardHeader>
            <div className="bg-blue-200 text-blue-60 p-2 rounded w-[3rem] flex justify-center">
              <ScrollText />
            </div>
            <CardTitle>Create Readme</CardTitle>
            <CardDescription>
              Let the world know about your project let ai handle the rest
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href="/dashboard/create-readme" className="w-full">
        <Card>
          <CardHeader>
            <div className="bg-blue-200 text-blue-60 p-2 rounded w-[3rem] flex justify-center">
              <ScrollText />
            </div>
            <CardTitle>Create Readme</CardTitle>
            <CardDescription>
              Let the world know about your project let ai handle the rest
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
