'use client';

import React, { useState } from 'react';

import { GlobeAsiaAustraliaIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import ErrorMessage from '@/components/form/ErrorMessage';
import FileUpload from '@/components/icon/FileUpload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fileSchema } from '@/constants/image';
import type { PrismaModels } from '@/lib/prisma';
import { cn } from '@/lib/utils';
import { createClient } from '@/utils/supabase/client';

type Props = {
  uploadPost: SubmitHandler<PostUploadFormData>;
  data?: Partial<PrismaModels['posts']>;
};

const schema = z.object({
  description: z.string().optional(),
  thumbnailUrl: z.string().url(),
  published: z.boolean(),
});

export type PostUploadFormData = z.infer<typeof schema>;

function PostUploadForm({ uploadPost, data = {} }: Props) {
  const [imageFileErrorMessage, setImageFileErrorMessage] = useState('');

  const supabase = createClient();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, isValid },
  } = useForm<PostUploadFormData>({
    defaultValues: {
      description: data?.description ?? '',
      thumbnailUrl: data?.thumbnail_url ?? '',
      published: data?.published ?? false,
    },
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(uploadPost)}>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor={register('thumbnailUrl').name} className="sr-only">
            이미지 링크
          </Label>
          <Input
            {...register('thumbnailUrl')}
            id={register('thumbnailUrl').name}
            type="url"
            required
            placeholder="썸네일 이미지 링크를 입력해 주세요!"
            className="placeholder-muted"
          />
        </div>
        <Button type="button" variant="outline" size="icon">
          <span className="sr-only">File</span>
          <Label htmlFor="imageFile" className="flex items-center justify-center w-full h-full cursor-pointer">
            <FileUpload />
          </Label>
          <Input
            id="imageFile"
            type="file"
            className="hidden"
            // accept="image/*"
            onChange={async (e) => {
              const imageFile = e.target.files?.[0];
              if (imageFile) {
                const { success, error } = fileSchema.safeParse({
                  imageFile,
                });

                if (success) {
                  // upleadImg가 존재할 경우 아래 supabase 로직을 실행할 것.
                  const { data } = await supabase.storage
                    .from('images')
                    .upload(`post/${dayjs()}_${Math.floor(Math.random() * 1000)}`, imageFile);

                  const {
                    data: { publicUrl },
                  } = supabase.storage.from('images').getPublicUrl(`${data!.path}`);

                  setValue('thumbnailUrl', publicUrl, { shouldValidate: true });
                }

                if (error) {
                  setImageFileErrorMessage(error.issues?.[0].message);
                }
              }
            }}
          />
        </Button>
      </div>
      <ErrorMessage hidden={!imageFileErrorMessage}>{imageFileErrorMessage}</ErrorMessage>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="url" className="sr-only">
            포스트 설명
          </Label>
          <textarea
            rows={3}
            className={cn(
              'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              'py-2 outline-none resize-none'
            )}
            {...register('description')}
            placeholder="본문에 대한 간단한 설명을 입력해 주세요!"
            id="description"
          />
        </div>
      </div>
      <Controller
        control={control}
        name="published"
        render={({ field: { onChange, value, ref, onBlur } }) => {
          const published = value;

          return (
            <div className="flex items-center gap-x-2 justify-end my-4">
              <Button type="button" variant={published ? 'default' : 'muted'} className="p-0">
                <label className="flex items-center gap-x-2 w-full h-full px-4 py-2 cursor-pointer">
                  <GlobeAsiaAustraliaIcon />
                  <span>모두에게 공개</span>

                  <input
                    type="radio"
                    ref={ref}
                    checked={value === true}
                    onBlur={onBlur} // notify when input is touched
                    onChange={() => onChange(true)}
                    className="sr-only"
                  />
                </label>
              </Button>

              <Button type="button" variant={!published ? 'default' : 'muted'} className="p-0">
                <label className="flex items-center gap-x-2 w-full h-full px-4 py-2 cursor-pointer">
                  <LockClosedIcon />
                  <span>나만 보기</span>

                  <input
                    type="radio"
                    ref={ref}
                    checked={value === false}
                    onBlur={onBlur} // notify when input is touched
                    onChange={() => onChange(false)}
                    className="sr-only"
                  />
                </label>
              </Button>
            </div>
          );
        }}
      />
      <Button type="submit" variant="default" disabled={isSubmitting || !isValid}>
        포스트 올리기
      </Button>
    </form>
  );
}

export default PostUploadForm;
