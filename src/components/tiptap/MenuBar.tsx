import React from "react";
import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  Strikethrough,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ImageUploadMenu from "@/components/tiptap/ImageUploadMenu";

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
      >
        <Heading1 className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "outline"
        }
        size={"icon"}
      >
        <Heading2 className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "outline"
        }
        size={"icon"}
      >
        <Heading3 className={"size-5"} />
      </Button>

      {/*text-style*/}
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "outline"}
        size={"icon"}
      >
        <Bold className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "outline"}
        size={"icon"}
      >
        <Italic className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "outline"}
        size={"icon"}
      >
        <Strikethrough className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        variant={editor.isActive("highlight") ? "default" : "outline"}
        size={"icon"}
      >
        <Highlighter className={"size-5"} />
      </Button>
      {/*image*/}
      <ImageUploadMenu editor={editor} />
      {/*text-align*/}
      <Button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        variant={editor.isActive({ textAlign: "left" }) ? "default" : "outline"}
        size={"icon"}
      >
        <AlignLeft className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        variant={
          editor.isActive({ textAlign: "center" }) ? "default" : "outline"
        }
        size={"icon"}
      >
        <AlignCenter className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        variant={
          editor.isActive({ textAlign: "right" }) ? "default" : "outline"
        }
        size={"icon"}
      >
        <AlignRight className={"size-5"} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        variant={
          editor.isActive({ textAlign: "justify" }) ? "default" : "outline"
        }
        size={"icon"}
      >
        <AlignJustify className={"size-5"} />
      </Button>
    </div>
  );
};

export default MenuBar;
