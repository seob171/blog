import React from "react";
import GNB from "@/components/Nav/GNB";
import PostList from "@/app/(home)/_components/PostList";

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center">
      <div className={"flex flex-col h-screen max-w-screen-sm w-full bg-white"}>
        <GNB />
        <PostList />
      </div>
    </main>
  );
};

export default Page;
