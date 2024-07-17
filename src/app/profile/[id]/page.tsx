import React, { use } from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";

import Information from "@/app/profile/[id]/_components/Information";
import TopBar from "@/components/nav/TopBar";
import { PATH_NAME } from "@/constants/link";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getUser } from "@/services/auth/server/route";
import Back from "@/shared/Back";
import Logout from "@/shared/Logout";
import { getQueryClient } from "@/utils/queryClient";

function Page() {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  if (!user) redirect(PATH_NAME.signIn);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopBar leftRender={<Back />} />
      <Information user={user} />
      <ul className="flex flex-col w-full px-4 py-2">
        <li className="flex justify-end">
          <Logout />
        </li>
      </ul>
    </HydrationBoundary>
  );
}

export default Page;
