import LocalFont from "next/font/local";

export const wavveFont = LocalFont({
  src: [
    {
      path: "../fonts/wavve/WavvePADO-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--wavve-font",
});
