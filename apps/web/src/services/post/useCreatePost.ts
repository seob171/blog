import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import axiosInstance from '@/lib/api';
import type { PrismaModels } from '@/lib/prisma';

const useCreatePost = (
  options: UseMutationOptions<Pick<PrismaModels['posts'], 'id'>, AxiosError, Partial<PrismaModels['posts']>>
): UseMutationResult<Pick<PrismaModels['posts'], 'id'>, AxiosError, Partial<PrismaModels['posts']>> => {
  return useMutation({
    ...options,
    mutationFn: async ({ title, content, creator_id }: Partial<PrismaModels['posts']>) => {
      const res = await axiosInstance.post('/post', {
        title,
        content,
        creator_id,
      });
      return res.data;
    },
  });
};
export default useCreatePost;
