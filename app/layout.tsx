import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Your Digital Existence — Understand Your Digital Footprint",
  description:
    "Learn what data you leave behind online, why it matters, and how to take control — without the fearmongering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fafaf5] text-[#1a1c19]">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="bg-[#00353A] text-[#FAFAF5] py-12 px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="font-headline font-black text-[#FBBC00] uppercase text-xl block mb-2">
                Your Digital Existence
              </span>
              <p className="text-[#FAFAF5]/60 text-xs font-label uppercase tracking-widest">
                © {new Date().getFullYear()} — Calm, empowering digital education.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 font-label text-xs uppercase tracking-widest">
              <a href="/learn" className="text-[#FAFAF5]/70 hover:text-[#FBBC00] transition-colors">Learn</a>
              <a href="/tools" className="text-[#FAFAF5]/70 hover:text-[#FBBC00] transition-colors">Tools</a>
              <a href="/blog" className="text-[#FAFAF5]/70 hover:text-[#FBBC00] transition-colors">Blog</a>
              <a href="/about" className="text-[#FAFAF5]/70 hover:text-[#FBBC00] transition-colors">About</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
