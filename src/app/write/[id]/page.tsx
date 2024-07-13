import React, { Suspense, use } from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import { getQueryClient } from "@/utils/queryClient";
import { getUser } from "@/services/auth/server/route";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { redirect } from "next/navigation";
import { PATH_NAME } from "@/constants/link";
import { POST_QUERY_KEY } from "@/services/post/queryOptions";
import SavedEditor from "@/app/write/[id]/_components/SavedEditor";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getPost } from "@/services/post/route";

const Page = ({ params: { id: postId } }: { params: { id: string } }) => {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  if (!user) redirect(PATH_NAME.signIn);

  use(
    queryClient.prefetchQuery({
      queryFn: () => getPost(postId),
      queryKey: POST_QUERY_KEY.item(postId),
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopBar leftRender={<Back />} />
      <div className={"relative flex flex-col flex-1 w-full px-4 pt-2 mt-8"}>
        <Suspense>
          <SavedEditor />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
