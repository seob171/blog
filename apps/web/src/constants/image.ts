import { z } from 'zod';

export const MAX_FILE_SIZE = 1024 * 1024 * 5;

export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const fileSchema = z.object({
  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_FILE_SIZE;
    }, '5MB 이하로 업로드 할 수 있어요.')
    .refine((file) => {
      return ACCEPTED_IMAGE_TYPES.some((imageType) => imageType === file?.type);
    }, '.jpg, .jpeg, .png, .webp 확장자만 업로드 할 수 있어요.'),
});
