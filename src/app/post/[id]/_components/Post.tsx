"use client";

import React from "react";

import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import PostUpdateMenu from "@/app/post/[id]/_components/PostUpdateMenu";
import EditorComponent from "@/components/tiptap/EditorComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PATH_NAME } from "@/constants/link";
import { useGetAuthUser } from "@/services/auth/useGetAuthUser";
import useGetPost from "@/services/post/useGetPost";
import useGetUser from "@/services/user/useGetUser";

function Post() {
  const { data: post } = useGetPost();
  const { data: creator } = useGetUser(
    { id: post!.creator_id },
    { enabled: Boolean(post?.creator_id) },
  );
  const { data: loggedInUser } = useGetAuthUser();

  const isMyPost = Boolean(
    loggedInUser && post?.creator_id === loggedInUser.id,
  );

  return (
    <div className="flex flex-col gap-y-6 mt-24 px-4">
      <span className="text-5xl font-bold">{post?.title}</span>
      <span className="text-muted-foreground">{post?.description}</span>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center gap-x-2">
            <Avatar className="size-8 static">
              <AvatarImage
                src={creator?.avatar_url ?? ""}
                alt="post creator avatar"
              />
              <AvatarFallback>{creator?.name?.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <Link href={`${PATH_NAME.profile}/${creator?.id}`}>
              <Button variant="link" className="text-sm px-0">
                {creator?.name}
              </Button>
            </Link>
          </div>
          <span className="text-sm text-muted-foreground">
            {dayjs(post?.created_at).format("YYYY.MM.DD")}
          </span>
        </div>
        {isMyPost && <PostUpdateMenu />}
      </div>
      {post?.thumbnail_url && (
        <div className="relative aspect-video rounded-md overflow-hidden">
          <Image
            src={post.thumbnail_url}
            alt={`${post.title} thumbnail`}
            fill
            sizes="568px"
            priority
            className="object-fit"
          />
        </div>
      )}
      <div className="flex items-center justify-between border-secondary border-y py-4">
        <div className="flex items-center">
          <Button variant="none" size="icon">
            <HeartIcon />
          </Button>
          <Button variant="none" size="icon">
            <ChatBubbleOvalLeftIcon />
          </Button>
          <Button variant="none" size="icon">
            <PaperAirplaneIcon />
          </Button>
        </div>
        <Button variant="none" size="icon">
          <BookmarkIcon />
        </Button>
      </div>
      <EditorComponent
        editable={false}
        content={JSON.parse(post?.content ?? "")}
      />
    </div>
  );
}

export default Post;
