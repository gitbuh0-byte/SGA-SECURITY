import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGA Security | East Africa's Premier Security Partner",
  description: "Modern SGA Security landing page built in Next.js with a premium corporate security brand aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
