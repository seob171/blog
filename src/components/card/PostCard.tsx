import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Heart from "@/components/icon/Heart";
import ChatBubble from "@/components/icon/ChatBubble";
import PaperAirplane from "@/components/icon/PaperAirplane";
import BookMark from "@/components/icon/BookMark";

type Props = {
  title: string;
  description: string;
};

const PostCard = ({ title, description }: Props) => {
  return (
    <Card className={"border-0 shadow-none"}>
      <CardHeader className={"px-4 py-2"}>
        <div className={"flex items-center gap-x-2"}>
          <Avatar className={"size-6 static"}>
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <span className={"text-xs"}>ShimYuSeob</span>
        </div>
      </CardHeader>
      <CardContent
        className={
          "flex gap-y-4 flex-col px-4 py-2 justify-between sm:flex-row sm:gap-x-4 "
        }
      >
        <div className={"flex flex-col gap-y-2"}>
          <CardTitle className={"line-clamp-2 leading-snug text-md"}>
            {title}
          </CardTitle>
          <CardDescription className={"line-clamp-3 text-sm"}>
            {description}
          </CardDescription>
        </div>
        <div
          className={`aspect-video w-full h-fit rounded-md object-cover bg-muted
            sm:aspect-square sm:size-32 sm:w-fit`}
        />
      </CardContent>
      <CardFooter className={"justify-between px-2 pb-2"}>
        <div className={"flex items-center"}>
          <Button variant={"none"} size={"icon"}>
            <Heart />
          </Button>
          <Button variant={"none"} size={"icon"}>
            <ChatBubble />
          </Button>
          <Button variant={"none"} size={"icon"}>
            <PaperAirplane />
          </Button>
        </div>
        <Button variant={"none"} size={"icon"}>
          <BookMark />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
