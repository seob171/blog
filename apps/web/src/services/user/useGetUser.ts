import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { PrismaModels } from "@/lib/prisma";
import { USER_QUERY_KEY } from "@/services/user/queryOptions";
import { getUser } from "@/services/user/route";

const useGetUser = (
  { id }: Pick<PrismaModels["profiles"], "id">,
  options?: Omit<
    UseQueryOptions<
      PrismaModels["profiles"],
      AxiosError,
      PrismaModels["profiles"],
      ReturnType<typeof USER_QUERY_KEY.item>
    >,
    "queryKey" | "queryFn"
  >,
) => {
  return useQuery({
    queryKey: USER_QUERY_KEY.item({ id }),
    queryFn: () => getUser({ id }),
    ...options,
  });
};

export default useGetUser;
