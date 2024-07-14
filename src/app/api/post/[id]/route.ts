import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { isValidBody } from "@/types/post.type";

const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params: { id: postId } }: { params: { id: string } },
) => {
  const post = await prisma.post.findUnique({
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

  await prisma.post.update({
    where: { id: postId },
    data: data,
  });

  return NextResponse.json(null, { status: 201 });
};
