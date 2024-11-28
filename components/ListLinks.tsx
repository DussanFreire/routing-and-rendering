import { getLinksByFilter } from '@/lib/news';
import Link from 'next/link';
import React from 'react';

type Props = { selectedMonth: string; selectedYear: string };

async function ListLinks({ selectedMonth, selectedYear }: Props) {
  const filteredLinks = await getLinksByFilter(selectedYear, selectedMonth);
  return (
    <ul>
      {filteredLinks.map((link) => {
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
