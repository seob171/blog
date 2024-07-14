"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Props = {
  embedVideo: SubmitHandler<YoutubeEmbedFormData>;
};

const schema = z.object({
  url: z.string().url(),
});

type YoutubeEmbedFormData = z.infer<typeof schema>;

const YoutubeEmbedForm = ({ embedVideo }: Props) => {
  const { register, handleSubmit } = useForm<YoutubeEmbedFormData>({
    defaultValues: {
      url: "https://www.youtube.com/watch?v=Q3K0TOvTOno",
    },
    resolver: zodResolver(schema),
  });

  return (
    <form
      className={"flex flex-col gap-y-2"}
      onSubmit={handleSubmit(embedVideo)}
    >
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            유튜브 링크
          </Label>
          <Input {...register("url")} id="url" type="url" required />
        </div>
      </div>
      <Button type="submit" variant="default">
        유튜브 임베드
      </Button>
    </form>
  );
};

export default YoutubeEmbedForm;
