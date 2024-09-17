import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/header";
import {Inter} from "next/font/google";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jackson Stone",
  description: "Jackson Stone's personal developer website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background`}
      >
      <div className={"relative flex min-h-screen flex-col"}>
        <Header/>
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>
      </div>
      </body>
    </html>
);
}
