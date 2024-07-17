import React, { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BottomBarProps extends HTMLAttributes<HTMLDivElement> {
  leftRender?: ReactNode;
  rightRender?: ReactNode;
}

function BottomBar({
  children,
  className,
  leftRender = null,
  rightRender,
  ...props
}: BottomBarProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-2 px-4 py-2 bg-background [&>div]:w-full",
        className,
      )}
      {...props}
    >
      <div>{leftRender}</div>
      <div>{children}</div>
      <div>{rightRender}</div>
    </nav>
  );
}

export default BottomBar;
