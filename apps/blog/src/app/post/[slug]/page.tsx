import React from "react";

import { notFound } from "next/navigation";

import Post from "@/app/post/[slug]/components/Post";
import { getBlogPosts } from "@/utils/getBlogPosts";

type Props = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: Props) => {
  const post = getBlogPosts().find(
    (post) => post.slug === decodeURI(params.slug),
  );

  if (!post) notFound();

  return (
    <main className="flex justify-center">
      <section className="max-w-screen-md w-full">
        <Post post={post} />
      </section>
    </main>
  );
};

export default Page;
