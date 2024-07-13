import React, { use } from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import SignInForm from "@/app/auth/sign-in/_components/SignInForm";
import { getQueryClient } from "@/utils/queryClient";
import { getUser } from "@/services/auth/server/route";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { redirect } from "next/navigation";
import { PATH_NAME } from "@/constants/link";

const Page = () => {
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
      <section className={"flex items-center"}>
        <section className={"flex flex-col items-center justify-center w-full"}>
          <SignInForm />
        </section>
      </section>
    </>
  );
};

export default Page;
