"use client";

import { ComponentProps, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

import ThumbnailUploadMenu from "@/components/tiptap/ThumbnailUploadMenu";
import { useDebounceCallback } from "usehooks-ts";
import EditorComponent from "@/components/tiptap/EditorComponent";
import useUpdatePost from "@/services/post/useUpdatePost";
import useGetPost from "@/services/post/useGetPost";

const SavedEditor = () => {
  const { data } = useGetPost();
  const { mutate: updatePost } = useUpdatePost();
  const [title, setTitle] = useState(data?.title ?? "");
  const [content, setContent] = useState(data?.content ?? "");

  const handleCreate: ComponentProps<typeof EditorComponent>["onCreate"] = ({
    editor,
  }) => {
    if (content) editor.commands.setContent(JSON.parse(content));
  };

  const handleUpdate: ComponentProps<typeof EditorComponent>["onUpdate"] = ({
    editor,
  }) => {
    const content = JSON.stringify(editor.state.doc.toJSON());
    updatePost({ title, content });
  };

  const debouncedUpdate = useDebounceCallback(handleUpdate, 3000);

  return (
    <>
      <TextareaAutosize
        className={
          "py-2 text-5xl font-bold placeholder-muted outline-none resize-none"
        }
        placeholder={"제목없음"}
        rows={1}
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ThumbnailUploadMenu />
      <EditorComponent
        onCreate={handleCreate}
        onUpdate={debouncedUpdate}
        editable={true}
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

export default SavedEditor;
