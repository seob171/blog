"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import queryOptions from "@/services/airport/queryOptions";

const Airport = () => {
  const { data } = useSuspenseQuery({
    ...queryOptions.domestic,
  });

  console.log({ data });

  return <div>Airport</div>;
};

export default Airport;
