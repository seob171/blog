import React, { PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PATH_NAME } from "@/constants/link";

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect(PATH_NAME.signIn);

  return <>{children}</>;
};

export default Layout;
