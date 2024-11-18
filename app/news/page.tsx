import { NewsList } from '@/components';
import { DUMMY_NEWS } from '@/data/dummyNews';
import React from 'react';

function page({}) {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default page;
