import React from "react";
import "github-markdown-css";

import { MDXRemote } from "next-mdx-remote/rsc";

import { MdxData } from "@/utils/getBlogPosts";

type Props = {
  post: MdxData;
};

const Post = ({ post }: Props) => {
  const {
    data: { title, publishedAt },
    content,
  } = post;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-end justify-between my-8">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="text-muted-foreground text-sm">{publishedAt}</span>
        </div>
      </div>

      <section className="markdown-body pb-10">
        <MDXRemote source={content} />
      </section>
    </div>
  );
};

export default Post;
