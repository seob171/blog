import React, { use } from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import About from "@/app/profile/[id]/_components/About";
import Home from "@/app/profile/[id]/_components/Home";
import Profile from "@/app/profile/[id]/_components/Profile";
import { profileTabKey } from "@/app/profile/[id]/tabKey";
import Logout from "@/components/auth/Logout";
import Back from "@/components/common/Back";
import TopBar from "@/components/nav/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { USER_QUERY_KEY } from "@/services/user/queryOptions";
import { getUser } from "@/services/user/route";
import { getQueryClient } from "@/utils/queryClient";

type Props = {
  params: { id: string };
};

function Page({ params: { id: creatorId } }: Props) {
  const queryClient = getQueryClient();

  const creator = use(
    queryClient.fetchQuery({
      queryFn: () => getUser({ id: creatorId }),
      queryKey: USER_QUERY_KEY.item({ id: creatorId }),
    }),
  );

  if (!creator) notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopBar leftRender={<Back />} />
      <Profile user={creator} />
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
          <Home user={creator} />
        </TabsContent>
        <TabsContent value={profileTabKey.about}>
          <About user={creator} />
        </TabsContent>
      </Tabs>
    </HydrationBoundary>
  );
}

export default Page;
