import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/dark-light"

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bjj",
  description: "Site Bjj",
  keywords: [
    "NextJS",
    "React",
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "TypeScript",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
