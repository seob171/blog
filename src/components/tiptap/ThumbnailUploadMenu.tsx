import React, { useState } from "react";
import CustomDialog from "@/components/dialog/CustomDialog";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/icon/FileUpload";
import ImageUploadForm from "@/components/form/ImageUploadForm";
import { useMediaQuery } from "usehooks-ts";
import { SCREEN_SIZE } from "@/constants/size";
import CustomDrawer from "@/components/drawer/CustomDrawer";

const TITLE = "이미지";
const DESCRIPTION = "링크를 임베드하거나 파일을 업로드하세요.";

const ThumbnailUploadMenu = () => {
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [open, setOpen] = useState(false);
  const isScreenXS = useMediaQuery(`(max-width:${SCREEN_SIZE.sm - 1}px)`);

  const renderTrigger = () => (
    <Button
      variant={"outline"}
      className={"w-fit h-auto p-0 my-4 rounded-lg overflow-hidden"}
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
  );

  if (isScreenXS) {
    return (
      <CustomDrawer
        open={open}
        onOpenChange={setOpen}
        trigger={renderTrigger()}
        title={TITLE}
        description={DESCRIPTION}
      >
        <ImageUploadForm
          fileUpload={({ url }) => {
            setThumbnailImage(url);
            setOpen(false);
          }}
        />
      </CustomDrawer>
    );
  }

  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      trigger={renderTrigger()}
      title={TITLE}
      description={DESCRIPTION}
    >
      <ImageUploadForm
        fileUpload={({ url }) => {
          setThumbnailImage(url);
          setOpen(false);
        }}
      />
    </CustomDialog>
  );
};

export default ThumbnailUploadMenu;
