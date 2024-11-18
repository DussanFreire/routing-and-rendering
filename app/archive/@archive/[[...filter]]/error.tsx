'use client';

import React from 'react';

interface Props {
  error: { message: string };
}

function Error({ error }: Props) {
  const { message } = error;
  return (
    <div id='error'>
      <h2>An error ocurred!</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;
