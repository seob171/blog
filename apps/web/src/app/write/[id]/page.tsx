import React, { Suspense, use } from 'react';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { notFound, redirect } from 'next/navigation';

import SavedEditor from '@/app/write/[id]/_components/SavedEditor';
import Back from '@/components/common/Back';
import TopBar from '@/components/nav/TopBar';
import { PATH_NAME } from '@/constants/link';
import { AUTH_QUERY_KEY } from '@/services/auth/queryOptions';
import { getAuthUser } from '@/services/auth/server/route';
import { POST_QUERY_KEY } from '@/services/post/queryOptions';
import { getPost } from '@/services/post/route';
import { getQueryClient } from '@/utils/queryClient';

function Page({ params: { id: postId } }: { params: { id: string } }) {
  const queryClient = getQueryClient();

  const user = use(
    queryClient.fetchQuery({
      queryFn: getAuthUser,
      queryKey: AUTH_QUERY_KEY.user(),
    })
  );

  if (!user) redirect(PATH_NAME.signIn);

  const post = use(
    queryClient.fetchQuery({
      queryFn: () => getPost({ id: postId }),
      queryKey: POST_QUERY_KEY.item({ id: postId }),
    })
  );

  if (!post || post.creator_id !== user.id) notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopBar leftRender={<Back />} />
      <div className="relative flex flex-col flex-1 w-full px-4 pt-2 mt-8">
        <Suspense>
          <SavedEditor />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}

export default Page;
