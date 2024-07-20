"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/api";
import { PrismaModels } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";

export const getUser = async (): Promise<PrismaModels["profiles"] | null> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) {
    const res = await axiosInstance.get<PrismaModels["profiles"]>(
      `/user/${user.id}`,
    );
    return res.data;
  }
  console.error(error);
  return null;
};
