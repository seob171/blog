import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const res = await fetch(
    "https://sky.interpark.com/api/v1/lowest/city/overseas",
  );

  const data = await res.json();

  return NextResponse.json(data, { status: 200 });
}
