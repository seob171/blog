import React, { Suspense, use } from 'react';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import PostList from '@/app/(home)/_components/PostList';
import GNB from '@/components/nav/GNB';
import { AUTH_QUERY_KEY } from '@/services/auth/queryOptions';
import { getAuthUser } from '@/services/auth/server/route';
import { POST_QUERY_KEY } from '@/services/post/queryOptions';
import { getManyPost } from '@/services/post/route';
import { getQueryClient } from '@/utils/queryClient';

function Page() {
  const queryClient = getQueryClient();

  use(
    queryClient.prefetchQuery({
      queryFn: getAuthUser,
      queryKey: AUTH_QUERY_KEY.user(),
    })
  );

  use(
    queryClient.prefetchQuery({
      queryFn: getManyPost,
      queryKey: POST_QUERY_KEY.itemList(),
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB className="sticky top-0" />
      <Suspense>
        <PostList />
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;
