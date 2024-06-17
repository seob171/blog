import React, { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({
  className,
  href,
  ...props
}: Partial<ComponentProps<typeof Link>>) => {
  return (
    <Link
      className={cn("text-2xl text-primary", className)}
      href={href ?? "/"}
      {...props}
    >
      산책
    </Link>
  );
};

export default Logo;
