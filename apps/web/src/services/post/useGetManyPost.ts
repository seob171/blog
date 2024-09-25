import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { PrismaModels } from '@/lib/prisma';
import { POST_QUERY_KEY } from '@/services/post/queryOptions';
import { getManyPost } from '@/services/post/route';

const useGetManyPost = (
  params?: Partial<PrismaModels['posts']>,
  options?: Omit<
    UseQueryOptions<
      Array<PrismaModels['posts']>,
      AxiosError,
      Array<PrismaModels['posts']>,
      ReturnType<typeof POST_QUERY_KEY.itemList>
    >,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    queryKey: POST_QUERY_KEY.itemList(params),
    queryFn: () => getManyPost({ params }),
    ...options,
  });
};

export default useGetManyPost;
