import { DUMMY_NEWS } from '@/data/dummyNews';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

async function page({ params }: Props) {
  const { slug: newsItemSlug } = await params;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  )!;

  if (!newsItem) notFound();

  return (
    <>
      <h1>Intercepted</h1>
      <div className='fullscreen-image'>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}

export default page;
