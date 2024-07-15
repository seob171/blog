import React, { use } from "react";
import { getQueryClient } from "@/utils/queryClient";
import { getUser } from "@/services/auth/server/route";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Post from "@/app/post/[id]/_components/Post";
import { getPost } from "@/services/post/route";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import GNB from "@/components/nav/GNB";

type Props = {
  params: { id: string };
};

const Page = ({ params: { id: postId } }: Props) => {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  // 포스트 id를 통해 본인여부 체크
  // console.log(user);

  use(
    queryClient.prefetchQuery({
      queryFn: () => getPost(postId),
      queryKey: POST_QUERY_KEY.item(postId),
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB className={"sticky top-0"} />
      <Post />
    </HydrationBoundary>
  );
};

export default Page;
