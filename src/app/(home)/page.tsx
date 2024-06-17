import React from "react";
import Logo from "@/features/nav/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Airport from "@/app/(home)/_components/Airport";
// import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className={"flex flex-col h-screen max-w-screen-sm w-full bg-white"}>
        <nav
          className={
            "flex items-center justify-between gap-2 p-4 bg-secondary/[0.3]"
          }
        >
          <Logo />
          <div className={"flex items-center gap-1"}>
            <Button
              variant={"ghost"}
              size={"icon"}
              className={"hover:text-primary"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className={"hover:text-primary"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </nav>
      </div>
      {/*<ErrorBoundary fallback={<div>ErrorBoundary</div>}>*/}
      {/*  <Suspense fallback={<div>hello</div>}>/!*<Airport />*!/</Suspense>*/}
      {/*</ErrorBoundary>*/}
    </main>
  );
}
