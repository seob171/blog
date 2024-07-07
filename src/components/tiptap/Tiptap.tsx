"use client";

import { EditorContent, useEditor } from "@tiptap/react";

import MenuBar from "@/components/tiptap/MenuBar";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

import ThumbnailUploadMenu from "@/components/tiptap/ThumbnailUploadMenu";
import { useDebounceValue } from "usehooks-ts";
import { useEffect } from "react";
import { extensions } from "@/utils/tiptap/extensions";

const Tiptap = () => {
  const [editorContent, setEditorContent] = useDebounceValue(null, 2000);

  const editor = useEditor({
    extensions: extensions,
    content: "",
    autofocus: "start",
    editable: true,
    onUpdate: ({ editor }) => {
      const { selection } = editor.state;

      setEditorContent(editor.state.doc.toJSON());
      if (!selection.empty) {
        // Do not scroll into view when we're doing a mass update (e.g. underlining text)
        // We only want the scrolling to happen during actual user input
        return;
      }

      const viewportCoords = editor.view.coordsAtPos(selection.from);
      const absoluteOffset = window.scrollY + viewportCoords.top;

      window.scrollTo(window.scrollX, absoluteOffset - window.innerHeight / 2);
    },
    editorProps: {
      attributes: {
        class: "prose mt-5 focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (!editorContent) return;
    console.log("updated!", editorContent);
  }, [editorContent]);

  return (
    <>
      <TextareaAutosize
        className={
          "py-2 text-5xl font-bold placeholder-muted outline-none resize-none"
        }
        placeholder={"제목없음"}
        rows={1}
      />
      <ThumbnailUploadMenu />
      <MenuBar
        editor={editor}
        className={"sticky top-0 py-4 z-general bg-background"}
      />
      <EditorContent
        editor={editor}
        className={"flex-1 cursor-text"}
        onClick={() => {
          editor?.chain().focus().run();
        }}
      />
      <BottomBar
        className={"sticky bottom-0 border border-muted rounded-t-2xl"}
        rightRender={
          <div className={"flex justify-end"}>
            <Button>공개</Button>
          </div>
        }
      />
    </>
  );
};

export default Tiptap;
