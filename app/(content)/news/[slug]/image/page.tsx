import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

async function page({ params }: Props) {
  const { slug: newsItemSlug } = await params;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) notFound();

  return (
    <div className='fullscreen-image'>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default page;
