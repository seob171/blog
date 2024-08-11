import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Shimyuseob's blog og image";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const harmondExtBdItaExp = fetch(
    new URL("../fonts/Harmond-ExtBdItaExp.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const harmondSemBdItaCond = fetch(
    new URL("../fonts/Harmond-SemBdItaCond.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 92,
              fontFamily: '"Harmond-ExtBdItaExp"',
            }}
          >
            ShimYuseob's
          </h1>
          <span
            style={{
              fontSize: 52,
              fontFamily: '"Harmond-SemBdItaCond"',
            }}
          >
            blog
          </span>
        </div>
        <span
          style={{
            fontSize: 40,
            fontFamily: '"Harmond-SemBdItaCond"',
          }}
        >
          https://shimyuseob.xyz
        </span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
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
