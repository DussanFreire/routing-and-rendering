import Link from 'next/link';
import React from 'react';

type Props = { links: number[]; selectedYear: string };

function ListLinks({ links, selectedYear }: Props) {
  return (
    <ul>
      {links.map((link) => {
        const href = selectedYear
          ? `/archive/${selectedYear}/${link}`
          : `/archive/${link}`;
        return (
          <li key={link}>
            <Link href={href}>{link}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ListLinks;
