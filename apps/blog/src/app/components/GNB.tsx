import React from "react";

import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { OUT_LINK, PATH_NAME } from "@/app/constants/router";
import { Button } from "@/components/ui/button";

const NAME = "ShimYuseob";

const GNB = () => {
  const isDarkMode = false;

  return (
    <section className="flex items-center justify-between">
      <Link href={PATH_NAME.index} className="text-lg font-bold">
        {NAME}
      </Link>
      <div className="flex gap-x-1">
        <Button variant="outline" size="icon" disabled>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Link href={OUT_LINK.github}>
          <Button variant="outline" size="icon">
            <GitHubLogoIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GNB;
