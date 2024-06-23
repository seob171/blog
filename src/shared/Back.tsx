"use client";

import React, { ComponentProps } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Back = (props: Partial<ComponentProps<typeof Button>>) => {
  const { back } = useRouter();

  return (
    <Button variant={"ghost"} size={"icon"} onClick={back} {...props}>
      <ChevronLeft strokeWidth={1.5} />
    </Button>
  );
};

export default Back;
