import React, { useState } from "react";
import ImageUploadDialog from "@/components/dialog/ImageUploadDialog";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/icon/FileUpload";

const ThumbnailUploadMenu = () => {
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <ImageUploadDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          variant={"outline"}
          className={"w-fit h-auto p-0 my-4 rounded-2xl overflow-hidden"}
        >
          <div className={"relative w-44 aspect-video"}>
            <img
              src={thumbnailImage}
              alt={"Thumbnail image"}
              className={`${thumbnailImage ? "" : "hidden"}`}
            />
            <div
              className={`${thumbnailImage ? "hidden" : "flex gap-x-2 items-center justify-center w-full h-full"}`}
            >
              <span>썸네일 업로드</span>
              <FileUpload className={"size-4"} />
            </div>
          </div>
        </Button>
      }
      fileUpload={({ url }) => {
        setThumbnailImage(url);
        setOpen(false);
      }}
    />
  );
};

export default ThumbnailUploadMenu;
