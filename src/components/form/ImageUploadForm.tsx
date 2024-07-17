import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  fileUpload: SubmitHandler<ImageUploadFormData>;
};

// const MAX_FILE_SIZE = 1024 * 1024 * 5;
// const ACCEPTED_IMAGE_MIME_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const schema = z.object({
  url: z.string().url(),
  // imageFile: z
  //   .instanceof(File)
  //   .optional()
  //   .refine((file) => {
  //     return !file || file.size <= MAX_FILE_SIZE;
  //   }, "Max image size is 5MB.")
  //   .refine((file) => {
  //     return ACCEPTED_IMAGE_TYPES.some((imageType) => imageType === file?.type);
  //   }, "Only .jpg, .jpeg, .png and .webp formats are supported."),
});

type ImageUploadFormData = z.infer<typeof schema>;

function ImageUploadForm({ fileUpload }: Props) {
  const { register, handleSubmit } = useForm<ImageUploadFormData>({
    defaultValues: {
      url: "https://assets.lummi.ai/assets/QmfP4B4bLwJMT5SQ6BVuzjLM8YNFtgxF4mUedfX5bB6kZS?auto=format&w=1500",
    },
    resolver: zodResolver(schema),
  });
  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(fileUpload)}>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            이미지 링크
          </Label>
          <Input {...register("url")} id="url" type="url" required />
        </div>
        {/* TODO : 파일 업로드 기능 구현 */}
        {/* <Button type={"button"} variant={"outline"} size={"icon"}> */}
        {/*  <span className="sr-only">File</span> */}
        {/*  <Label */}
        {/*    htmlFor="imageFile" */}
        {/*    className={ */}
        {/*      "flex items-center justify-center w-full h-full cursor-pointer" */}
        {/*    } */}
        {/*  > */}
        {/*    <FileUpload /> */}
        {/*  </Label> */}
        {/*  <Input id="imageFile" type="file" className={"hidden"} /> */}
        {/* </Button> */}
      </div>
      <Button type="submit" variant="default">
        이미지 임베드
      </Button>
    </form>
  );
}

export default ImageUploadForm;