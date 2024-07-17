import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from "react";

import { useMediaQuery } from "usehooks-ts";

import CustomDialog from "@/components/dialog/CustomDialog";
import CustomDrawer from "@/components/drawer/CustomDrawer";
import { SCREEN_SIZE } from "@/constants/size";

interface Props extends PropsWithChildren {
  trigger: ReactNode;
  title: string;
  description: string;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  preventInteractOutside?: boolean;
}

function ResponsiveModal({
  trigger,
  title,
  description,
  open,
  setOpen,
  children,
  preventInteractOutside,
}: Props) {
  const isScreenXS = useMediaQuery(`(max-width:${SCREEN_SIZE.sm - 1}px)`);

  if (isScreenXS) {
    return (
      <CustomDrawer
        open={open}
        onOpenChange={setOpen}
        trigger={trigger}
        title={title}
        description={description}
      >
        {children}
      </CustomDrawer>
    );
  }

  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      title={title}
      description={description}
      preventInteractOutside={preventInteractOutside}
    >
      {children}
    </CustomDialog>
  );
}

export default ResponsiveModal;
