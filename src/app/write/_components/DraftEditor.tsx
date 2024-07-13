"use client";

import { ComponentProps, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

import ThumbnailUploadMenu from "@/components/tiptap/ThumbnailUploadMenu";
import { useDebounceCallback } from "usehooks-ts";
import EditorComponent from "@/components/tiptap/EditorComponent";
import useCreatePost from "@/services/post/useCreatePost";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/constants/link";

const DraftEditor = () => {
  const { replace } = useRouter();
  const [title, setTitle] = useState("");
  const { mutateAsync: createPost } = useCreatePost({
    onSuccess: ({ id }) => {
      replace(`${PATH_NAME.write}/${id}`);
    },
  });

  const handleUpdate: ComponentProps<
    typeof EditorComponent
  >["onUpdate"] = async ({ editor }) => {
    if (title.trim() === "") return;
    const content = JSON.stringify(editor.state.doc.toJSON());
    await createPost({ title, content });
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
      <EditorComponent onUpdate={debouncedUpdate} editable={true} />
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

export default DraftEditor;
