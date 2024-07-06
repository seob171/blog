import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import ImageUploadDialog from "@/components/dialog/ImageUploadDialog";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";

type Props = {
  editor: Editor;
};

const ImageUploadMenu = ({ editor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <ImageUploadDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant={"outline"} size={"icon"}>
          <ImageIcon className={"size-5"} />
        </Button>
      }
      fileUpload={({ url }) => {
        editor.chain().focus().setImage({ src: url }).run();
        setOpen(false);
      }}
    />
  );
};

export default ImageUploadMenu;
