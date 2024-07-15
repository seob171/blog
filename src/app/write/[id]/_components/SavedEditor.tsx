"use client";

import { ComponentProps, useCallback, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BottomBar from "@/components/nav/BottomBar";
import { Button } from "@/components/ui/button";

import { useDebounceCallback } from "usehooks-ts";
import EditorComponent from "@/components/tiptap/EditorComponent";
import useUpdatePost from "@/services/post/useUpdatePost";
import useGetPost from "@/services/post/useGetPost";
import PostUploadButton from "@/app/write/_components/PostUploadButton";
import PostUploadForm, {
  PostUploadFormData,
} from "@/app/write/_components/form/PostUploadForm";
import { SubmitHandler } from "react-hook-form";

const SavedEditor = () => {
  const { data } = useGetPost();

  const [title, setTitle] = useState(data?.title ?? "");

  const { mutateAsync: updatePost } = useUpdatePost();
  const [content, setContent] = useState(data?.content ?? "");

  const handleCreate: ComponentProps<typeof EditorComponent>["onCreate"] = ({
    editor,
  }) => {
    if (content) {
      editor.commands.setContent(JSON.parse(content));
      editor.chain().focus().run();
    }
  };

  const handleUpdate: ComponentProps<
    typeof EditorComponent
  >["onUpdate"] = async ({ editor }) => {
    const content = JSON.stringify(editor.state.doc.toJSON());
    setContent(content);
    await updatePost({ title, content });
  };

  const handleUpload: SubmitHandler<PostUploadFormData> = useCallback(
    async ({ description, thumbnailUrl, isPublic }) => {
      await updatePost({
        title,
        content,
        description,
        thumbnail_url: thumbnailUrl,
        published: isPublic,
      });
    },
    [content, title, updatePost],
  );

  const debouncedUpdate = useDebounceCallback(handleUpdate, 5_000);

  return (
    <>
      <TextareaAutosize
        className={"py-2 text-5xl font-bold outline-none resize-none"}
        placeholder={"제목없음"}
        rows={1}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <EditorComponent
        onCreate={handleCreate}
        onUpdate={debouncedUpdate}
        editable={true}
      />
      <BottomBar
        className={"sticky bottom-0 border border-muted rounded-t-2xl"}
        rightRender={
          <div className={"flex justify-end"}>
            <PostUploadButton
              trigger={<Button disabled={!Boolean(title)}>업로드</Button>}
            >
              <PostUploadForm uploadPost={handleUpload} />
            </PostUploadButton>
          </div>
        }
      />
    </>
  );
};

export default SavedEditor;
