import React from "react";
import Logo from "@/shared/Logo";
import { Button } from "@/components/ui/button";
import BarIcon from "@/shared/icon/BarIcon";

const GNB = () => {
  return (
    <nav
      className={"flex items-center justify-between gap-2 p-4 bg-background"}
    >
      <Logo />
      <div className={"flex items-center gap-1"}>
        <Button variant={"ghost"} size={"icon"}>
          <BarIcon className={"size-7"} />
        </Button>
      </div>
    </nav>
  );
};

export default GNB;
