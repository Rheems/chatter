import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/ui/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Chatter — Think it. Write it. Share it.",
    template: "%s | Chatter",
  },
  description:
    "Chatter is a publishing platform for African writers and readers who believe in the power of bold, long-form content.",
  keywords: ["publishing", "writing", "Nigeria", "Africa", "blog"],
  authors: [{ name: "Kareemah Ahmad" }],
  openGraph: {
    title: "Chatter — Think it. Write it. Share it.",
    description: "A publishing platform for African writers and readers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
