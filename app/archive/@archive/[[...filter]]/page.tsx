import { ListLinks, NewsList } from '@/components';
import { NewsInterface } from '@/lib/interfaces';
import {
  isAnInvalidDateFilter,
  getLinksByFilter,
  geyNewsByFilter
} from '@/lib/news';

type Props = {
  params: Promise<{ filter: Array<string> }>;
};

async function Page({ params }: Props) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  const filteredNews = geyNewsByFilter(selectedYear, selectedMonth);
  const filteredLinks = getLinksByFilter(selectedYear, selectedMonth);
  const newsContent = getNewsContent(filteredNews);

  if (isAnInvalidDateFilter(selectedYear, selectedMonth)) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ListLinks links={filteredLinks} selectedYear={selectedYear} />
        </nav>
      </header>
      {newsContent}
    </>
  );
}

export default Page;

function getNewsContent(news: NewsInterface[] | null) {
  const newsContent =
    news && news.length ? (
      <NewsList news={news} />
    ) : (
      <p>No news found for the selected period.</p>
    );

  return newsContent;
}
