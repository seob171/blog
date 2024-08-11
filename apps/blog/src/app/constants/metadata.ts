import type { Metadata } from "next";

export const META_DATA = {
  title: "ShimYuseob's blog",
  description:
    "프론트엔드 3년차 개발자 심유섭입니다. 강아지를 좋아하고 클린코드와 성능개선, 테스트코드에 관심이있습니다. 다양한 기술과 경험을 배워 지식을 공유하고 싶습니다.",
  url: "https://shimyuseob.xyz",
  openGraph: {
    images: [
      {
        url: "/api/og",
        alt: "Shimyuseob's blog og image",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

export const DEFAULT_META: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  openGraph: {
    title: META_DATA.title,
    description: META_DATA.description,
    url: META_DATA.url,
    siteName: META_DATA.title,
    images: [...META_DATA.openGraph.images],
  },
  metadataBase: new URL(META_DATA.url),
};

export const META_DATA_ICONS: Metadata["icons"] = [
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
];
