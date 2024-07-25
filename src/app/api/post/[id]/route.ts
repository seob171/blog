import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { isValidBody } from "@/types/post.type";

const prisma = new PrismaClient();

export const GET = async (
  request: NextRequest,
  { params: { id: postId } }: { params: { id: string } },
) => {
  const post = await prisma.posts.findUnique({
    where: { id: postId },
  });

  return NextResponse.json(post, { status: 200 });
};

export const PATCH = async (
  request: NextRequest,
  { params: { id: postId } }: { params: { id: string } },
) => {
  const data = await request.json();

  if (!isValidBody(data))
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  await prisma.posts.update({
    where: { id: postId },
    data,
  });

  return NextResponse.json(null, { status: 201 });
};

export const DELETE = async (
  request: NextRequest,
  { params: { id: postId } }: { params: { id: string } },
) => {
  await prisma.posts.delete({
    where: { id: postId },
  });

  return NextResponse.json(null, { status: 200 });
};
