import { PrismaClient } from "@prisma/client";
import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

import { isValidBody } from "@/types/post.type";

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  const authorId = request.nextUrl.searchParams.get("user_id");

  if (authorId) {
    try {
      const authorization = request.headers.get("Authorization") ?? "";
      const [, accessToken] = authorization.split(" ");
      const payload = jwtDecode(accessToken ?? "");

      const isVerified = payload && authorId === payload.sub;

      const posts = await prisma.posts.findMany({
        where: { user_id: authorId, ...(!isVerified && { published: true }) },
        orderBy: { created_at: "desc" },
      });

      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

  try {
    const posts = await prisma.posts.findMany({
      where: { published: true },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  if (!isValidBody(data))
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const { id } = await prisma.posts.create({
    data,
  });

  return NextResponse.json({ id }, { status: 201 });
};
