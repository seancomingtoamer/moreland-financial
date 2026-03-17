import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moreland Financial Services | Credit Repair & Financial Consulting in Atlanta",
  description:
    "Professional credit repair, tax preparation, and financial consulting services in Atlanta, GA. Led by Bishop Alonzo Moreland — trusted community leader, veteran, and financial advocate.",
  keywords: [
    "credit repair Atlanta",
    "financial consulting Atlanta",
    "tax preparation Atlanta",
    "Alonzo Moreland",
    "credit score improvement",
    "Grove Park Atlanta",
  ],
  openGraph: {
    title: "Moreland Financial Services",
    description: "Professional Credit Repair & Financial Consulting in Atlanta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
