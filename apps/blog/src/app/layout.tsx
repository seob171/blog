import type { Metadata } from "next";

import "./globals.css";
import GNB from "@/app/components/GNB";
import { pretendard } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ShimYuseob's blog",
  description:
    "프론트엔드 3년차 개발자 심유섭입니다. 강아지를 좋아하고 클린코드와 성능개선, 테스트코드에 관심이있습니다. 다양한 기술과 경험을 배워 지식을 공유하고 싶습니다.",
  openGraph: {
    title: "ShimYuseob's blog",
    description:
      "프론트엔드 3년차 개발자 심유섭입니다. 강아지를 좋아하고 클린코드와 성능개선, 테스트코드에 관심이있습니다. 다양한 기술과 경험을 배워 지식을 공유하고 싶습니다.",
    url: "https://shimyuseob.vercel.app",
    siteName: "ShimYuseob's blog",
  },
  metadataBase: new URL("https://shimyuseob.vercel.app"),
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
