import FilteredHeader from '@/components/FilteredHeader';
import FilteredNews from '@/components/FilteredNews';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ filter: Array<string> }>;
};

async function Page({ params }: Props) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredHeader
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
        <FilteredNews
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      </Suspense>
    </>
  );
}

export default Page;
