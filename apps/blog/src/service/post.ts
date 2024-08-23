import { ApiResponse } from "@/types/api";
import { PrismaModels } from "@/types/prisma";

export const getPost = async ({
  slug,
}: Pick<PrismaModels["posts"], "slug">): Promise<
  ApiResponse<PrismaModels["posts"]>
> => {
  const res = await fetch(`/api/post/${slug}`);

  return res.json();
};

export const createPost = async ({
  slug,
}: Pick<PrismaModels["posts"], "slug">): Promise<
  ApiResponse<PrismaModels["posts"]>
> => {
  const res = await fetch(`/api/post/${slug}`, { method: "POST" });

  return res.json();
};

export const updatePost = async ({
  slug,
  views,
}: PrismaModels["posts"]): Promise<ApiResponse<PrismaModels["posts"]>> => {
  const res = await fetch(`/api/post/${slug}`, {
    method: "PATCH",
    body: JSON.stringify({ views }),
  });

  return res.json();
};
