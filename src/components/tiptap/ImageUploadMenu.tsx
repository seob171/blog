import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import ImageUploadForm from "@/components/form/ImageUploadForm";
import ResponsiveModal from "@/components/common/ResponsiveModal";

type Props = {
  editor: Editor;
};

const TITLE = "이미지";
const DESCRIPTION = "링크를 임베드하거나 파일을 업로드하세요.";

const ImageUploadMenu = ({ editor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveModal
      open={open}
      setOpen={setOpen}
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
    </ResponsiveModal>
  );
};

export default ImageUploadMenu;
