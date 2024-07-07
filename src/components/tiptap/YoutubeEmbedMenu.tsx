"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Editor } from "@tiptap/react";
import Youtube from "@/components/icon/Youtube";
import CustomDialog from "@/components/dialog/CustomDialog";
import YoutubeEmbedForm from "@/components/form/YoutubeEmbedForm";
import { useMediaQuery } from "usehooks-ts";
import { SCREEN_SIZE } from "@/constants/size";
import CustomDrawer from "@/components/drawer/CustomDrawer";

type Props = {
  editor: Editor;
};

const TITLE = "유튜브";
const DESCRIPTION = "링크를 임베드하세요";

const YoutubeEmbedMenu = ({ editor }: Props) => {
  const [open, setOpen] = useState(false);
  const isScreenXS = useMediaQuery(`(max-width:${SCREEN_SIZE.sm - 1}px)`);

  if (isScreenXS) {
    return (
      <CustomDrawer
        open={open}
        onOpenChange={setOpen}
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
      </CustomDrawer>
    );
  }

  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
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
    </CustomDialog>
  );
};

export default YoutubeEmbedMenu;
