import React, { useState } from "react";

import Image from "next/image";

import ResponsiveModal from "@/components/common/ResponsiveModal";
import ImageUploadForm from "@/components/form/ImageUploadForm";
import FileUpload from "@/components/icon/FileUpload";
import { Button } from "@/components/ui/button";

const TITLE = "이미지";
const DESCRIPTION = "링크를 임베드하거나 파일을 업로드하세요.";

function ThumbnailUploadMenu() {
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveModal
      open={open}
      setOpen={setOpen}
      trigger={
        <Button
          variant="outline"
          className="w-fit h-auto p-0 my-4 rounded-lg overflow-hidden"
        >
          <div className="relative w-44 aspect-video">
            <Image
              src={thumbnailImage}
              alt="uploaded thumbnail"
              className={`${thumbnailImage ? "" : "hidden"}`}
            />
            <div
              className={`${thumbnailImage ? "hidden" : "flex gap-x-2 items-center justify-center w-full h-full"}`}
            >
              <span>썸네일 업로드</span>
              <FileUpload className="size-4" />
            </div>
          </div>
        </Button>
      }
      title={TITLE}
      description={DESCRIPTION}
    >
      <ImageUploadForm
        fileUpload={({ url }) => {
          setThumbnailImage(url);
          setOpen(false);
        }}
      />
    </ResponsiveModal>
  );
}

export default ThumbnailUploadMenu;
