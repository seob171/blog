"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { type User } from "@supabase/auth-js";

const getUser = async (): Promise<User | null> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.error(error);
  return user;
};

export default getUser;
