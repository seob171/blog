import React, { use } from "react";
import GNB from "@/components/nav/GNB";
import PostList from "@/app/(home)/_components/PostList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/queryClient";
import getUser from "@/services/auth/server/getUser";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";

const Page = () => {
  const queryClient = getQueryClient();

  use(
    queryClient.prefetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB className={"sticky top-0"} />
      <PostList />
    </HydrationBoundary>
  );
};

export default Page;
