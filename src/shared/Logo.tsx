import React, { ComponentProps } from "react";

import Link from "next/link";

import { LOGO_TEXT } from "@/constants/brand";
import { PATH_NAME } from "@/constants/link";
import { cn } from "@/lib/utils";

function Logo({
  className,
  href,
  ...props
}: Partial<ComponentProps<typeof Link>>) {
  return (
    <Link
      className={cn("text-2xl font-bold", className)}
      href={href ?? PATH_NAME.home}
      {...props}
    >
      {LOGO_TEXT}
    </Link>
  );
}

export default Logo;
