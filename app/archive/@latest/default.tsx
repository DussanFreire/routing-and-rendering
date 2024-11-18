import { NewsList } from '@/components';
import { getLatestNews } from '@/lib/news';
import React from 'react';

function Page() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default Page;
