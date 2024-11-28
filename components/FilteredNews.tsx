import React from 'react';
import NewsList from './NewsList';
import { geyNewsByFilter } from '@/lib/news';

type Props = { selectedYear: string; selectedMonth: string };

async function FilteredNews({ selectedYear, selectedMonth }: Props) {
  const filteredNews = await geyNewsByFilter(selectedYear, selectedMonth);

  return filteredNews && filteredNews.length ? (
    <NewsList news={filteredNews} />
  ) : (
    <p>No news found for the selected period.</p>
  );
}

export default FilteredNews;
