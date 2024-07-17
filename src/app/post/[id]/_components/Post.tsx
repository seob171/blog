"use client";

import React from "react";

import dayjs from "dayjs";

import BookMark from "@/components/icon/BookMark";
import ChatBubble from "@/components/icon/ChatBubble";
import Heart from "@/components/icon/Heart";
import PaperAirplane from "@/components/icon/PaperAirplane";
import EditorComponent from "@/components/tiptap/EditorComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useGetPost from "@/services/post/useGetPost";

function Post() {
  const { data } = useGetPost();

  return (
    <div className="flex flex-col gap-y-6 mt-24 px-4">
      <span className="text-5xl font-bold">{data?.title}</span>
      <span className="text-muted-foreground">{data?.description}</span>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center gap-x-2">
            <Avatar className="size-8 static">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <Button variant="link" className="text-sm px-0">
              ShimYuSeob
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">
            {dayjs(data?.created_at).format("YYYY.MM.DD")}
          </span>
        </div>
        {/* <Button variant={"link"}>팔로우</Button> */}
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
        content={JSON.parse(data?.content ?? "")}
      />
    </div>
  );
}

export default Post;
