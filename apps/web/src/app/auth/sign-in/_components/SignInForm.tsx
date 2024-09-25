'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { ZodType } from 'zod';
import { z } from 'zod';

import ErrorMessage from '@/components/form/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PATH_NAME } from '@/constants/link';
import { passwordRegex } from '@/constants/regex';
import { createClient } from '@/utils/supabase/client';

type FormData = {
  email: string;
  password: string;
};

const schema: ZodType<FormData> = z.object({
  email: z.string().min(1, '최소 한 글자는 입력해 주세요!').email({ message: '이메일 주소를 올바르게 입력해 주세요.' }),
  password: z
    .string()
    .min(8, '8자리 이상 입력해주세요.')
    .regex(passwordRegex, '영문, 숫자, 특수문자를 모두 포함해 주세요!'),
});

function SignInForm() {
  const supabase = createClient();
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const signIn: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes('Email not confirmed')) {
          //
        } else if (error.message.includes('Invalid login credentials')) {
          console.log('Error: Invalid login credentials');
          setError('password', {
            message: '이메일 또는 비밀번호가 맞지 않아요',
          });
        } else {
          console.log('Error:', error.message);
        }
      } else if (user) {
        // TODO : nextPath를 관리해서 해당 경로로 렌딩시키기
        replace(PATH_NAME.home);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="grid gap-4 w-full px-4 py-2" onSubmit={handleSubmit(signIn)}>
      <span className="text-2xl font-bold mb-2">로그인하기</span>
      <div className="grid gap-2">
        <Label className="text-muted-foreground">이메일</Label>
        <Input {...register('email')} placeholder="m@example.com" className="text-md" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label className="text-muted-foreground">비밀번호</Label>
          {/* <Link href="#" className="ml-auto inline-block text-sm underline"> */}
          {/*  Forgot your password? */}
          {/* </Link> */}
        </div>
        <Input {...register('password')} type="password" className="text-md" />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </div>
      <Button type="submit" className="w-full text-md">
        로그인하기
      </Button>
    </form>
  );
}

export default SignInForm;
