import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { PrismaModels } from "@/lib/prisma";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import { getManyPost } from "@/services/post/route";

const useGetManyPost = (
  options?: Omit<
    UseQueryOptions<
      Array<PrismaModels["Post"]>,
      AxiosError,
      Array<PrismaModels["Post"]>,
      ReturnType<typeof POST_QUERY_KEY.itemList>
    >,
    "queryKey" | "queryFn"
  >,
) => {
  return useQuery({
    queryKey: POST_QUERY_KEY.itemList(),
    queryFn: () => getManyPost(),
    ...options,
  });
};

export default useGetManyPost;
