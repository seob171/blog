"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import Focus from "@tiptap/extension-focus";
import { TextAlign } from "@tiptap/extension-text-align";
import { Highlight } from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import MenuBar from "@/components/tiptap/MenuBar";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

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
      Link.configure({
        openOnClick: true,
        autolink: true,
        protocols: ["https", "http"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({
        // emptyEditorClass: "prose-empty",
        emptyNodeClass:
          "before:content-[attr(data-placeholder)] before:float-left before:pointer-events-none before:text-muted before:h-0",
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
      <TextareaAutosize
        className={
          "py-2 text-5xl font-bold placeholder-muted outline-none resize-none"
        }
        placeholder={"제목없음"}
        rows={1}
      />
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
