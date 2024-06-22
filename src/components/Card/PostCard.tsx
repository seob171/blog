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
      <CardHeader>
        <div className={"flex items-center gap-x-2"}>
          <Avatar className={"size-6"}>
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <span className={"text-xs"}>ShimYuSeob</span>
        </div>
      </CardHeader>
      <CardContent
        className={
          "flex gap-y-4 flex-col justify-between xs:flex-row xs:gap-x-4 "
        }
      >
        <div className={"flex flex-col gap-y-2"}>
          <CardTitle className={"line-clamp-2 leading-snug text-md xs:text-lg"}>
            {title}
          </CardTitle>
          <CardDescription className={"line-clamp-3 text-sm xs:text-md"}>
            {description}
          </CardDescription>
        </div>
        <div
          className={`aspect-video w-full h-fit rounded-md object-cover bg-muted
            xs:aspect-square xs:max-w-[25%]`}
        ></div>
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
