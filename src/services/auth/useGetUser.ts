import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getUser } from "@/services/auth/client/route";
import { User } from "@supabase/auth-js";

export const useGetUser = <TData = User | null>(
  options?: Omit<
    UseQueryOptions<
      User | null,
      Error,
      TData,
      ReturnType<typeof AUTH_QUERY_KEY.user>
    >,
    "queryKey" | "queryFn"
  >,
) => {
  return useQuery({
    queryKey: AUTH_QUERY_KEY.user(),
    queryFn: getUser,
    ...options,
  });
};
