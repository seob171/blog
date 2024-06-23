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
        "flex items-center justify-between gap-2 px-4 py-2 bg-background",
        className,
      )}
      {...props}
    >
      <Logo />
      <div className={"flex items-center gap-2"}>
        <Link href={PATH_NAME.signIn}>
          <Button variant={"ghost"} size={"icon"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Button>
        </Link>
        <Link href={PATH_NAME.signIn}>
          <Button variant={"ghost"} size={"icon"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Button>
        </Link>
        {/*<SignInDialog />*/}
        {/*<Dropdown />*/}
      </div>
    </nav>
  );
};

export default GNB;
