import React from "react";
import "github-markdown-css";

import { MDXRemote } from "next-mdx-remote/rsc";

import { MdxData } from "@/utils/getBlogPosts";

type Props = {
  post: MdxData;
};

const Post = ({ post }: Props) => {
  return (
    <div className="markdown-body">
      <MDXRemote source={post.content} />
    </div>
  );
};

export default Post;
