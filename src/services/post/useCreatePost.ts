import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";

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
