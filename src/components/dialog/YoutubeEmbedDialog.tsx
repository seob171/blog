"use client";

import React, { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Props = {
  trigger: React.ReactNode;
  videoEmbed: SubmitHandler<FormData>;
} & ComponentProps<typeof Dialog>;

const schema = z.object({
  url: z.string().url(),
});

type FormData = z.infer<typeof schema>;

const YoutubeEmbedDialog = ({ trigger, videoEmbed, ...dialogProps }: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      url: "https://www.youtube.com/watch?v=Q3K0TOvTOno",
    },
    resolver: zodResolver(schema),
  });

  return (
    <Dialog {...dialogProps}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>유튜브</DialogTitle>
          <DialogDescription>링크를 임베드하세요</DialogDescription>
        </DialogHeader>
        <form
          className={"flex flex-col gap-y-4"}
          onSubmit={handleSubmit(videoEmbed)}
        >
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="url" className="sr-only">
                유튜브 링크
              </Label>
              <Input {...register("url")} id="url" type="url" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" variant="default">
              유튜브 임베드
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default YoutubeEmbedDialog;
