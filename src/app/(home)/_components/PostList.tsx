"use client";

import PostCard from "@/components/card/PostCard";
import React from "react";
import Link from "next/link";
import useGetManyPost from "@/services/post/useGetManyPost";
import { PATH_NAME } from "@/constants/link";

const PostList = () => {
  const { data } = useGetManyPost();

  return (
    <ul className={"flex flex-col gap-y-2"}>
      {data?.map(({ id, title, description }, index) => {
        return (
          <li
            key={`post_${index}_${id}`}
            className={"border border-border rounded-lg p-2"}
          >
            <Link href={`${PATH_NAME.post}/${id}`}>
              <PostCard title={title} description={description} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
