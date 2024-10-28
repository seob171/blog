'use client';

import { delay } from 'es-toolkit';
import React, { useTransition } from 'react';

const Page = () => {
  const [isPending, startTransition] = useTransition();

  const update = () => {
    startTransition(async () => {
      await delay(2000);
      console.log('update');
    });
  };

  return (
    <div className={'flex flex-col gap-2'}>
      <span>useTransition</span>
      <div className={'flex flex-col gap-2 max-w-64 w-full'}>
        <button onClick={update} disabled={isPending} className={'disabled:bg-gray-300 px-2 py-1 bg-gray-400 rounded'}>
          {isPending ? 'pending...' : 'update'}
        </button>
      </div>
    </div>
  );
};

export default Page;
