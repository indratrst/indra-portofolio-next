import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/languageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indra Tristia - Frontend Developer",
  description:
    "Portfolio Indra Tristia, Frontend Developer menggunakan React & Next.js",
  openGraph: {
    title: "Indra Tristia - Frontend Developer",
    description: "Portfolio Indra Tristia, Frontend Developer",
    url: "https://indratrst-portofolio.vercel.app/",
    siteName: "Indra Portfolio",
    images: [
      {
        url: "https://indratrst-portofolio.vercel.app/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Indra Tristia",
    description: "Frontend Developer Portfolio",
    images: ["https://indratrst-portofolio.vercel.app/preview.png"],
  },
  icons: {
    icon: "/ico.png",
    shortcut: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
