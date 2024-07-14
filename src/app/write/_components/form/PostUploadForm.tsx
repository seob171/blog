"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FileUpload from "@/components/icon/FileUpload";
import { cn } from "@/lib/utils";

type Props = {
  uploadPost: SubmitHandler<FormData>;
};

const schema = z.object({
  description: z.string().optional(),
  thumbnail: z.string().url(),
});

type FormData = z.infer<typeof schema>;

const PostUploadForm = ({ uploadPost }: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      description: "",
      thumbnail: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <form
      className={"flex flex-col gap-y-2"}
      onSubmit={handleSubmit(uploadPost)}
    >
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            이미지 링크
          </Label>
          <Input
            {...register("thumbnail")}
            id="url"
            type="url"
            required
            placeholder={"썸네일로 지정할 이미지 링크를 입력해주세요."}
            className={"placeholder-muted"}
          />
        </div>
        {/*TODO : 파일 업로드 기능 구현*/}
        <Button type={"button"} variant={"outline"} size={"icon"}>
          <span className="sr-only">File</span>
          <Label
            htmlFor="imageFile"
            className={
              "flex items-center justify-center w-full h-full cursor-pointer"
            }
          >
            <FileUpload />
          </Label>
          <Input id="imageFile" type="file" className={"hidden"} />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            포스트 설명
          </Label>
          <textarea
            // rows={3}
            className={cn(
              "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              "py-2 outline-none resize-none",
            )}
            {...register("description")}
            placeholder={"포스트 본문에 대한 간략한 설명을 추가해주세요."}
            id="description"
          />
        </div>
      </div>
      <Button type="submit" variant="default">
        포스트 업로드
      </Button>
    </form>
  );
};

export default PostUploadForm;
