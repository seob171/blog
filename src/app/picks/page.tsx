import React, { use } from "react";

import { redirect } from "next/navigation";

import Back from "@/components/common/Back";
import TopBar from "@/components/nav/TopBar";
import { PATH_NAME } from "@/constants/link";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getUser } from "@/services/auth/server/route";
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
    <>
      <TopBar leftRender={<Back />} />

      <h3>Picks</h3>
    </>
  );
}

export default Page;
