import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <ul style={{ display: 'flex', gap: '14px', color: 'white' }}>
      <li>
        <Link href='.'>Home</Link>
      </li>
      <li>
        <Link href={'news'}>News</Link>
      </li>
    </ul>
  );
}

export default MainHeader;
