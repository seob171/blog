import dayjs from "dayjs";
import Link from "next/link";

import { PATH_NAME } from "@/app/constants/router";
import { MdxData } from "@/utils/getBlogPosts";

const PostList = ({ posts }: { posts: MdxData[] }) => {
  return (
    <section className="[&>*]:grid [&>*]:grid-cols-[minmax(auto,130px)_1fr] [&>*:not(:last-child)]:border-b w-full [&_span]:p-2">
      <div className="text-muted-foreground">
        <span>Date</span>
        <span>Title</span>
      </div>
      {posts.map(({ data: { title, publishedAt }, slug }) => (
        <Link
          key={slug}
          href={`${PATH_NAME.post}/${slug}`}
          className="hover:bg-muted cursor-pointer"
        >
          <span>{dayjs(publishedAt).format("YYYY-MM-DD")}</span>
          <span>{title}</span>
        </Link>
      ))}
    </section>
  );
};

export default PostList;
