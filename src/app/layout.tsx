import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import secondaryFont from "next/font/local";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "./_components/theme-provider";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontAnton = secondaryFont({
  src: "../assets/fonts/Anton-Regular.ttf",
  variable: "--font-secondary",
});

const fontHeading = localFont({
  src: "../assets/fonts/Antonio-Bold.ttf",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Aprenda Investir",
  description: "A importância do conhecimento sobre investimentos e finanças",
  keywords: ["CDB", "LCI", "LCA", "Poupança", "LCI VS CDB", "TESOURO SELIC"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontAnton.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
