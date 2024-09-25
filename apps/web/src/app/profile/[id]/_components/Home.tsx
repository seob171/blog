'use client';

import React from 'react';

import Link from 'next/link';

import PostCard from '@/components/card/PostCard';
import { PATH_NAME } from '@/constants/link';
import type { PrismaModels } from '@/lib/prisma';
import useGetManyPost from '@/services/post/useGetManyPost';

type Props = {
  user: PrismaModels['profiles'];
};

const Home = ({ user: { id } }: Props) => {
  const { data } = useGetManyPost({ creator_id: id });

  return (
    <ul className="flex flex-col gap-y-2 mb-40">
      {data?.map((post) => (
        <Link key={post.id} href={`${PATH_NAME.post}/${post.id}`}>
          <PostCard data={post} />
        </Link>
      ))}
    </ul>
  );
};

export default Home;
