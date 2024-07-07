import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Props = {
  fileUpload: SubmitHandler<FormData>;
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

type FormData = z.infer<typeof schema>;

const ImageUploadForm = ({ fileUpload }: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      url: "https://assets.lummi.ai/assets/QmfP4B4bLwJMT5SQ6BVuzjLM8YNFtgxF4mUedfX5bB6kZS?auto=format&w=1500",
    },
    resolver: zodResolver(schema),
  });
  return (
    <form
      className={"flex flex-col gap-y-4"}
      onSubmit={handleSubmit(fileUpload)}
    >
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            이미지 링크
          </Label>
          <Input {...register("url")} id="url" type="url" required />
        </div>
        {/*TODO : 파일 업로드 기능 구현*/}
        {/*<Button type={"button"} variant={"outline"} size={"icon"}>*/}
        {/*  <span className="sr-only">File</span>*/}
        {/*  <Label*/}
        {/*    htmlFor="imageFile"*/}
        {/*    className={*/}
        {/*      "flex items-center justify-center w-full h-full cursor-pointer"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <FileUpload />*/}
        {/*  </Label>*/}
        {/*  <Input id="imageFile" type="file" className={"hidden"} />*/}
        {/*</Button>*/}
      </div>
      <Button type="submit" variant="default">
        이미지 임베드
      </Button>
    </form>
  );
};

export default ImageUploadForm;
