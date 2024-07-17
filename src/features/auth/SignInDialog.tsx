"use client";

import React, { useState } from "react";

import { useMediaQuery } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SCREEN_SIZE } from "@/constants/size";
import SignInForm from "@/features/auth/SignInForm";

function SignInDialog() {
  const [open, setOpen] = useState(false);
  const isScreenXS = useMediaQuery(`(max-width:${SCREEN_SIZE.sm - 1}px)`);

  if (isScreenXS) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>로그인</Button>
        </DrawerTrigger>
        <DrawerContent className="p-0">
          <DrawerHeader className="sr-only" hidden>
            <DrawerTitle hidden />
            <DrawerDescription hidden />
          </DrawerHeader>
          <SignInForm />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-0">
        <DialogTitle className="sr-only" hidden />
        <DialogDescription className="sr-only" hidden />
        <SignInForm />
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialog;
