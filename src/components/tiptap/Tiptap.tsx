"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import Focus from "@tiptap/extension-focus";
import { TextAlign } from "@tiptap/extension-text-align";
import { Highlight } from "@tiptap/extension-highlight";
import MenuBar from "@/components/tiptap/MenuBar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Placeholder.configure({
        // emptyEditorClass: "prose-empty",
        emptyNodeClass:
          "before:content-[attr(data-placeholder)] before:float-left before:pointer-events-none before:text-muted-foreground before:h-0",
        // Use a placeholder:
        // placeholder: "Write something …",
        // Use different placeholders depending on the node type:
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
    ],
    content: "",
    autofocus: "start",
    editable: true,
    editorProps: {
      attributes: {
        class: "prose mt-5 focus:outline-none",
      },
    },
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
