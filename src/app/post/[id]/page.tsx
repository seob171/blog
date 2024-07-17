import React, { use } from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import Post from "@/app/post/[id]/_components/Post";
import GNB from "@/components/nav/GNB";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getUser } from "@/services/auth/server/route";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import { getPost } from "@/services/post/route";
import { getQueryClient } from "@/utils/queryClient";

type Props = {
  params: { id: string };
};

function Page({ params: { id: postId } }: Props) {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  // 포스트 id를 통해 본인여부 체크
  console.log(user);

  use(
    queryClient.prefetchQuery({
      queryFn: () => getPost(postId),
      queryKey: POST_QUERY_KEY.item(postId),
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB className="sticky top-0" />
      <Post />
    </HydrationBoundary>
  );
}

export default Page;
