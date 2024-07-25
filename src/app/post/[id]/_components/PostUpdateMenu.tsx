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
  const { data: author } = useGetAuthUser();
  const { id: postId } = useParams<{ id: string }>();
  const { mutate: deletePost } = useDeletePost({
    onSuccess: () => {
      console.log("토스트 메시지");
      replace(`${PATH_NAME.profile}/${author?.id}`);
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
              <DropdownMenuItem className="flex items-center gap-x-2">
                <PencilSquareIcon />
                <span className="">편집</span>
              </DropdownMenuItem>
            </Link>

            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                asChild={false}
                className="flex items-center gap-x-2 w-full"
              >
                <TrashIcon />
                <span>삭제</span>
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
