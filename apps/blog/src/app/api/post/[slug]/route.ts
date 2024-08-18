import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { PrismaModels } from "@/types/prisma";

const prisma = new PrismaClient();
export const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) => {
  const post = await prisma.posts.findUnique({
    where: { slug },
  });

  if (!post) {
    return NextResponse.json(
      { error: `prisma.posts.findUnique error` },
      { status: 400 },
    );
  }

  return NextResponse.json(post, { status: 200 });
};

export const POST = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) => {
  const post = await prisma.posts.create({
    data: { slug, views: 0 },
  });

  if (!post) {
    return NextResponse.json(
      { error: `prisma.posts.create error` },
      { status: 400 },
    );
  }

  return NextResponse.json(post, { status: 200 });
};

export const PATCH = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) => {
  const { views } = (await request.json()) as PrismaModels["posts"];

  const post = await prisma.posts.update({
    where: { slug },
    data: { views },
  });

  if (!post) {
    return NextResponse.json(
      { error: `prisma.posts.update error` },
      { status: 400 },
    );
  }

  return NextResponse.json(post, { status: 200 });
};
