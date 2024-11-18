import Link from 'next/link';
import React from 'react';

function page({}) {
  return (
    <ul style={{ color: 'white' }}>
      <li>
        <Link href='news/first-new/'>first-new</Link>
      </li>
      <li>
        <Link href={'news/second-new'}>second-new</Link>
      </li>
      <li>
        <Link href={'news/third-new'}>third-new</Link>
      </li>
    </ul>
  );
}

export default page;
