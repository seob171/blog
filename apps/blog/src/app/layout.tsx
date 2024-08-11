import type { Metadata } from "next";

import "./globals.css";
import GNB from "@/app/components/GNB";
import { DEFAULT_META, META_DATA_ICONS } from "@/app/constants/metadata";
import { harmondExtBdIta, pretendard } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  ...DEFAULT_META,
  icons: META_DATA_ICONS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          harmondExtBdIta.variable,
          pretendard.variable,
          "max-w-screen-md w-full mx-auto",
        )}
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
