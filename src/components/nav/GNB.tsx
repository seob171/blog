"use client";

import React, { HTMLAttributes } from "react";

import { BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Logo from "@/components/common/Logo";
import PencilSquare from "@/components/icon/PencilSquare";
import UserCircle from "@/components/icon/UserCircle";
import { Button } from "@/components/ui/button";
import { PATH_NAME } from "@/constants/link";
import { cn } from "@/lib/utils";
import { useGetAuthUser } from "@/services/auth/useGetAuthUser";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function GNB({ className, ...props }: Props) {
  const { data: user } = useGetAuthUser();

  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-2 px-4 py-2 bg-background",
        className,
      )}
      {...props}
    >
      <Logo />
      <div className="flex items-center gap-2">
        <Link href={`${PATH_NAME.write}`} className={user ? "" : "hidden"}>
          <Button variant="ghost" size="icon">
            <PencilSquare />
          </Button>
        </Link>

        <Link href={PATH_NAME.picks}>
          <Button variant="ghost" size="icon">
            <BookmarkIcon />
          </Button>
        </Link>
        <Link
          href={
            user ? `${PATH_NAME.profile}/${user?.id}` : `${PATH_NAME.signIn}`
          }
        >
          <Button variant="ghost" size="icon">
            <UserCircle />
          </Button>
        </Link>
        {/* <SignInDialog /> */}
        {/* <Dropdown /> */}
      </div>
    </nav>
  );
}

export default GNB;
