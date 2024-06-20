import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "@/features/Auth/LoginForm";

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-full">
        <DialogTitle hidden />
        <DialogDescription hidden />
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
