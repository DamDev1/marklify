import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/shared/sidebar";
import DashHeader from "@/components/shared/dashHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your readmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="hidden md:block bg-white border-r w-60">
            <div className="fixed">
              <Sidebar />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col bg-secondary">
            <DashHeader />
            <main className="flex-1 p-5">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
