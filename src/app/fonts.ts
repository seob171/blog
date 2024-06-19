import LocalFont from "next/font/local";

export const cafe24MoyamoyaFont = LocalFont({
  src: [
    {
      path: "../fonts/cafe24/cafe24Moyamoya-Regular-v1.0.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cafe24-moyamoya",
});

export const cafe24SupermagicFont = LocalFont({
  src: [
    {
      path: "../fonts/cafe24/cafe24Supermagic-Bold-v1.0.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/cafe24/cafe24Supermagic-Regular-v1.0.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cafe24-supermagic",
});

export const cafe24OhsquareFont = LocalFont({
  src: [
    {
      path: "../fonts/cafe24/cafe24Ohsquare-v2.0.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cafe24-ohsquare",
});

export const cafe24OhsquareAirFont = LocalFont({
  src: [
    {
      path: "../fonts/cafe24/cafe24OhsquareAir-v2.0.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cafe24-ohsquareAir",
});
