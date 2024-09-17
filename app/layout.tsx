import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Header} from "@/components/header";
import {ThemeProvider} from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className={"relative flex min-h-screen flex-col bg-background"}>
          <Header/>
          <main>
            {children}
          </main>
        </div>
      </ThemeProvider>
      </body>
    </html>
);
}
