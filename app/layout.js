import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bamfa's Portfolio",
  description:
    "Portfolio of Bamfa Ceesay — Software Developer specializing in React, Next.js, Node.js, and Mobile Development. Showcasing projects, skills, and experience.",
  keywords: [
    "Bamfa",
    "Bamfa Ceesay",
    "BC Tech",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Mobile Developer",
    "Gambia Tech",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bamfa Ceesay" }],
  creator: "Bamfa Ceesay",
  openGraph: {
    title: "Bamfa Ceesay | Software Developer & Mobile Engineer",
    description:
      "Explore my portfolio featuring modern web and mobile applications built using React, Next.js, Node.js, and more.",
    url: "https://bamfa-portfolio.vercel.app",
    siteName: "Bamfa's Portfolio",
    images: [
      {
        url: "./preview.svg",
        width: 1200,
        height: 630,
        alt: "Bamfa Ceesay Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "./bc-icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-gray-900 dark:text-white overflow-x-hidden`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
