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
    mutationFn: async ({ title, content }: Partial<PrismaModels["Post"]>) => {
      const res = await axiosInstance.post("/post", {
        title,
        content,
      });
      return res.data;
    },
  });
};
export default useCreatePost;
