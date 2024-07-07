"use client";

import React, { useState } from "react";
import YoutubeEmbedDialog from "@/components/dialog/YoutubeEmbedDialog";
import { Button } from "@/components/ui/button";
import { Editor } from "@tiptap/react";
import Youtube from "@/components/icon/Youtube";

type Props = {
  editor: Editor;
};

const YoutubeEmbedMenu = ({ editor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <YoutubeEmbedDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant={"outline"} size={"icon"}>
          <Youtube className={"size-5"} />
        </Button>
      }
      videoEmbed={({ url }) => {
        editor.commands.setYoutubeVideo({
          src: url,
          width: 568,
          height: 568 * (9 / 16),
        });
        setOpen(false);
      }}
    />
  );
};

export default YoutubeEmbedMenu;
