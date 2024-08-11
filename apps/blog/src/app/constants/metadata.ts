import type { Metadata } from "next";

export const META_DATA = {
  title: "ShimYuseob's blog",
  description:
    "프론트엔드 3년차 개발자 심유섭입니다. 강아지를 좋아하고 클린코드와 성능개선, 테스트코드에 관심이있습니다. 다양한 기술과 경험을 배워 지식을 공유하고 싶습니다.",
  url: "https://shimyuseob.xyz",
} as const;

export const DEFAULT_METADATA: Metadata = {
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
