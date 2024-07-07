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
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import ThumbnailUploadMenu from "@/components/tiptap/ThumbnailUploadMenu";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: "my-3",
          },
        },
        horizontalRule: { HTMLAttributes: { class: "my-3" } },
      }),
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
      TaskList.configure({}),
      TaskItem.configure({
        nested: true,
      }),
      Youtube.configure({
        inline: true,
        HTMLAttributes: {
          class: "rounded-lg overflow-hidden aspect-video w-full h-auto",
        },
      }),
      Image.configure({
        inline: true,
        HTMLAttributes: {
          class: "rounded-lg",
        },
      }),
      // FileHandler.configure({
      //   allowedMimeTypes: [
      //     "image/png",
      //     "image/jpeg",
      //     "image/gif",
      //     "image/webp",
      //   ],
      //   onDrop: (currentEditor: Editor, files: File[], pos: number | Range) => {
      //     files.forEach((file: File) => {
      //       const fileReader = new FileReader();
      //
      //       fileReader.readAsDataURL(file);
      //       fileReader.onload = () => {
      //         currentEditor
      //           .chain()
      //           .insertContentAt(pos, {
      //             type: "image",
      //             attrs: {
      //               src: fileReader.result,
      //             },
      //           })
      //           .focus()
      //           .run();
      //       };
      //     });
      //   },
      //   onPaste: (currentEditor: Editor, files: File[], htmlContent) => {
      //     files.forEach((file) => {
      //       if (htmlContent) {
      //         // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
      //         // you could extract the pasted file from this url string and upload it to a server for example
      //         console.log(htmlContent); // eslint-disable-line no-console
      //         return false;
      //       }
      //
      //       const fileReader = new FileReader();
      //
      //       fileReader.readAsDataURL(file);
      //       fileReader.onload = () => {
      //         currentEditor
      //           .chain()
      //           .insertContentAt(currentEditor.state.selection.anchor, {
      //             type: "image",
      //             attrs: {
      //               src: fileReader.result,
      //             },
      //           })
      //           .focus()
      //           .run();
      //       };
      //     });
      //   },
      // }),
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
    onUpdate: ({ editor }) => {
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
