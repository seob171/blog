"use client";

import React from "react";

import dayjs from "dayjs";
import Link from "next/link";

import BookMark from "@/components/icon/BookMark";
import ChatBubble from "@/components/icon/ChatBubble";
import Heart from "@/components/icon/Heart";
import PaperAirplane from "@/components/icon/PaperAirplane";
import EditorComponent from "@/components/tiptap/EditorComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PATH_NAME } from "@/constants/link";
import { useGetAuthUser } from "@/services/auth/useGetAuthUser";
import useGetPost from "@/services/post/useGetPost";
import useGetUser from "@/services/user/useGetUser";

function Post() {
  const { data: post } = useGetPost();
  const { data: author } = useGetUser(
    { id: post!.user_id },
    { enabled: Boolean(post?.user_id) },
  );
  const { data: loggedInUser } = useGetAuthUser();

  const isAuthor = Boolean(loggedInUser && post?.user_id === loggedInUser.id);

  return (
    <div className="flex flex-col gap-y-6 mt-24 px-4">
      <span className="text-5xl font-bold">{post?.title}</span>
      <span className="text-muted-foreground">{post?.description}</span>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center gap-x-2">
            <Avatar className="size-8 static">
              <AvatarImage
                src={author?.avatar_url ?? ""}
                alt="post author avatar"
              />
              <AvatarFallback>{author?.name?.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <Link href={`${PATH_NAME.profile}/${author?.id}`}>
              <Button variant="link" className="text-sm px-0">
                {author?.name}
              </Button>
            </Link>
          </div>
          <span className="text-sm text-muted-foreground">
            {dayjs(post?.created_at).format("YYYY.MM.DD")}
          </span>
        </div>
        {isAuthor && (
          <Link href={`${PATH_NAME.write}/${post?.id}`}>
            <Button variant="link">편집</Button>
          </Link>
        )}
      </div>
      <div className="flex items-center justify-between border-secondary border-y py-4">
        <div className="flex items-center">
          <Button variant="none" size="icon">
            <Heart />
          </Button>
          <Button variant="none" size="icon">
            <ChatBubble />
          </Button>
          <Button variant="none" size="icon">
            <PaperAirplane />
          </Button>
        </div>
        <Button variant="none" size="icon">
          <BookMark />
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
