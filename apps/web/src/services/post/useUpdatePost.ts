import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useParams } from 'next/navigation';

import axiosInstance from '@/lib/api';
import type { PrismaModels } from '@/lib/prisma';

const useUpdatePost = (
  options: UseMutationOptions<void, AxiosError, Partial<PrismaModels['posts']>>
): UseMutationResult<void, AxiosError, Partial<PrismaModels['posts']>> => {
  const { id: postId } = useParams<{ id: string }>();

  return useMutation({
    ...options,
    mutationFn: (props: Partial<PrismaModels['posts']>) =>
      axiosInstance.patch(`/post/${postId}`, {
        ...props,
      }),
  });
};
export default useUpdatePost;
