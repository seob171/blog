"use client";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ComponentProps, useState } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState } from "lexical";
import CustomTextActionPlugin from "@/components/plugin/CustomTextActionPlugin";
import { HeadingNode } from "@lexical/rich-text";
import CustomBlockTypePlugin from "@/components/plugin/CustomBlockTypePlugin";

const Editor = () => {
  const config: InitialConfigType = {
    namespace: "editor",
    theme: {
      text: {
        bold: "font-bold",
        italic: "italic",
        underline: "underline",
        strikethrough: "line-through",
        underlineStrikethrough: "underline line-through",
        code: "text-[94%] bg-muted p-1 rounded",
        highlight: "mx-1",
      },
      heading: {
        h1: "text-5xl",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
        h5: "text-xl",
        h6: "text-lg",
      },
    },
    onError: (error) => {
      console.error(error);
    },
    nodes: [HeadingNode],
  };

  const [editorState, setEditorState] = useState<EditorState>();

  const onChange: ComponentProps<typeof OnChangePlugin>["onChange"] = (
    editorState,
  ) => {
    setEditorState(editorState);
  };

  return (
    <LexicalComposer initialConfig={config}>
      <div className={"flex items-center gap-x-2"}>
        <CustomTextActionPlugin />
        <CustomBlockTypePlugin />
      </div>
      <div className={"relative"}>
        <RichTextPlugin
          contentEditable={<ContentEditable className={"outline-none"} />}
          ErrorBoundary={LexicalErrorBoundary}
          placeholder={
            <div
              className={
                "absolute top-0 left-0 pointer-events-none text-secondary"
              }
            >
              {"Untitled"}
            </div>
          }
        />
      </div>
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;
