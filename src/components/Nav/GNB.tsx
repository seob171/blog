import React, { HTMLAttributes } from "react";
import Logo from "@/shared/Logo";
import LoginDialog from "@/features/Auth/LoginDialog";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const GNB = ({ className, ...props }: Props) => {
  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-2 p-6 bg-background",
        className,
      )}
      {...props}
    >
      <Logo />
      <div className={"flex items-center gap-1"}>
        <LoginDialog />
        {/*<Dropdown />*/}
      </div>
    </nav>
  );
};

export default GNB;
