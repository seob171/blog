import { User } from "@supabase/auth-js";
import { QueryClient } from "@tanstack/react-query";

import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { createClient } from "@/utils/supabase/client";

export const getUser = async (): Promise<User | null> => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.error(error);
  return user;
};

export const updateUser = (queryClient: QueryClient, user: User) => {
  queryClient.setQueryData(AUTH_QUERY_KEY.user(), user);
};

export const clearUser = (queryClient: QueryClient) => {
  queryClient.setQueryData(AUTH_QUERY_KEY.user(), null);
  queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY.user() });
};
