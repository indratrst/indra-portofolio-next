import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/languageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://indratrst-portofolio.vercel.app"),
  title: {
    default: "Indra Tristia | Frontend Developer",
    template: "%s | Indra Tristia",
  },
  description:
    "Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web technologies. Explore my projects, experience, and technical skills.",

  keywords: [
    "Indra Tristia",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Frontend Engineer",
    "Portfolio",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Indra Tristia",
    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web technologies. Explore my projects, experience, and technical skills.",
    images: ["https://indratrst-portofolio.vercel.app/preview.png"],
  },

  authors: [
    {
      name: "Indra Tristia",
    },
  ],
  creator: "Indra Tristia",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indra Tristia - Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web technologies. Explore my projects, experience, and technical skills.",
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
    alternateLocale: ["en_US"],
    type: "website",
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
