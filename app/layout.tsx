import type { Metadata } from "next";
import { Raleway, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Project Tracker",
  description: "Track and Crack Projects in a Single Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased scroll-smooth", raleway.variable)}
    >
      <body className="min-h-full w-full flex flex-col">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
