'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

const FormStatus = () => {
  const { data, method, action, pending } = useFormStatus();
  console.log({ data, method, action, pending });

  return (
    <div className={'flex flex-col gap-2'}>
      <span>formStatus</span>

      <span>data : {JSON.stringify(data)}</span>
      <span>method : {method}</span>
      <span>action : {JSON.stringify(action)}</span>
      <span>pending : {`${pending}`}</span>
    </div>
  );
};

export default FormStatus;
