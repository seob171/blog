export const AUTH_QUERY_KEY = {
  all: ["auth"],
  user: () => [...AUTH_QUERY_KEY.all, "user"],
} as const;
