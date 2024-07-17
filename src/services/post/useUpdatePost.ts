import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";

import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";

const useUpdatePost = (): UseMutationResult<
  void,
  AxiosError,
  Partial<PrismaModels["Post"]>
> => {
  const { id: postId } = useParams<{ id: string }>();

  return useMutation({
    mutationFn: (props: Partial<PrismaModels["Post"]>) =>
      axiosInstance.patch(`/post/${postId}`, {
        ...props,
      }),
  });
};
export default useUpdatePost;
