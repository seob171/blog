import React from 'react';

import { showWriteFeature } from '@/flags';

const Page = async () => {
  const isWriteFeatureCompleted = await showWriteFeature();

  if (!isWriteFeatureCompleted) {
    return (
      <div className={'flex flex-col gap-2'}>
        <span>Write Page 준비중...</span>
        <span>테스트 코드 작성1</span>
        <span>테스트 코드 작성2</span>
        <span>테스트 코드 작성3</span>
        <span>테스트 코드 작성4</span>
      </div>
    );
  }

  return (
    <div>
      <span>Write Page</span>
    </div>
  );
};

export default Page;
