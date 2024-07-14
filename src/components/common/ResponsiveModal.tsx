import {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useMediaQuery } from "usehooks-ts";
import { SCREEN_SIZE } from "@/constants/size";
import CustomDrawer from "@/components/drawer/CustomDrawer";
import CustomDialog from "@/components/dialog/CustomDialog";

interface Props extends PropsWithChildren {
  trigger: ReactNode;
  title: string;
  description: string;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  preventInteractOutside?: boolean;
}

const ResponsiveModal = ({
  trigger,
  title,
  description,
  open,
  setOpen,
  children,
  preventInteractOutside,
}: Props) => {
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
};

export default ResponsiveModal;
