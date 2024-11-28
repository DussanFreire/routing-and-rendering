import React from 'react';
import ListLinks from './ListLinks';
import { isAnInvalidDateFilter } from '@/lib/news';

type Props = { selectedYear: string; selectedMonth: string };

async function FilteredHeader({ selectedYear, selectedMonth }: Props) {
  const isInvalid = await isAnInvalidDateFilter(selectedYear, selectedMonth);

  if (isInvalid) {
    throw new Error('Invalid filter');
  }

  return (
    <header id='archive-header'>
      <nav>
        <ListLinks selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </nav>
    </header>
  );
}

export default FilteredHeader;
