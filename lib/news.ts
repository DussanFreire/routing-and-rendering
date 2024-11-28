import { NewsInterface } from './interfaces';
import sql from 'better-sqlite3';

const db = sql('data.db');

export async function geyNewsByFilter(
  selectedYear: string,
  selectedMonth: string
) {
  let news: NewsInterface[] | null = null;

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  return news;
}

export async function isAnInvalidDateFilter(
  selectedYear: string,
  selectedMonth: string
) {
  const availableNewsYears = await getAvailableNewsYears();
  const availableNewsMonths = getAvailableNewsMonths(selectedYear);
  console.log(availableNewsMonths, availableNewsYears);
  return (
    (selectedYear && !availableNewsYears.includes(selectedYear)) ||
    (selectedMonth && !availableNewsMonths.includes(selectedMonth))
  );
}

export async function getLinksByFilter(
  selectedYear: string,
  selectedMonth: string
): Promise<string[]> {
  let links: string[] = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    links = [];
  }

  return links;
}

export async function getAllNews(): Promise<NewsInterface[]> {
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsInterface[];
}

export async function getNewsItem(slug: string): Promise<NewsInterface> {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem as NewsInterface;
}

export async function getLatestNews(): Promise<NewsInterface[]> {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews as NewsInterface[];
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => (year as { year: string }).year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year: string): string[] {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => (month as { month: string }).month);
}

export async function getNewsForYear(year: string): Promise<NewsInterface[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as NewsInterface[];
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string
): Promise<NewsInterface[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as NewsInterface[];
}
