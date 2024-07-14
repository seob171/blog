"use client";

import { ComponentProps, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

import { useDebounceCallback } from "usehooks-ts";
import EditorComponent from "@/components/tiptap/EditorComponent";
import useCreatePost from "@/services/post/useCreatePost";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/constants/link";
import PostUploadButton from "@/app/write/_components/PostUploadButton";
import PostUploadForm from "@/app/write/_components/form/PostUploadForm";

const DraftEditor = () => {
  const { replace } = useRouter();
  const [title, setTitle] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const { mutateAsync: createPost } = useCreatePost({
    retryDelay: 5000,
    onSuccess: ({ id }) => {
      replace(`${PATH_NAME.write}/${id}`);
    },
  });

  const handleCreate: ComponentProps<
    typeof EditorComponent
  >["onUpdate"] = async ({ editor }) => {
    if (title.trim() === "") return;
    const content = JSON.stringify(editor.state.doc.toJSON());
    await createPost({ title, content });
  };

  const debouncedCreate = useDebounceCallback(handleCreate, 10_000);

  return (
    <>
      <TextareaAutosize
        className={"py-2 text-5xl font-bold outline-none resize-none"}
        placeholder={"제목없음"}
        rows={1}
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <EditorComponent
        onUpdate={(e) => {
          setIsEmpty(e.editor.isEmpty);
          debouncedCreate(e);
        }}
        editable={true}
      />
      <BottomBar
        className={"sticky bottom-0 border border-muted rounded-t-2xl"}
        rightRender={
          <div className={"flex justify-end"}>
            <PostUploadButton
              trigger={
                <Button disabled={isEmpty || !Boolean(title)}>업로드</Button>
              }
            >
              <PostUploadForm uploadPost={(data) => console.log(data)} />
            </PostUploadButton>
          </div>
        }
      />
    </>
  );
};

export default DraftEditor;
