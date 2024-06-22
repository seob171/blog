import React from "react";
import GNB from "@/components/Nav/GNB";
import PostList from "@/app/(home)/_components/PostList";

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center">
      <div
        className={
          "flex flex-col min-h-screen h-full max-w-screen-sm w-full bg-white"
        }
      >
        <GNB className={"sticky top-0"} />
        <PostList />
      </div>
    </main>
  );
};

export default Page;
