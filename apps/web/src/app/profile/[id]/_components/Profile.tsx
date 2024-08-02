"use client";

import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PrismaModels } from "@/lib/prisma";

type Props = {
  user: PrismaModels["profiles"];
};

function Profile({ user }: Props) {
  const { name, email, avatar_url: avatarUrl } = user;

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
    </section>
  );
}

export default Profile;
