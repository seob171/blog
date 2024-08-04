import React from "react";

import type { Metadata } from "next";
import "./globals.css";

import { lineFont } from "@/app/fonts";
import AuthEventListener from "@/components/auth/AuthEventListener";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "개인 블로그",
  description: "학습 및 기록용 개인 블로그입니다.",
  authors: { url: "https://github.com/seob171", name: "shimyuseob" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lineFont.variable)}>
        <QueryProvider>
          <main className="flex min-h-screen justify-center">
            <section className="flex flex-col min-h-screen h-full max-w-screen-md w-full bg-background">
              {children}
            </section>
          </main>
          <AuthEventListener />
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
