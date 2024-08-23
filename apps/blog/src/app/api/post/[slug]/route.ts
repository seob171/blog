import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import {
  NOT_FOUND_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "@/app/constants/message";
import { PrismaModels } from "@/types/prisma";

const prisma = new PrismaClient();
export const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) => {
  try {
    const post = await prisma.posts.findUnique({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json(
        { data: null, message: NOT_FOUND_MESSAGE },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error, message: `prisma.posts.findUnique ${SERVER_ERROR_MESSAGE}` },
      { status: 500 },
    );
  }
};

export const POST = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) => {
  try {
    const post = await prisma.posts.create({
      data: { slug, views: 0 },
    });

    if (!post) {
      return NextResponse.json(
        { data: null, message: NOT_FOUND_MESSAGE },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error, message: `prisma.posts.create ${SERVER_ERROR_MESSAGE}` },
      { status: 500 },
    );
  }
};

export const PATCH = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) => {
  try {
    const { views } = (await request.json()) as PrismaModels["posts"];

    const post = await prisma.posts.update({
      where: { slug },
      data: { views },
    });

    if (!post) {
      return NextResponse.json(
        { data: null, message: NOT_FOUND_MESSAGE },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error, message: `prisma.posts.update ${SERVER_ERROR_MESSAGE}` },
      { status: 500 },
    );
  }
};
