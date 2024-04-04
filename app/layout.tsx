import type { Metadata } from "next";
import { DM_Sans, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = DM_Sans({ subsets: ["latin"] });
const kalam = Kalam({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Deliveroo",
  description: "Deliveroo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar className={kalam.className} />
        <main className="mb-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
