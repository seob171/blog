import z from "zod";

import { PrismaModels } from "@/lib/prisma";

const bodySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  thumbnail: z.string().optional(),
});

type Body = z.infer<typeof bodySchema>;

export const isValidBody = (body: any): body is Body => {
  const { success } = bodySchema.safeParse(body);
  return success;
};
