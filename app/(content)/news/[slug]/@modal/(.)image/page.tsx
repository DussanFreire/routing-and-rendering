import { ModalBackdrop } from '@/components';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

async function Page({ params }: Props) {
  const { slug: newsItemSlug } = await params;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default Page;
