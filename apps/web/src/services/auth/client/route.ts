import type { QueryClient } from '@tanstack/react-query';

import axiosInstance from '@/lib/api';
import type { PrismaModels } from '@/lib/prisma';
import { AUTH_QUERY_KEY } from '@/services/auth/queryOptions';
import { createClient } from '@/utils/supabase/client';

export const getAuthUser = async (): Promise<PrismaModels['profiles'] | null> => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    const res = await axiosInstance.get<PrismaModels['profiles']>(`/user/${user.id}`);
    return res.data;
  }
  console.error(error);
  return null;
};

export const updateAuthUser = (queryClient: QueryClient, user: PrismaModels['profiles']) => {
  queryClient.setQueryData(AUTH_QUERY_KEY.user(), user);
};

export const clearUser = (queryClient: QueryClient) => {
  queryClient.setQueryData(AUTH_QUERY_KEY.user(), null);
  queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY.user() });
};
