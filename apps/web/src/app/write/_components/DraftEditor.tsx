"use client";

import { ComponentProps, useState } from "react";

import { useRouter } from "next/navigation";
import TextareaAutosize from "react-textarea-autosize";
import { useDebounceCallback } from "usehooks-ts";

import PostUploadForm from "@/app/write/_components/form/PostUploadForm";
import PostUploadButton from "@/app/write/_components/PostUploadButton";
import BottomBar from "@/components/nav/BottomBar";
import EditorComponent from "@/components/tiptap/EditorComponent";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { PATH_NAME } from "@/constants/link";
import { useGetAuthUser } from "@/services/auth/useGetAuthUser";
import useCreatePost from "@/services/post/useCreatePost";

function DraftEditor() {
  const { toast } = useToast();
  const { replace } = useRouter();
  const [title, setTitle] = useState("");
  const { data: user } = useGetAuthUser();
  const { mutate: createPost } = useCreatePost({
    retry: false,
    onSuccess: ({ id }) => {
      replace(`${PATH_NAME.write}/${id}`);
      toast({
        title: "임시 저장 완료 😊",
        description: "작성 중인 포스트를 임시 저장했어요.",
      });
    },
  });

  const handleCreate: ComponentProps<typeof EditorComponent>["onUpdate"] = ({
    editor,
  }) => {
    if (title.trim() === "" || !user) return;
    const content = JSON.stringify(editor.state.doc.toJSON());
    createPost({ title, content, creator_id: user.id });
  };

  const debouncedCreate = useDebounceCallback(handleCreate, 10_000);

  return (
    <>
      <TextareaAutosize
        className="py-2 text-5xl font-bold outline-none resize-none"
        placeholder="제목을 입력해 주세요 😊"
        rows={1}
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <EditorComponent onUpdate={debouncedCreate} editable />
      <BottomBar
        className="sticky bottom-0 border border-muted rounded-t-2xl"
        rightRender={
          <div className="flex justify-end">
            <PostUploadButton
              trigger={<Button disabled={!title}>업로드</Button>}
            >
              <PostUploadForm uploadPost={(data) => console.log(data)} />
            </PostUploadButton>
          </div>
        }
      />
    </>
  );
}

export default DraftEditor;
