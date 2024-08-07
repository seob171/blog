import type { Metadata } from "next";

import "./globals.css";
import GNB from "@/app/components/GNB";
import { META_DATA } from "@/app/constants/metadata";
import { pretendard } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  openGraph: {
    title: META_DATA.title,
    description: META_DATA.description,
    url: META_DATA.url,
    siteName: META_DATA.title,
  },
  metadataBase: new URL(META_DATA.url),
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
        <main className="flex flex-col gap-y-5 min-h-screen p-6">
          <GNB />
          {children}
        </main>
      </body>
    </html>
  );
}
