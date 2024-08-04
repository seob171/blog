import { Suspense } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

const Page = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MDXRemote source="# 개발 블로그" />
    </Suspense>
  );
};

export default Page;
