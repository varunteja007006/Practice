import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { cn } from "@/lib/utils";
// Import css files for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <body className={cn("bg-black scroll-smooth", inter.className ?? "")}>
        <main>
          <Navbar />
          <div className="px-4 py-2 text-white min-h-screen">{children}</div>
        </main>
      </body>
    </html>
  );
}
