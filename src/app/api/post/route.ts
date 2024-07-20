import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { isValidBody } from "@/types/post.type";

const prisma = new PrismaClient();

export const GET = async () => {
  const posts = await prisma.posts.findMany();

  return NextResponse.json(posts, { status: 200 });
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
