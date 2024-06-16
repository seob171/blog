import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import queryOptions from "@/services/airport/queryOptions";

export const useGetDomesticAirportList = (
  options: Omit<UseQueryOptions, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...queryOptions.domestic,
    ...options,
  });
};

export const useGetInternationalAirportList = (
  options: Omit<UseQueryOptions, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...queryOptions.international,
    ...options,
  });
};
