import { NewsInterface } from '@/lib/interfaces';
import Link from 'next/link';
import React from 'react';

type Props = {
  news: NewsInterface;
};

function NewsItem({ news }: Props) {
  return (
    <Link href={`/news/${news.slug}`}>
      <img src={`/images/news/${news.image}`} alt={news.title} />
      <span>{news.title}</span>
    </Link>
  );
}

export default NewsItem;
