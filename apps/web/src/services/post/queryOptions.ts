import type { PrismaModels } from '@/lib/prisma';

export const POST_QUERY_KEY = {
  all: ['post'],
  itemList: (params?: Partial<PrismaModels['posts']>) => [...POST_QUERY_KEY.all, 'list', params],
  item: ({ id }: Pick<PrismaModels['posts'], 'id'>) => [...POST_QUERY_KEY.itemList(), id],
} as const;
