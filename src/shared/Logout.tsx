"use client";

import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { PATH_NAME } from "@/constants/link";
import { clearUser } from "@/services/auth/client/route";
import { createClient } from "@/utils/supabase/client";

function Logout() {
  const queryClient = useQueryClient();
  const { replace } = useRouter();
  const supabase = createClient();

  const logout = async () => {
    const { error } = await supabase.auth.signOut({ scope: "global" });
    if (error) {
      console.log(error);
      // todo : 에러 핸들링
    } else {
      clearUser(queryClient);
      replace(PATH_NAME.home);
    }
  };

  return (
    <Button variant="ghost" onClick={logout}>
      로그아웃
    </Button>
  );
}

export default Logout;
