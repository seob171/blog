import React, { use } from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import { getQueryClient } from "@/utils/queryClient";
import { getUser } from "@/services/auth/server/route";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

const Page = () => {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  // 포스트 id를 통해 본인여부 체크
  console.log(user);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopBar leftRender={<Back />} />
      <div>포스트 페이지</div>
    </HydrationBoundary>
  );
};

export default Page;
