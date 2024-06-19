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
      className={cn("text-2xl font-ohsquare", className)}
      href={href ?? "/"}
      {...props}
    >
      블로그
    </Link>
  );
};

export default Logo;
