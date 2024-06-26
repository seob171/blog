"use client";

import React, { HTMLAttributes } from "react";
import Logo from "@/shared/Logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PATH_NAME } from "@/constants/link";
import UserCircle from "@/components/icon/UserCircle";
import PencilSquare from "@/components/icon/PencilSquare";
import { useGetUser } from "@/services/auth/useGetUser";
import BookMark from "@/components/icon/BookMark";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const GNB = ({ className, ...props }: Props) => {
  const { data: user } = useGetUser();

  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-2 px-4 py-2 bg-background",
        className,
      )}
      {...props}
    >
      <Logo />
      <div className={"flex items-center gap-2"}>
        <Link href={PATH_NAME.write} className={user ? "" : "hidden"}>
          <Button variant={"ghost"} size={"icon"}>
            <PencilSquare />
          </Button>
        </Link>

        <Link href={PATH_NAME.picks}>
          <Button variant={"ghost"} size={"icon"}>
            <BookMark />
          </Button>
        </Link>
        <Link href={`${PATH_NAME.profile}/${user?.id}`}>
          <Button variant={"ghost"} size={"icon"}>
            <UserCircle />
          </Button>
        </Link>
        {/*<SignInDialog />*/}
        {/*<Dropdown />*/}
      </div>
    </nav>
  );
};

export default GNB;
