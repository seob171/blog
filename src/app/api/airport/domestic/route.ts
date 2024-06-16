import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_INTERPARK_SERVICE_URL}/api/v1/search/airport/domestic/match`,
    {
      method: "POST",
      body: JSON.stringify({ format: "json" }),
    },
  );

  const data = await res.json();

  return NextResponse.json(data, { status: 200 });
}
