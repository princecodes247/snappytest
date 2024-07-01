import type { Metadata } from "next";
import { Gloock, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const gloock = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-gloock" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400", variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "SnappyRomance",
  description: "SnappyRomance is the place to go when you want to connect with your soulmate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(gloock.variable, dmSans.variable, inter.className)}>{children}</body>
    </html>
  );
}
