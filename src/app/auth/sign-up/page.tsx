import React from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LOGO_TEXT } from "@/constants/brand";
import Link from "next/link";
import { PATH_NAME } from "@/constants/link";

const Page = () => {
  return (
    <>
      <TopBar leftRender={<Back />} />
      <section className={"flex items-center"}>
        <section className={"flex flex-col items-center justify-center w-full"}>
          <div className="grid gap-4 w-full px-4 py-2">
            <span className={"text-2xl font-bold mb-2"}>회원가입</span>
            <div className="grid gap-2">
              <Label htmlFor="email" className={"text-muted-foreground"}>
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className={"text-md"}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className={"text-muted-foreground"}>
                  비밀번호
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                className={"text-md"}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className={"text-muted-foreground"}>
                  비밀번호 확인
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                className={"text-md"}
                required
              />
            </div>
            <Button type="submit" className="w-full text-md">
              회원가입
            </Button>
            <div className={"flex justify-center items-center gap-x-2"}>
              <span
                className={"text-sm text-muted-foreground"}
              >{`${LOGO_TEXT} 계정이 이미 있으신가요?`}</span>
              <Link href={PATH_NAME.signIn}>
                <Button variant={"link"} className={"text-md"}>
                  로그인하기
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
