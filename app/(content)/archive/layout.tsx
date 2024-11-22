import React, { ReactNode } from 'react';

type Props = {
  archive: ReactNode;
  latest: ReactNode;
};

function layout({ archive, latest }: Props) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id='archive-filter'>{archive}</section>
      <section id='archive-latest'>{latest}</section>
    </div>
  );
}

export default layout;
