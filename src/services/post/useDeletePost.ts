import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";

import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";

const useDeletePost = (): UseMutationResult<
  void,
  AxiosError,
  Pick<PrismaModels["posts"], "id">
> => {
  const queryClient = useQueryClient();
  const { id: postId } = useParams<{ id: string }>();

  return useMutation({
    mutationFn: () => axiosInstance.delete(`/post/${postId}`),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: [POST_QUERY_KEY.itemList()],
      });
      const previousPostList =
        queryClient.getQueryData<Array<PrismaModels["posts"]>>(
          POST_QUERY_KEY.itemList(),
        ) ?? [];

      queryClient.setQueryData<Array<PrismaModels["posts"]>>(
        POST_QUERY_KEY.itemList(),
        (postList) => {
          if (postList === undefined) return [];
          return postList.filter((post) => post.id !== id);
        },
      );

      return { previousPostList };
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(
        POST_QUERY_KEY.itemList(),
        context?.previousPostList ?? [],
      );
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: POST_QUERY_KEY.itemList(),
      });
    },
  });
};
export default useDeletePost;
