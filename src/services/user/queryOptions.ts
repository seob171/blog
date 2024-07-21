import { PrismaModels } from "@/lib/prisma";

export const USER_QUERY_KEY = {
  all: ["user"],
  itemList: () => [...USER_QUERY_KEY.all, "list"],
  item: ({ id }: Pick<PrismaModels["profiles"], "id">) => [
    ...USER_QUERY_KEY.itemList(),
    id,
  ],
} as const;
