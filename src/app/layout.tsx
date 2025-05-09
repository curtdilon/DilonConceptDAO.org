import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilon Concept DAO",
  description: "Empowering Communities Through Decentralized Governance and Resource Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-start pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

