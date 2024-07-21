"use client";

import React from "react";

import Link from "next/link";

import PostCard from "@/components/card/PostCard";
import { PATH_NAME } from "@/constants/link";
import { PrismaModels } from "@/lib/prisma";
import useGetManyPost from "@/services/post/useGetManyPost";

type Props = {
  user: PrismaModels["profiles"];
};

const Home = ({ user: { id } }: Props) => {
  const { data } = useGetManyPost({ user_id: id });

  return (
    <ul className="flex flex-col gap-y-2">
      {data?.map(({ id, title, description }) => (
        <Link key={id} href={`${PATH_NAME.post}/${id}`}>
          <PostCard
            title={title}
            description={description}
            // userId={user_id}
          />
        </Link>
      ))}
    </ul>
  );
};

export default Home;
