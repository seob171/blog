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
import CustomTextAction from "@/components/plugin/CustomTextAction";

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
    },
    onError: (error) => {
      console.error(error);
    },
  };

  const [editorState, setEditorState] = useState<EditorState>();

  const onChange: ComponentProps<typeof OnChangePlugin>["onChange"] = (
    editorState,
  ) => {
    console.log(editorState);
    setEditorState(editorState);
  };

  return (
    <LexicalComposer initialConfig={config}>
      <CustomTextAction />
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
