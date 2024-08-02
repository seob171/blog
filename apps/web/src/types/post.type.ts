import z from "zod";

const bodySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  thumbnail: z.string().optional(),
});

type Body = z.infer<typeof bodySchema>;

export const isValidBody = (body: unknown): body is Body => {
  const { success } = bodySchema.safeParse(body);
  return success;
};
