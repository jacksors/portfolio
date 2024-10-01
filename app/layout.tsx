import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { NavigationContextProvider } from "@/contexts/navigation";
import { Analytics } from "@vercel/analytics/react";
import { LayoutTransition } from "@/components/animations/LayoutTransition";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackson Stone",
  description: "Jackson Stone's personal developer website.",
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <NavigationContextProvider>
        <body className={`${inter.className} antialiased bg-background`}>
          <div className={"relative flex min-h-screen flex-col"}>
            <Header />
            <main className="container mx-auto px-6 py-12">
              <LayoutTransition>{children}</LayoutTransition>
            </main>
          </div>
          <Toaster />
        </body>
      </NavigationContextProvider>
      <Analytics />
    </html>
  );
}
