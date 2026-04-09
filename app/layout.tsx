import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Digital Existence — Understand Your Digital Footprint",
  description:
    "Learn what data you leave behind online, why it matters, and how to take control — without the fearmongering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Digital Existence — calm,
          empowering education about the web.
        </footer>
      </body>
    </html>
  );
}
