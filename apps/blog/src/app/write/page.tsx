import React from 'react';

import { notFound } from 'next/navigation';

import { showWriteFeature } from '@/flags';

const Page = async () => {
  const isWriteFeatureCompleted = await showWriteFeature();

  if (!isWriteFeatureCompleted) notFound();

  return (
    <div>
      <span>Write Page</span>
    </div>
  );
};

export default Page;
