import type { AxiosRequestConfig } from 'axios';

import axiosInstance from '@/lib/api';
import type { PrismaModels } from '@/lib/prisma';

export const getPost = async ({ id }: Pick<PrismaModels['posts'], 'id'>) => {
  const res = await axiosInstance.get<PrismaModels['posts']>(`/post/${id}`);
  return res.data;
};

export const getManyPost = async (config?: AxiosRequestConfig) => {
  const res = await axiosInstance.get<Array<PrismaModels['posts']>>('/post', config);
  return res.data;
};
