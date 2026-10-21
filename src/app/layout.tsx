import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/lang";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Bossy",
  description:
    "Coach Bossy — REPs UAE certified fitness coach. Programs, tips, and subscriptions.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@700;800&family=Cairo:wght@400;600;800&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
