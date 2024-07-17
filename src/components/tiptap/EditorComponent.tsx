"use client";

import React from "react";

import { EditorContent, EditorOptions, useEditor } from "@tiptap/react";

import MenuBar from "@/components/tiptap/MenuBar";
import { EXTENSIONS } from "@/utils/tiptap/extensions";

function EditorComponent({
  onUpdate,
  editable = false,
  ...editorOptions
}: Partial<EditorOptions>) {
  const editor = useEditor({
    extensions: EXTENSIONS,
    editable,
    onUpdate: (props) => {
      onUpdate?.(props);
      const { editor } = props;

      /**
       * @desc 에디터 업데이트 시, 스크롤 조정
       */
      const { selection } = editor.state;

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
    ...editorOptions,
  });

  return (
    <>
      <MenuBar
        editor={editor}
        className={`sticky top-0 py-4 z-general bg-background ${!editable ? "hidden" : ""}`}
      />
      <EditorContent
        editor={editor}
        className="flex-1 cursor-text"
        onClick={() => {
          editor?.chain().focus().run();
        }}
      />
    </>
  );
}

export default EditorComponent;
