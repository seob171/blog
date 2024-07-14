"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Editor } from "@tiptap/react";
import Youtube from "@/components/icon/Youtube";
import YoutubeEmbedForm from "@/components/form/YoutubeEmbedForm";
import ResponsiveModal from "@/components/common/ResponsiveModal";

type Props = {
  editor: Editor;
};

const TITLE = "유튜브";
const DESCRIPTION = "링크를 임베드하세요.";

const YoutubeEmbedMenu = ({ editor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveModal
      open={open}
      setOpen={setOpen}
      trigger={
        <Button variant={"outline"} size={"icon"}>
          <Youtube className={"size-5"} />
        </Button>
      }
      title={TITLE}
      description={DESCRIPTION}
    >
      <YoutubeEmbedForm
        videoEmbed={({ url }) => {
          editor.commands.setYoutubeVideo({
            src: url,
          });
          setOpen(false);
        }}
      />
    </ResponsiveModal>
  );
};

export default YoutubeEmbedMenu;
