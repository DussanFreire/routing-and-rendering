import React from 'react';
import NewsItem from './NewsItem';
import { NewsInterface } from '@/lib/interfaces';

interface Props {
  news: Array<NewsInterface>;
}

function NewsList({ news }: Props) {
  return (
    <ul className='news-list'>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.title} news={newsItem} />
      ))}
    </ul>
  );
}

export default NewsList;
