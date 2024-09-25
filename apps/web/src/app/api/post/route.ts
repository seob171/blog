import { PrismaClient } from '@prisma/client';
import { jwtDecode } from 'jwt-decode';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { isValidBody } from '../../../types/post.type';

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  const creatorId = request.nextUrl.searchParams.get('creator_id');

  if (creatorId) {
    try {
      const authorization = request.headers.get('Authorization') ?? '';
      const [, accessToken] = authorization.split(' ');
      const payload = jwtDecode(accessToken ?? '');

      const isVerified = payload && creatorId === payload.sub;

      const posts = await prisma.posts.findMany({
        where: {
          creator_id: creatorId,
          ...(!isVerified && { published: true }),
        },
        orderBy: { created_at: 'desc' },
      });

      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

  try {
    const posts = await prisma.posts.findMany({
      where: { published: true },
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  if (!isValidBody(data)) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { id } = await prisma.posts.create({
    data,
  });

  return NextResponse.json({ id }, { status: 201 });
};
