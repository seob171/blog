'use client';

import { delay } from 'es-toolkit';
import React, { useActionState } from 'react';
import FormStatus from '@/app/react19/useActionState/components/FormStatus';

const Page = () => {
  const [state, dispatch, isPending] = useActionState<string, FormData>(async (previousState, formData) => {
    await delay(2000);
    const newName = formData.get('name');
    if (!newName) {
      return previousState;
    }

    return newName as string;
  }, '');

  return (
    <div className={'flex flex-col gap-2'}>
      <span>useActionState</span>
      <div className={'flex flex-col gap-2 max-w-64 w-full'}>
        <span>newName : {state && <p>{state}</p>}</span>
        <form action={dispatch} className={'flex flex-col gap-2'}>
          <input type="text" name={'name'} className={'border p-1'} />
          <button className={'py-1 px-2 bg-gray-400 disabled:bg-gray-300'} disabled={isPending}>
            {isPending ? 'pending' : 'update'}
          </button>
          <hr />
          <FormStatus />
        </form>
      </div>
    </div>
  );
};

export default Page;
