import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import { useParams } from "next/navigation";
import { PrismaModels } from "@/lib/prisma";
import { AxiosError } from "axios";
import { getPost } from "@/services/post/route";

const useGetPost = (
  options?: Omit<
    UseQueryOptions<
      PrismaModels["Post"],
      AxiosError,
      PrismaModels["Post"],
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
