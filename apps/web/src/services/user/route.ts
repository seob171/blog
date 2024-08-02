import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";

export const getUser = async ({ id }: Pick<PrismaModels["profiles"], "id">) => {
  const res = await axiosInstance.get<PrismaModels["profiles"]>(`/user/${id}`);
  return res.data;
};

export const getManyUser = async () => {
  const res = await axiosInstance.get<Array<PrismaModels["profiles"]>>(`/user`);
  return res.data;
};
