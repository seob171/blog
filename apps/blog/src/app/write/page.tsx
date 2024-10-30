import React from 'react';

import { showWriteFeature } from '@/flags';

const Page = async () => {
  const isWriteFeatureCompleted = await showWriteFeature();

  if (!isWriteFeatureCompleted) {
    return <div>Write Page 준비중...</div>;
  }

  return (
    <div>
      <span>Write Page</span>
    </div>
  );
};

export default Page;
