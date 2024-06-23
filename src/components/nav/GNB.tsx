import React, { HTMLAttributes } from "react";
import Logo from "@/shared/Logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, User } from "lucide-react";
import Link from "next/link";
import { PATH_NAME } from "@/constants/link";

type Props = HTMLAttributes<HTMLDivElement>;

const GNB = ({ className, ...props }: Props) => {
  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-2 px-6 py-2 bg-background",
        className,
      )}
      {...props}
    >
      <Logo />
      <div className={"flex items-center gap-2"}>
        <Link href={PATH_NAME.signIn}>
          <Button variant={"ghost"} size={"icon"}>
            <Heart strokeWidth={1.5} size={20} />
          </Button>
        </Link>
        <Link href={PATH_NAME.signIn}>
          <Button variant={"ghost"} size={"icon"}>
            <User strokeWidth={1.5} size={20} />
          </Button>
        </Link>
        {/*<SignInDialog />*/}
        {/*<Dropdown />*/}
      </div>
    </nav>
  );
};

export default GNB;
