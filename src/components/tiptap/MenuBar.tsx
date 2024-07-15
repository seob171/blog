import React from "react";
import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  ListChecks,
  Strikethrough,
  Underline,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ImageUploadMenu from "@/components/tiptap/ImageUploadMenu";
import YoutubeEmbedMenu from "@/components/tiptap/YoutubeEmbedMenu";

type Props = {
  editor: Editor | null;
  className?: string;
};

const MenuBar = ({ editor, className }: Props) => {
  if (!editor) return null;

  return (
    <div className={cn("flex gap-2 items-center flex-wrap", className)}>
      {/*heading*/}
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "outline"
        }
        size={"icon"}
        tabIndex={-1}
      >
        <Heading1 className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "outline"
        }
        size={"icon"}
        tabIndex={-1}
      >
        <Heading2 className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "outline"
        }
        size={"icon"}
        tabIndex={-1}
      >
        <Heading3 className={"size-5"} />
      </Button>

      {/*text-style*/}
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <Bold className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <Italic className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <Strikethrough className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        variant={editor.isActive("underline") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <Underline className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        variant={editor.isActive("highlight") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <Highlighter className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setCodeBlock().run()}
        variant={editor.isActive("codeBlock") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <Code className={"size-5"} />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        variant={editor.isActive("taskList") ? "default" : "outline"}
        size={"icon"}
        tabIndex={-1}
      >
        <ListChecks className={"size-5"} />
      </Button>

      {/*image*/}
      <ImageUploadMenu editor={editor} />

      {/*youtube embed*/}
      <YoutubeEmbedMenu editor={editor} />
    </div>
  );
};

export default MenuBar;
