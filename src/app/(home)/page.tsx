import React from "react";
import GNB from "@/components/nav/GNB";
import PostList from "@/app/(home)/_components/PostList";

const Page = () => {
  return (
    <>
      <GNB className={"sticky top-0"} />
      <PostList />
    </>
  );
};

export default Page;
