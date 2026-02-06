import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Chatbot from "../components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hillside Ways Nursery and Primary School | Quality Education in Iganga",
  description:
    "Hillside Ways Nursery and Primary School offers quality education for nursery and primary students in Iganga Municipality, Uganda. Located on Kaliro Road, we provide excellent academic foundation for young learners.",
  keywords: "primary school Uganda, nursery education, Iganga school, Kaliro Road school, quality education Uganda, primary education",
  authors: [{ name: "Hillside Ways Nursery and Primary School" }],
  creator: "Hillside Ways Nursery and Primary School",
  metadataBase: new URL("https://hillsideways.ug"),
  alternates: {
    canonical: "https://hillsideways.ug",
  },
  openGraph: {
    title: "Hillside Ways Nursery and Primary School | Quality Education",
    description: "Building bright futures through quality education",
    type: "website",
    locale: "en_US",
    siteName: "Hillside Ways Nursery and Primary School",
    url: "https://hillsideways.ug",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hillside Ways Nursery and Primary School | Quality Education",
    description: "Building bright futures through quality education",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2545805112727180" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2545805112727180"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300`}>
        <div className="min-h-screen relative overflow-x-hidden">
          {/* Animated background elements */}
          <div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
