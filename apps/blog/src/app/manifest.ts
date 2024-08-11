import type { MetadataRoute } from "next";
import { META_DATA } from "@/app/constants/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: META_DATA.title,
    short_name: META_DATA.title,
    description: META_DATA.title,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: `/favicon/favicon.ico`,
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
