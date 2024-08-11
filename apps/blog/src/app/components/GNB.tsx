"use client";

import React from "react";

import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useTheme } from "next-themes";

import { OUT_LINK, PATH_NAME } from "@/app/constants/router";
import { Button } from "@/components/ui/button";

const NAME = "ShimYuseob";

const GNB = () => {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === "dark";
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="flex items-center justify-between">
      <Link
        href={PATH_NAME.index}
        className="text-lg font-bold font-harmondExtBdIta"
      >
        {NAME}
      </Link>
      <div className="flex gap-x-1">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          aria-label="Theme mode toggle button"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Link href={OUT_LINK.github} aria-label="blog owner github link">
          <Button variant="outline" size="icon" aria-label="icon button">
            <GitHubLogoIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GNB;
