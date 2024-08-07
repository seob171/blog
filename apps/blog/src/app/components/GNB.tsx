import React from "react";

import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAME = "ShimYuseob";
const GITHUB_URL = "https://github.com/seob171";

const GNB = () => {
  const isDarkMode = false;

  return (
    <section className="flex items-center justify-between">
      <Link href="/" className="text-lg font-bold">
        {NAME}
      </Link>
      <div className="flex gap-x-1">
        <Button variant="outline" size="icon" disabled>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Link href={GITHUB_URL}>
          <Button variant="outline" size="icon">
            <GitHubLogoIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GNB;
