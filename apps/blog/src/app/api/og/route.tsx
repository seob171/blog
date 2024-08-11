import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  // Font
  const harmondExtBdItaExp = fetch(
    new URL("../../../fonts/Harmond-ExtBdItaExp.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const harmondSemBdItaCond = fetch(
    new URL("../../../fonts/Harmond-SemBdItaCond.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: 92,
            fontFamily: '"HarmondExtBdItaExp"',
          }}
        >
          ShimYuseob
        </h1>
        <span
          style={{
            fontSize: 52,
            fontFamily: '"HarmondSemBdItaCond"',
            paddingTop: 20,
          }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          's blog
        </span>
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "HarmondExtBdItaExp",
          data: await harmondExtBdItaExp,
          style: "normal",
          weight: 800,
        },
        {
          name: "HarmondSemBdItaCond",
          data: await harmondSemBdItaCond,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
