"use client";

import React from "react";

import Link from "next/link";

import PostCard from "@/components/card/PostCard";
import { PATH_NAME } from "@/constants/link";
import useGetManyPost from "@/services/post/useGetManyPost";

function PostList() {
  const { data } = useGetManyPost();

  return (
    <ul className="flex flex-col gap-y-2">
      {data?.map(({ id, title, description, user_id }) => {
        return (
          <li
            key={`post_${id}`}
            className="border border-border rounded-lg p-2"
          >
            <Link href={`${PATH_NAME.post}/${id}`}>
              <PostCard
                title={title}
                description={description}
                userId={user_id}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
