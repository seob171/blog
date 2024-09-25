'use client';

import React from 'react';

import Link from 'next/link';

import PostCard from '@/components/card/PostCard';
import { PATH_NAME } from '@/constants/link';
import useGetManyPost from '@/services/post/useGetManyPost';

function PostList() {
  const { data } = useGetManyPost();

  return (
    <ul className="flex flex-col gap-y-2">
      {data?.map((post) => {
        return (
          <li key={`post_${post.id}`}>
            <Link href={`${PATH_NAME.post}/${post.id}`}>
              <PostCard data={post} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
