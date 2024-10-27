import React from 'react';

import { showSummerSale } from '@/flags';

const Page = async () => {
  const sale = await showSummerSale();
  if (sale) return <div>sale</div>;

  return <div>not sales</div>;
};

export default Page;
