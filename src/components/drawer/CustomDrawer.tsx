"use client";

import React, { ComponentProps } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Props = {
  trigger: React.ReactNode;
  title: string;
  description: string;
} & ComponentProps<typeof Drawer>;

function CustomDrawer({
  trigger,
  title,
  description,
  children,
  ...drawerProps
}: Props) {
  return (
    <Drawer {...drawerProps}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="px-4">
        <DrawerHeader className="text-left px-0">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
}

export default CustomDrawer;
