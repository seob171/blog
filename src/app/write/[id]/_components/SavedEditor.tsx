"use client";

import { ComponentProps, useCallback, useState } from "react";

import dayjs from "dayjs";
import { SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useDebounceCallback } from "usehooks-ts";

import PostUploadForm, {
  PostUploadFormData,
} from "@/app/write/_components/form/PostUploadForm";
import PostUploadButton from "@/app/write/_components/PostUploadButton";
import BottomBar from "@/components/nav/BottomBar";
import EditorComponent from "@/components/tiptap/EditorComponent";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useGetPost from "@/services/post/useGetPost";
import useUpdatePost from "@/services/post/useUpdatePost";

function SavedEditor() {
  const { toast } = useToast();
  const { data } = useGetPost();

  const [title, setTitle] = useState(data?.title ?? "");

  const { mutateAsync: updatePost } = useUpdatePost({
    onSuccess: (_, { published }) => {
      toast({
        title: published ? "저장 완료! 🎉" : "임시 저장 완료 😊",
        description: published
          ? "포스트가 성공적으로 저장되었어요."
          : "작성 중인 포스트를 임시 저장했어요.",
      });
    },
  });
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
    await updatePost({ title, content, updated_at: dayjs().toDate() });
  };

  const handleUpload: SubmitHandler<PostUploadFormData> = useCallback(
    async ({ description, thumbnailUrl, published }) => {
      await updatePost({
        title,
        content,
        description,
        thumbnail_url: thumbnailUrl,
        published,
        updated_at: dayjs().toDate(),
      });
    },
    [content, title, updatePost],
  );

  // @TODO : UX 향상을 위해 저장시간을 사용자별로 설정 가능하도록 고도화하기
  const debouncedUpdate = useDebounceCallback(handleUpdate, 60_000);

  return (
    <>
      <TextareaAutosize
        className="py-2 text-5xl font-bold outline-none resize-none"
        placeholder="제목을 입력해 주세요 😊"
        rows={1}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <EditorComponent
        onCreate={handleCreate}
        onUpdate={debouncedUpdate}
        editable
      />
      <BottomBar
        className="sticky bottom-0 border border-muted rounded-t-2xl"
        rightRender={
          <div className="flex justify-end">
            <PostUploadButton
              trigger={<Button disabled={!title}>업로드</Button>}
            >
              <PostUploadForm uploadPost={handleUpload} data={data} />
            </PostUploadButton>
          </div>
        }
      />
    </>
  );
}

export default SavedEditor;
