import React from 'react';

import { BookmarkIcon, ChatBubbleOvalLeftIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { PrismaModels } from '@/lib/prisma';
import useGetUser from '@/services/user/useGetUser';
import { formatRelativeDate } from '@/utils/date';

type Props = {
  data: PrismaModels['posts'];
};

function PostCard({ data }: Props) {
  const { title, description, creator_id: creatorId, created_at: createdAt, thumbnail_url: thumbnailUrl } = data;
  const { data: user } = useGetUser({ id: creatorId });
  return (
    <Card className="shadow-none border border-border rounded-lg p-2">
      <CardHeader className="flex flex-row justify-between items-center px-4 py-2">
        <div className="flex items-center gap-x-2">
          <Avatar className="size-6 static">
            <AvatarImage src={user?.avatar_url ?? ''} alt={user?.name ?? 'creator avatar'} />
            <AvatarFallback>{user?.name?.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="text-xs">{user?.name}</span>
        </div>
        <div className="flex !m-0">
          <span className="text-sm text-muted-foreground">{formatRelativeDate(createdAt, 3)}</span>
        </div>
      </CardHeader>
      <CardContent className="flex gap-y-4 flex-col px-4 py-2 justify-between">
        <div className="flex flex-col gap-y-2">
          <CardTitle className="line-clamp-2 leading-snug text-md">{title}</CardTitle>
          <CardDescription className="line-clamp-3 text-sm">{description}</CardDescription>
        </div>
        {thumbnailUrl && (
          <div className="relative aspect-video rounded-md overflow-hidden">
            <Image
              src={thumbnailUrl}
              alt={`${data.title} thumbnail`}
              fill
              sizes="518px"
              priority
              className="object-fit"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-between px-2 pb-2">
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
      </CardFooter>
    </Card>
  );
}

export default PostCard;
