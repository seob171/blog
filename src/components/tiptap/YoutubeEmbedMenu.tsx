"use client";

import React, { useState } from "react";

import { Editor } from "@tiptap/react";

import ResponsiveModal from "@/components/common/ResponsiveModal";
import YoutubeEmbedForm from "@/components/form/YoutubeEmbedForm";
import Youtube from "@/components/icon/Youtube";
import { Button } from "@/components/ui/button";

type Props = {
  editor: Editor;
};

const TITLE = "유튜브 영상";
const DESCRIPTION = "링크를 추가해 주세요!";

function YoutubeEmbedMenu({ editor }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveModal
      open={open}
      setOpen={setOpen}
      trigger={
        <Button variant="outline" size="icon" tabIndex={-1}>
          <Youtube className="size-5" />
        </Button>
      }
      title={TITLE}
      description={DESCRIPTION}
    >
      <YoutubeEmbedForm
        embedVideo={({ url }) => {
          editor.commands.setYoutubeVideo({
            src: url,
          });
          setOpen(false);
        }}
      />
    </ResponsiveModal>
  );
}

export default YoutubeEmbedMenu;
