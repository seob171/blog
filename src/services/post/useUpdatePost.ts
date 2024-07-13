import axiosInstance from "@/lib/api";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { PrismaModels } from "@/lib/prisma";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";

const useUpdatePost = (): UseMutationResult<
  void,
  AxiosError,
  Partial<PrismaModels["Post"]>
> => {
  const { id: postId } = useParams<{ id: string }>();

  return useMutation({
    mutationFn: ({
      title,
      content,
      thumbnail,
    }: Partial<PrismaModels["Post"]>) =>
      axiosInstance.patch(`/post/${postId}`, {
        title,
        content,
        thumbnail,
      }),
  });
};
export default useUpdatePost;
