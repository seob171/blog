import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";

import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";

const useDeletePost = <
  TData extends void,
  TError extends AxiosError,
  TVariable extends Pick<PrismaModels["posts"], "id">,
  TContext extends { previousPostList: Array<PrismaModels["posts"]> },
>(
  options?: Omit<
    UseMutationOptions<TData, TError, TVariable, TContext>,
    "mutationFn"
  >,
): UseMutationResult<TData, TError, TVariable, TContext> => {
  const queryClient = useQueryClient();
  const { id: postId } = useParams<{ id: string }>();

  return useMutation<TData, TError, TVariable, TContext>({
    mutationFn: () => axiosInstance.delete(`/post/${postId}`),
    ...options,
    onMutate: async (variables): Promise<TContext> => {
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
          return postList.filter((post) => post.id !== variables.id);
        },
      );

      return { previousPostList } as TContext;
    },
    onError: (err, variables, context) => {
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
