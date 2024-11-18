import { DUMMY_NEWS } from '@/data/dummyNews';
import { NewsInterface } from './interfaces';

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function geyNewsByFilter(selectedYear: string, selectedMonth: string) {
  let news: NewsInterface[] | null = null;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  return news;
}

export function isAnInvalidDateFilter(
  selectedYear: string,
  selectedMonth: string
) {
  return (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  );
}

export function getLinksByFilter(selectedYear: string, selectedMonth: string) {
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    links = [];
  }

  return links;
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years: Array<number>, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string) {
  return DUMMY_NEWS.reduce((months: Array<number>, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: string): NewsInterface[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: string, month: string) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
