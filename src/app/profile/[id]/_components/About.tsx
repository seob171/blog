import React from "react";

import { Button } from "@/components/ui/button";
import { PrismaModels } from "@/lib/prisma";

type Props = {
  user: PrismaModels["profiles"];
};

const About = ({ user }: Props) => {
  const { introduction } = user;

  return (
    <div>
      <div className="flex flex-col gap-y-4 w-full">
        <p className="font-sm text-muted-foreground">
          {introduction ?? "강아지와 커피를 좋아하는 개발자입니다."}
        </p>
        <Button variant="default">프로필 수정하기</Button>
      </div>
    </div>
  );
};

export default About;
