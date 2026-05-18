import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google"; // Added Google fonts here
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Configure Geist Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Inter and Outfit Fonts (Replacing your manual <link> tags)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// All head tags move here for performance and SEO optimization
export const metadata: Metadata = {
  title: "L'Eleganza d'Italia | Servizi Internazionali Premium",
  description: "Scopri la bellezza senza tempo, l'artigianato sofisticato e il lusso del design, della cultura e dello stile di vita italiano.",
  keywords: ["Italia", "lusso", "design", "stile di vita", "Costa Amalfitana", "arte italiana", "Mediterraneo"],
  icons: {
    icon: "/vite.svg", // Note: Ensure this file is placed in your /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
