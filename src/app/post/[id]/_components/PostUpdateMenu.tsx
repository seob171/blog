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
import { useToast } from "@/components/ui/use-toast";
import { PATH_NAME } from "@/constants/link";
import { useGetAuthUser } from "@/services/auth/useGetAuthUser";
import useDeletePost from "@/services/post/useDeletePost";

const PostUpdateMenu = () => {
  const { replace } = useRouter();
  const { toast } = useToast();
  const { data: creator } = useGetAuthUser();
  const { id: postId } = useParams<{ id: string }>();
  const { mutate: deletePost } = useDeletePost({
    onSuccess: () => {
      toast({
        title: "포스트 삭제 완료",
        description: `포스트가 삭제되었어요! ${creator ? "프로필 페이지로" : "홈으로"} 이동합니다 😊`,
      });
      replace(creator ? `${PATH_NAME.profile}/${creator.id}` : PATH_NAME.home);
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
          <AlertDialogTitle>포스트를 삭제할까요?</AlertDialogTitle>
          <AlertDialogDescription>
            삭제된 포스트는 복구할 수 없어요.
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
