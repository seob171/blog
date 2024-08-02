import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";

import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";

const useUpdatePost = (
  options: UseMutationOptions<void, AxiosError, Partial<PrismaModels["posts"]>>,
): UseMutationResult<void, AxiosError, Partial<PrismaModels["posts"]>> => {
  const { id: postId } = useParams<{ id: string }>();

  return useMutation({
    ...options,
    mutationFn: (props: Partial<PrismaModels["posts"]>) =>
      axiosInstance.patch(`/post/${postId}`, {
        ...props,
      }),
  });
};
export default useUpdatePost;