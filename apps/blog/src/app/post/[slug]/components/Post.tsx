import React from "react";
import "github-markdown-css";

import { BG_COLORS } from "@/app/constants/color";
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
        <div className="flex flex-col gap-y-2">
          <ul className="flex gap-x-2 items-center">
            {(tags ?? []).map((tag) => (
              <li
                key={tag}
                className={cn(
                  "py-1 px-2 text-white rounded-md text-sm font-semibold",
                  `bg-${BG_COLORS[tag.charCodeAt(0) % BG_COLORS.length]}-400`,
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
          <span className="text-muted-foreground/80 text-sm">
            {publishedAt}
          </span>
        </div>
      </div>

      <Mdx source={content} />
    </div>
  );
};

export default Post;
