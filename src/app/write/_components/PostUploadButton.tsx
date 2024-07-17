import React, { PropsWithChildren, ReactNode, useState } from "react";

import ResponsiveModal from "@/components/common/ResponsiveModal";

interface Props extends PropsWithChildren {
  // editor: Editor;
  trigger: ReactNode;
}

const TITLE = "업로드";
const DESCRIPTION = "썸네일과 간략한 설명을 추가해주세요.";

function PostUploadButton({ trigger, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveModal
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      title={TITLE}
      description={DESCRIPTION}
      preventInteractOutside
    >
      {children}
    </ResponsiveModal>
  );
}

export default PostUploadButton;
