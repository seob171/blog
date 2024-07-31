"use client";

import React, { useState } from "react";

import { Editor } from "@tiptap/react";
import { Image as ImageIcon } from "lucide-react";

import ResponsiveModal from "@/components/common/ResponsiveModal";
import ImageUploadForm from "@/components/form/ImageUploadForm";
import { Button } from "@/components/ui/button";

type Props = {
  editor: Editor;
};

const TITLE = "사진";
const DESCRIPTION = "링크를 추가하거나 파일을 올려주세요!";

function ImageUploadMenu({ editor }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveModal
      open={open}
      setOpen={setOpen}
      trigger={
        <Button variant="outline" size="icon" tabIndex={-1}>
          <ImageIcon className="size-5" />
        </Button>
      }
      title={TITLE}
      description={DESCRIPTION}
    >
      <ImageUploadForm
        fileUpload={async ({ url }) => {
          editor.chain().focus().setImage({ src: url }).run();
          setOpen(false);
        }}
      />
    </ResponsiveModal>
  );
}

export default ImageUploadMenu;
