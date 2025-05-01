"use client";
import sidebarLinks from "@/lib/sidebarLinks";
import { LayoutDashboard, FileText, ScrollText, CreditCard, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import { JSX } from "react";
import { usePathname } from "next/navigation";

const icons: { [key: string]: JSX.Element } = {
    LayoutDashboard: <LayoutDashboard size={20} className="font-bold"/>,
    FileText: <FileText  size={20} className="font-bold"/>,
    ScrollText: <ScrollText  size={20} className="font-bold"/>,
    CreditCard: <CreditCard  size={20} className="font-bold"/>,
    Settings: <Settings  size={20} className="font-bold"/>,
  };
  

export default function Sidebar() {
    const params = usePathname()
  return (
    <div className="border-r border-gray-200 h-[100vh] w-[15rem] bg-white p-5">
      <Logo />
      <div className="mt-5 flex justify-center">
        <Button className="w-full">Create Readmi</Button>
      </div>
      {sidebarLinks.map((link, index) => (
        <div key={index} className={`mt-5 flex items-center gap-1 p-2  ${params === link.href ? "bg-secondary text-blue-600 rounded-lg" : "text-gray-500"}`}>
          {link.icon in icons && <span>{icons[link.icon]}</span>}
          <Link href={link.href} className="font-medium">
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
