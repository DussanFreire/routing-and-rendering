import { NewsList } from '@/components';
import { getAllNews } from '@/lib/news';

async function Page() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      {news && <NewsList news={news} />}
    </>
  );
}

export default Page;
