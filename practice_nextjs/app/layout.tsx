import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTK",
  description: "Varun's Portfolio & his react practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black scroll-smooth", inter.className)}>
        <Navbar />
        <main className="px-4 py-2 text-white">{children}</main>
      </body>
    </html>
  );
}
