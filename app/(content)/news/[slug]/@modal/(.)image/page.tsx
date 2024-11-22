'use client';

import { DUMMY_NEWS } from '@/data/dummyNews';
import { notFound, useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

function Page({ params }: Props) {
  const router = useRouter();
  const { slug: newsItemSlug } = React.use(params);
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  )!;

  if (!newsItem) notFound();

  return (
    <>
      <div className='modal-backdrop' onClick={router.back} />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default Page;
