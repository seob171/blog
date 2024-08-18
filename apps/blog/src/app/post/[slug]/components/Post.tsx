import React from "react";
import "github-markdown-css";

import { BG_COLORS } from "@/app/constants/color";
import Views from "@/app/post/[slug]/components/Views";
import Mdx from "@/components/mdx/Mdx";
import { cn } from "@/lib/utils";
import { MdxData } from "@/utils/getBlogPosts";

type Props = {
  post: MdxData;
};

const Post = ({ post }: Props) => {
  const {
    data: { title, publishedAt, tags, summary },
    content,
  } = post;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-end justify-between my-8">
        <div className="flex flex-col gap-y-2 w-full">
          <ul className="flex gap-x-2 items-center">
            {(tags ?? []).map((tag) => (
              <li
                key={tag}
                className={cn(
                  "py-1 px-2 text-white rounded-md text-sm font-semibold",
                  `${BG_COLORS[tag.charCodeAt(0) % BG_COLORS.length]}`,
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="prose dark:prose-invert">
            <h1>{title}</h1>
          </div>
          <span className="text-muted-foreground/50 text-sm">{summary}</span>
          <div className="flex justify-between items-center text-muted-foreground/80 text-sm">
            <span>{publishedAt}</span>
            <Views />
          </div>
        </div>
      </div>

      <Mdx source={content} />
    </div>
  );
};

export default Post;
