import { DUMMY_NEWS } from '@/data/dummyNews';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

async function Page({ params }: Props) {
  const { slug: newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)!;

  if (!newsItem) notFound();
  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default Page;
