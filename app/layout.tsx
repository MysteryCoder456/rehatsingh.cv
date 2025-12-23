import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rehatbir Singh",
  description: "Full-stack developer, systems architect, and life enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://umami.rehatsingh.cv/script.js"
          data-website-id="6d05defe-708b-41d7-91c1-40a55ec94f3d"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Create a responsive center element for main content */}
        <div className="grid grid-cols-12">
          <div className="px-4 md:px-0 py-4 min-h-screen col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
