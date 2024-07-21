import React, { use } from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";

import About from "@/app/profile/[id]/_components/About";
import Home from "@/app/profile/[id]/_components/Home";
import Profile from "@/app/profile/[id]/_components/Profile";
import { profileTabKey } from "@/app/profile/[id]/tabKey";
import Logout from "@/components/auth/Logout";
import Back from "@/components/common/Back";
import TopBar from "@/components/nav/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PATH_NAME } from "@/constants/link";
import { AUTH_QUERY_KEY } from "@/services/auth/queryOptions";
import { getAuthUser } from "@/services/auth/server/route";
import { getQueryClient } from "@/utils/queryClient";

function Page() {
  // const user = use(getAuth());
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getAuthUser,
      queryKey: AUTH_QUERY_KEY.user(),
    }),
  );

  if (!user) redirect(PATH_NAME.signIn);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopBar leftRender={<Back />} />
      <Profile user={user} />
      <ul className="flex flex-col w-full px-4 py-2">
        <li className="flex justify-end">
          <Logout />
        </li>
      </ul>
      <Tabs defaultValue={profileTabKey.home} className="w-full px-4 pt-2">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value={profileTabKey.home}>홈</TabsTrigger>
          <TabsTrigger value={profileTabKey.about}>소개</TabsTrigger>
        </TabsList>
        <TabsContent value={profileTabKey.home}>
          <Home user={user} />
        </TabsContent>
        <TabsContent value={profileTabKey.about}>
          <About user={user} />
        </TabsContent>
      </Tabs>
    </HydrationBoundary>
  );
}

export default Page;
