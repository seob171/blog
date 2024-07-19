import React, { use } from "react";

import Link from "next/link";
import { redirect } from "next/navigation";

import GithubSignIn from "@/app/auth/sign-in/_components/GithubSignIn";
import GoogleSignIn from "@/app/auth/sign-in/_components/GoogleSignIn";
import SignInForm from "@/app/auth/sign-in/_components/SignInForm";
import TopBar from "@/components/nav/TopBar";
import { Button } from "@/components/ui/button";
import { LOGO_TEXT } from "@/constants/brand";
import { PATH_NAME } from "@/constants/link";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getUser } from "@/services/auth/server/route";
import Back from "@/shared/Back";
import { getQueryClient } from "@/utils/queryClient";

function Page() {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  if (user) redirect(PATH_NAME.home);

  return (
    <>
      <TopBar leftRender={<Back />} />
      <section className="flex items-center">
        <section className="flex flex-col items-center justify-center w-full">
          <SignInForm />
          <div className="flex flex-col gap-y-4 w-full px-4 py-2">
            <GithubSignIn />
            <GoogleSignIn />
            <div className="flex justify-center items-center gap-x-2 text-sm">
              <span className="text-muted-foreground">{`아직 ${LOGO_TEXT} 계정이 없으신가요?`}</span>
              <Link href={PATH_NAME.signUp}>
                <Button variant="link">회원가입하기</Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Page;
