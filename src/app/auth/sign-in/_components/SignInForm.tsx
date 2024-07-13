"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LOGO_TEXT } from "@/constants/brand";
import Link from "next/link";
import { PATH_NAME } from "@/constants/link";
import { passwordRegex } from "@/constants/regex";

import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "@/components/form/ErrorMessage";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/services/auth/client/route";

type FormData = {
  email: string;
  password: string;
};

const schema: ZodType<FormData> = z.object({
  email: z.string().min(1).email({ message: "올바른 이메일을 입력해주세요." }),
  password: z
    .string()
    .min(8, "8자리 이상 입력해주세요.")
    .regex(passwordRegex, "영문, 숫자, 특수문자를 모두 포함해주세요."),
});

const SignInForm = () => {
  const queryClient = useQueryClient();
  const supabase = createClient();
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const signIn: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        if (error.message.includes("Email not confirmed")) {
          //
        } else if (error.message.includes("Invalid login credentials")) {
          console.log("Error: Invalid login credentials");
          setError("password", {
            message: "이메일 혹은 비밀번호를 틀렸어요",
          });
        } else {
          console.log("Error:", error.message);
        }
      } else if (user) {
        updateUser(queryClient, user);
        // TODO : nextPath를 관리해서 해당 경로로 렌딩시키기
        replace(PATH_NAME.home);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="grid gap-4 w-full px-4 py-2"
      onSubmit={handleSubmit(signIn)}
    >
      <span className={"text-2xl font-bold mb-2"}>로그인</span>
      <div className="grid gap-2">
        <Label className={"text-muted-foreground"}>이메일</Label>
        <Input
          {...register("email")}
          placeholder="m@example.com"
          className={"text-md"}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label className={"text-muted-foreground"}>비밀번호</Label>
          {/*<Link href="#" className="ml-auto inline-block text-sm underline">*/}
          {/*  Forgot your password?*/}
          {/*</Link>*/}
        </div>
        <Input
          {...register("password")}
          type="password"
          className={"text-md"}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </div>
      <Button type="submit" className="w-full text-md">
        로그인
      </Button>
      <Button variant="outline" className="w-full text-md">
        구글 로그인
      </Button>
      <div className={"flex justify-center items-center gap-x-2 text-sm"}>
        <span
          className={"text-muted-foreground"}
        >{`아직 ${LOGO_TEXT} 계정이 없으신가요?`}</span>
        <Link href={PATH_NAME.signUp}>
          <Button variant={"link"}>회원가입하기</Button>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
