import { NewsList } from '@/components';
import { getNewsForYear } from '@/lib/news';
import React from 'react';

interface Props {
  params: Promise<{ year: number }>;
}

async function page({ params }: Props) {
  const { year: newsYear } = await params;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}

export default page;
