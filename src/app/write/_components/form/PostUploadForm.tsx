"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import FileUpload from "@/components/icon/FileUpload";
import Global from "@/components/icon/Global";
import LockClosed from "@/components/icon/LockClosed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Props = {
  uploadPost: SubmitHandler<PostUploadFormData>;
};

const schema = z.object({
  description: z.string().optional(),
  thumbnailUrl: z.string().url(),
  published: z.boolean(),
});

export type PostUploadFormData = z.infer<typeof schema>;

function PostUploadForm({ uploadPost }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm<PostUploadFormData>({
    defaultValues: {
      description: "",
      thumbnailUrl: "",
      published: false,
    },
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(uploadPost)}>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor={register("thumbnailUrl").name} className="sr-only">
            이미지 링크
          </Label>
          <Input
            {...register("thumbnailUrl")}
            id={register("thumbnailUrl").name}
            type="url"
            required
            placeholder="썸네일로 지정할 이미지 링크를 입력해주세요."
            className="placeholder-muted"
          />
        </div>
        {/* TODO : 파일 업로드 기능 구현 */}
        <Button type="button" variant="outline" size="icon">
          <span className="sr-only">File</span>
          <Label
            htmlFor="imageFile"
            className="flex items-center justify-center w-full h-full cursor-pointer"
          >
            <FileUpload />
          </Label>
          <Input id="imageFile" type="file" className="hidden" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            포스트 설명
          </Label>
          <textarea
            rows={3}
            className={cn(
              "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              "py-2 outline-none resize-none",
            )}
            {...register("description")}
            placeholder="포스트 본문에 대한 간략한 설명을 추가해주세요."
            id="description"
          />
        </div>
      </div>
      <Controller
        control={control}
        name="published"
        render={({ field: { onChange, value, ref, onBlur } }) => {
          const published = value;

          return (
            <div className="flex items-center gap-x-2 justify-end my-4">
              <Button
                type="button"
                variant={published ? "default" : "muted"}
                className="p-0"
              >
                <label className="flex items-center gap-x-2 w-full h-full px-4 py-2 cursor-pointer">
                  <Global />
                  <span>전체공개</span>

                  <input
                    type="radio"
                    ref={ref}
                    checked={value === true}
                    onBlur={onBlur} // notify when input is touched
                    onChange={() => onChange(true)}
                    className="sr-only"
                  />
                </label>
              </Button>

              <Button
                type="button"
                variant={!published ? "default" : "muted"}
                className="p-0"
              >
                <label className="flex items-center gap-x-2 w-full h-full px-4 py-2 cursor-pointer">
                  <LockClosed />
                  <span>비공개</span>

                  <input
                    type="radio"
                    ref={ref}
                    checked={value === false}
                    onBlur={onBlur} // notify when input is touched
                    onChange={() => onChange(false)}
                    className="sr-only"
                  />
                </label>
              </Button>
            </div>
          );
        }}
      />
      <Button
        type="submit"
        variant="default"
        disabled={isSubmitting || !isValid}
      >
        포스트 업로드
      </Button>
    </form>
  );
}

export default PostUploadForm;
