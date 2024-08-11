import type { Metadata } from "next";

import "./globals.css";
import GNB from "@/app/components/GNB";
import { DEFAULT_METADATA } from "@/app/constants/metadata";
import { pretendard } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  icons: [
    {
      url: "/favicon/favicon-16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon/favicon-32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon/android-chrome-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/favicon/android-chrome-512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(pretendard.variable, "max-w-screen-md w-full mx-auto")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col gap-y-5 min-h-screen p-6">
            <GNB />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
