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

const Editor = () => {
  const config: InitialConfigType = {
    namespace: "editor",
    theme: {},
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
      <RichTextPlugin
        contentEditable={<ContentEditable className={"outline-none"} />}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={<div>{"Editor placeholder"}</div>}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;
