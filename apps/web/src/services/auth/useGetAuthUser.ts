import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { PrismaModels } from "@/lib/prisma";
import { getAuthUser } from "@/services/auth/client/route";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";

export const useGetAuthUser = <TData = PrismaModels["profiles"] | null>(
  options?: Omit<
    UseQueryOptions<
      PrismaModels["profiles"] | null,
      Error,
      TData,
      ReturnType<typeof AUTH_QUERY_KEY.user>
    >,
    "queryKey" | "queryFn"
  >,
) => {
  return useQuery({
    queryKey: AUTH_QUERY_KEY.user(),
    queryFn: getAuthUser,
    ...options,
  });
};
