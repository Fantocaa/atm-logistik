import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar-footer/Navbar";
import Footer from "@/components/navbar-footer/Footer";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growth Your Bussiness With Us | PT. ANUGERAH TRANS MARITIM",
  description: "Growth Your Bussiness With Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
