import React, { use } from "react";
import TopBar from "@/components/nav/TopBar";
import Back from "@/shared/Back";
import { getQueryClient } from "@/utils/queryClient";
import getUser from "@/services/auth/server/getUser";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { redirect } from "next/navigation";
import { PATH_NAME } from "@/constants/link";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import Tiptap from "@/components/tiptap/Tiptap";

const Page = () => {
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
      <div className={"flex flex-col w-full px-4 py-2 mt-8"}>
        <Tiptap />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
