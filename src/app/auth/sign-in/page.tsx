import React, { use } from "react";

import { redirect } from "next/navigation";

import SignInForm from "@/app/auth/sign-in/_components/SignInForm";
import TopBar from "@/components/nav/TopBar";
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
        </section>
      </section>
    </>
  );
}

export default Page;
