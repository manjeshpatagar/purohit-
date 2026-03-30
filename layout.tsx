import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Karnataka Purohit Services",
  description: "Bilingual Kannada and English Karnataka Purohit services website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kn">
      <body>
        <LanguageProvider>
          <TopBar />
          <Navbar />
          <main className="overflow-x-hidden pb-24 md:pb-0">{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
