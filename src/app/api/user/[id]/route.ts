import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params: { id: userId } }: { params: { id: string } },
) => {
  const user = await prisma.profiles.findUnique({
    where: { id: userId },
  });

  return NextResponse.json(user, { status: 200 });
};
