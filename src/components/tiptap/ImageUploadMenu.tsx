import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import CustomDialog from "@/components/dialog/CustomDialog";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import ImageUploadForm from "@/components/form/ImageUploadForm";
import CustomDrawer from "@/components/drawer/CustomDrawer";
import { useMediaQuery } from "usehooks-ts";
import { SCREEN_SIZE } from "@/constants/size";

type Props = {
  editor: Editor;
};

const TITLE = "이미지";
const DESCRIPTION = "링크를 임베드하거나 파일을 업로드하세요.";

const ImageUploadMenu = ({ editor }: Props) => {
  const [open, setOpen] = useState(false);
  const isScreenXS = useMediaQuery(`(max-width:${SCREEN_SIZE.sm - 1}px)`);

  if (isScreenXS) {
    return (
      <CustomDrawer
        open={open}
        onOpenChange={setOpen}
        trigger={
          <Button variant={"outline"} size={"icon"}>
            <ImageIcon className={"size-5"} />
          </Button>
        }
        title={TITLE}
        description={DESCRIPTION}
      >
        <ImageUploadForm
          fileUpload={({ url }) => {
            editor.chain().focus().setImage({ src: url }).run();
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
      trigger={
        <Button variant={"outline"} size={"icon"}>
          <ImageIcon className={"size-5"} />
        </Button>
      }
      title={TITLE}
      description={DESCRIPTION}
    >
      <ImageUploadForm
        fileUpload={({ url }) => {
          editor.chain().focus().setImage({ src: url }).run();
          setOpen(false);
        }}
      />
    </CustomDialog>
  );
};

export default ImageUploadMenu;
