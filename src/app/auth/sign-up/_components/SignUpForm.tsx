"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType, z } from "zod";

import ErrorMessage from "@/components/form/ErrorMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LOGO_TEXT } from "@/constants/brand";
import { PATH_NAME } from "@/constants/link";
import { passwordRegex } from "@/constants/regex";
import { createClient } from "@/utils/supabase/client";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema: ZodType<FormData> = z
  .object({
    email: z
      .string()
      .min(1)
      .email({ message: "올바른 이메일을 입력해주세요." }),
    password: z
      .string()
      .min(8, "8자리 이상 입력해주세요.")
      .regex(passwordRegex, "영문, 숫자, 특수문자를 모두 포함해주세요."),
    confirmPassword: z
      .string()
      .min(8, "8자리 이상 입력해주세요.")
      .regex(passwordRegex, "영문, 숫자, 특수문자를 모두 포함해주세요."),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password === confirmPassword;
    },
    {
      message: "비밀번호가 일치하지 않습니다.",
      path: ["confirmPassword"],
    },
  );

function SignUpForm() {
  const supabase = createClient();
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const signUp: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: email.split("@")[0],
            avatar_url: null,
          },
        },
      });

      if (error) {
        // TODO : 에러 핸들링
      } else {
        replace(PATH_NAME.signIn);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="grid gap-4 w-full px-4 py-2"
      onSubmit={handleSubmit(signUp)}
    >
      <span className="text-2xl font-bold mb-2">회원가입</span>
      <div className="grid gap-2">
        <Label className="text-muted-foreground">이메일</Label>
        <Input
          {...register("email")}
          placeholder="m@example.com"
          className="text-md"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label className="text-muted-foreground">비밀번호</Label>
        </div>
        <Input {...register("password")} type="password" className="text-md" />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label className="text-muted-foreground">비밀번호 확인</Label>
        </div>
        <Input
          {...register("confirmPassword")}
          type="password"
          className="text-md"
        />
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
      </div>

      <Button type="submit" className="w-full text-md">
        회원가입
      </Button>
      <div className="flex justify-center items-center gap-x-2 text-sm ">
        <span className="text-muted-foreground">{`${LOGO_TEXT} 계정이 이미 있으신가요?`}</span>
        <Link href={PATH_NAME.signIn}>
          <Button variant="link">로그인하기</Button>
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
