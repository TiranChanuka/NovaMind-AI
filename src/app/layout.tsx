import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaMind AI | Intelligent Automation for the Future",
  description:
    "NovaMind AI delivers cutting-edge artificial intelligence solutions including AI automation, machine learning, and data analytics to transform your business operations and drive innovation.",
  keywords: [
    "AI automation",
    "machine learning",
    "data analytics",
    "artificial intelligence",
    "business automation",
    "AI solutions",
    "neural networks",
    "predictive analytics",
  ],
  authors: [{ name: "NovaMind AI" }],
  openGraph: {
    title: "NovaMind AI | Intelligent Automation for the Future",
    description:
      "Transform your business with cutting-edge AI solutions. From automation to analytics, NovaMind AI powers the future of intelligent enterprise.",
    type: "website",
    locale: "en_US",
    siteName: "NovaMind AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaMind AI | Intelligent Automation for the Future",
    description:
      "Transform your business with cutting-edge AI solutions. From automation to analytics, NovaMind AI powers the future.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
