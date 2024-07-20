import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";

import { PrismaModels } from "@/lib/prisma";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import { getPost } from "@/services/post/route";

const useGetPost = (
  options?: Omit<
    UseQueryOptions<
      PrismaModels["posts"],
      AxiosError,
      PrismaModels["posts"],
      ReturnType<typeof POST_QUERY_KEY.item>
    >,
    "queryKey" | "queryFn"
  >,
) => {
  const { id: postId } = useParams<{ id: string }>();

  return useQuery({
    queryKey: POST_QUERY_KEY.item(postId),
    queryFn: () => getPost(postId),
    enabled: Boolean(postId),
    ...options,
  });
};

export default useGetPost;
