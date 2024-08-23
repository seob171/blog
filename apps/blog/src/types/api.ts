export type ApiResponse<TData, TError = Error> = {
  data: TData | null;
  error: TError;
  message?: string;
};
