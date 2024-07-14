import React, { Suspense, use } from "react";
import GNB from "@/components/nav/GNB";
import PostList from "@/app/(home)/_components/PostList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/queryClient";
import { getUser } from "@/services/auth/server/route";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getManyPost } from "@/services/post/route";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";

const Page = () => {
  const queryClient = getQueryClient();

  use(
    queryClient.prefetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  use(
    queryClient.prefetchQuery({
      queryFn: getManyPost,
      queryKey: POST_QUERY_KEY.itemList(),
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB className={"sticky top-0"} />
      <Suspense>
        <PostList />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
