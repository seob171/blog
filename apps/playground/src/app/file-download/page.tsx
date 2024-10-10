import React from 'react';

import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Link
        download
        href={'/api/file-download?url=https://www.pexels.com/ko-kr/download/video/28679251&filename=test&extension=mp4'}
      >
        <button>video download</button>
      </Link>
    </div>
  );
};

export default Page;
