import React from 'react';

type Props = {
  params: { pageId: string };
};

async function Page({ params }: Props) {
  const pageId = await params.pageId;
  return <div>{pageId}</div>;
}

export default Page;
