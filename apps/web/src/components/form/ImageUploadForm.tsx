import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import ErrorMessage from "@/components/form/ErrorMessage";
import FileUpload from "@/components/icon/FileUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fileSchema } from "@/constants/image";
import { createClient } from "@/utils/supabase/client";

type Props = {
  fileUpload: SubmitHandler<ImageUploadFormData>;
};

const schema = z.object({
  url: z.string().url(),
});

type ImageUploadFormData = z.infer<typeof schema>;

function ImageUploadForm({ fileUpload }: Props) {
  const [imageFileErrorMessage, setImageFileErrorMessage] = useState("");
  const supabase = createClient();

  const { register, handleSubmit, setValue, trigger } =
    useForm<ImageUploadFormData>({
      defaultValues: {
        url: "",
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
        <Button type="button" variant="outline" size="icon">
          <span className="sr-only">File</span>
          <Label
            htmlFor="imageFile"
            className="flex items-center justify-center w-full h-full cursor-pointer"
          >
            <FileUpload />
          </Label>
          <Input
            id="imageFile"
            type="file"
            className="hidden"
            // accept="image/*"
            onChange={async (e) => {
              const imageFile = e.target.files?.[0];
              if (imageFile) {
                const { success, error } = fileSchema.safeParse({
                  imageFile,
                });

                if (success) {
                  // upleadImg가 존재할 경우 아래 supabase 로직을 실행할 것.
                  const { data } = await supabase.storage
                    .from("images")
                    .upload(
                      `post/${dayjs()}_${Math.floor(Math.random() * 1000)}`,
                      imageFile,
                    );

                  const {
                    data: { publicUrl },
                  } = supabase.storage
                    .from("images")
                    .getPublicUrl(`${data!.path}`);

                  setValue("url", publicUrl, { shouldValidate: true });

                  const isValid = await trigger();

                  if (isValid) await handleSubmit(fileUpload)();
                }

                if (error) {
                  setImageFileErrorMessage(error.issues?.[0].message);
                }
              }
            }}
          />
        </Button>
      </div>
      <ErrorMessage hidden={!imageFileErrorMessage}>
        {imageFileErrorMessage}
      </ErrorMessage>
      <Button type="submit" variant="default">
        사진 추가
      </Button>
    </form>
  );
}

export default ImageUploadForm;
