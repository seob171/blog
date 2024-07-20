import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";

export const getPost = async (postId: string) => {
  const res = await axiosInstance.get<PrismaModels["posts"]>(`/post/${postId}`);
  return res.data;
};

export const getManyPost = async () => {
  const res = await axiosInstance.get<Array<PrismaModels["posts"]>>(`/post`);
  return res.data;
};
