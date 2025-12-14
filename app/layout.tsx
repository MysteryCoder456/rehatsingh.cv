import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Create a responsive center element for main content */}
        <div className="grid grid-cols-12">
          <div className="py-4 min-h-screen col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
