'use client';

import { useEffect, useState } from 'react';

const UseIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default UseIsMounted;
