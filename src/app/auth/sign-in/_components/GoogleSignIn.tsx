"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

const GoogleSignIn = () => {
  const supabase = createClient();

  const signIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        console.error(error);
      } else if (data) {
        console.log(data);
        // updateUser(queryClient, user);
        // // TODO : nextPath를 관리해서 해당 경로로 렌딩시키기
        // replace(PATH_NAME.home);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button variant="outline" className="w-full text-md" onClick={signIn}>
      구글 로그인
    </Button>
  );
};

export default GoogleSignIn;
