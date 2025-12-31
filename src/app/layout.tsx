import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Satyanarayana Nursery Gardens | Palla Venkanna",
  description: "Experience nature's beauty at one of India's largest and oldest plant nurseries. Established in 1953 by Sri Palla Venkanna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

