import axiosInstance from "@/lib/api";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { PrismaModels } from "@/lib/prisma";
import { AxiosError } from "axios";

const useCreatePost = (
  options: UseMutationOptions<
    Pick<PrismaModels["Post"], "id">,
    AxiosError,
    Partial<PrismaModels["Post"]>
  >,
): UseMutationResult<
  Pick<PrismaModels["Post"], "id">,
  AxiosError,
  Partial<PrismaModels["Post"]>
> => {
  return useMutation({
    ...options,
    mutationFn: async ({
      title,
      content,
      thumbnail,
    }: Partial<PrismaModels["Post"]>) => {
      const res = await axiosInstance.post("/post", {
        title,
        content,
        thumbnail,
      });
      return res.data;
    },
  });
};
export default useCreatePost;
