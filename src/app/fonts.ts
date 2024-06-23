import LocalFont from "next/font/local";

export const lineFont = LocalFont({
  src: [
    {
      path: "../fonts/line/LINESeedKR-Th.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/line/LINESeedKR-Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/line/LINESeedKR-Bd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-line",
});
