"use client";

import { ComponentProps, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

import { useDebounceCallback } from "usehooks-ts";
import EditorComponent from "@/components/tiptap/EditorComponent";
import useUpdatePost from "@/services/post/useUpdatePost";
import useGetPost from "@/services/post/useGetPost";
import PostUploadButton from "@/app/write/_components/PostUploadButton";
import PostUploadForm from "@/app/write/_components/form/PostUploadForm";

const SavedEditor = () => {
  const { data } = useGetPost();
  const [title, setTitle] = useState(data?.title ?? "");
  const [isEmpty, setIsEmpty] = useState(true);

  const { mutate: updatePost } = useUpdatePost();
  const [content] = useState(data?.content ?? "");

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

  const debouncedUpdate = useDebounceCallback(handleUpdate, 3_000);

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
        onCreate={handleCreate}
        onUpdate={(e) => {
          setIsEmpty(e.editor.isEmpty);
          debouncedUpdate(e);
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

export default SavedEditor;
