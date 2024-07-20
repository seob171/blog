"use client";

import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PrismaModels } from "@/lib/prisma";

type Props = {
  user: PrismaModels["profiles"];
};

function Information({ user }: Props) {
  const { name, email, avatar_url: avatarUrl, introduction } = user;

  return (
    <section className="flex flex-col items-center w-full px-4 py-2 gap-x-4">
      <div className="flex gap-x-4 w-full mb-6">
        <Avatar className="size-28 static">
          <AvatarImage src={avatarUrl ?? ""} alt="@shadcn" />
          <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-1 justify-center gap-y-1 w-full">
          <h4 className="font-bold text-xl">{name}</h4>
          <p className="font-sm text-muted-foreground">{email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 w-full">
        <p className="font-sm text-muted-foreground">
          {introduction ?? "강아지와 커피를 좋아하는 개발자입니다."}
        </p>
        <Button variant="default">프로필 편집</Button>
      </div>
    </section>
  );
}

export default Information;
