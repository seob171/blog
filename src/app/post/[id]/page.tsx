import React, { use } from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import Post from "@/app/post/[id]/_components/Post";
import GNB from "@/components/nav/GNB";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getAuthUser } from "@/services/auth/server/route";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import { getManyPost, getPost } from "@/services/post/route";
import { USER_QUERY_KEY } from "@/services/user/queryOptions";
import { getUser } from "@/services/user/route";
import { getQueryClient } from "@/utils/queryClient";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getManyPost();

  return posts.map((post) => ({
    id: post.id,
  }));
}

type Props = {
  params: { id: string };
};

function Page({ params: { id: postId } }: Props) {
  const queryClient = getQueryClient();

  const post = use(
    queryClient.fetchQuery({
      queryFn: () => getPost({ id: postId }),
      queryKey: POST_QUERY_KEY.item({ id: postId }),
    }),
  );

  use(
    queryClient.prefetchQuery({
      queryFn: () => getUser({ id: post.creator_id }),
      queryKey: USER_QUERY_KEY.item({ id: post.creator_id }),
    }),
  );

  use(
    queryClient.prefetchQuery({
      queryFn: () => getAuthUser(),
      queryKey: AUTH_QUERY_KEY.user(),
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
