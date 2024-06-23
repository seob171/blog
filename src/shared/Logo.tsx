import React, { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PATH_NAME } from "@/constants/link";
import { LOGO_TEXT } from "@/constants/brand";

const Logo = ({
  className,
  href,
  ...props
}: Partial<ComponentProps<typeof Link>>) => {
  return (
    <Link
      className={cn("text-2xl font-bold", className)}
      href={href ?? PATH_NAME.home}
      {...props}
    >
      {LOGO_TEXT}
    </Link>
  );
};

export default Logo;
