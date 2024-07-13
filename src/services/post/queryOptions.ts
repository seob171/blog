export const POST_QUERY_KEY = {
  all: ["post"],
  itemList: () => [...POST_QUERY_KEY.all, "list"],
  item: (id: string) => [...POST_QUERY_KEY.itemList(), id],
} as const;
