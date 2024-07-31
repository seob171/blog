"use client";

import React from "react";

import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PATH_NAME } from "@/constants/link";
import { useGetAuthUser } from "@/services/auth/useGetAuthUser";
import useDeletePost from "@/services/post/useDeletePost";

const PostUpdateMenu = () => {
  const { replace } = useRouter();
  const { data: creator } = useGetAuthUser();
  const { id: postId } = useParams<{ id: string }>();
  const { mutate: deletePost } = useDeletePost({
    onSuccess: () => {
      console.log("토스트 메시지");
      replace(`${PATH_NAME.profile}/${creator?.id}`);
    },
  });

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="none" size="icon">
            <EllipsisVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-24" align="end">
          <DropdownMenuGroup>
            <Link href={`${PATH_NAME.write}/${postId}`}>
              <DropdownMenuItem className="flex items-center gap-x-2 cursor-pointer">
                <PencilSquareIcon className="size-4" />
                <span className="text-xs">수정하기</span>
              </DropdownMenuItem>
            </Link>

            <AlertDialogTrigger asChild className="cursor-pointer">
              <DropdownMenuItem
                asChild={false}
                className="flex items-center gap-x-2 w-full"
              >
                <TrashIcon className="size-4" />
                <span className="text-xs">삭제하기</span>
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>포스트를 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            포스트 삭제 시 복구할 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={() => {
              deletePost({ id: postId });
            }}
          >
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PostUpdateMenu;
