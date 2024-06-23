import React from "react";
// import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
        {/*<Image*/}
        {/*  alt="Product image"*/}
        {/*  className="aspect-square w-full rounded-md object-cover"*/}
        {/*  height="300"*/}
        {/*  src="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg"*/}
        {/*  width="300"*/}
        {/*/>*/}
      </CardContent>
      {/*<CardFooter></CardFooter>*/}
    </Card>
  );
};

export default PostCard;
