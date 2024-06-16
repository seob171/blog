import {
  getDomesticAirports,
  getInternationalAirports,
} from "@/services/airport/airportService";

const airportQueryKey = {
  all: ["airport"] as const,
  domestic: () =>
    [...airportQueryKey.all, { locationType: "domestic" }] as const,
  international: () =>
    [...airportQueryKey.all, { locationType: "international" }] as const,
};

const queryOptions = {
  domestic: {
    queryKey: airportQueryKey.domestic(),
    queryFn: getDomesticAirports,
  },
  international: {
    queryKey: airportQueryKey.international(),
    queryFn: getInternationalAirports,
  },
};
export default queryOptions;
