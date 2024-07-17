"use server";

import { type User } from "@supabase/auth-js";
import { cookies } from "next/headers";

import { createClient } from "@/utils/supabase/server";

export const getUser = async (): Promise<User | null> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.error(error);
  return user;
};
