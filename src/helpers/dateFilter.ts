import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split('-');

  for (const i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = addZeroToDate(date.getMonth() + 1);
  const day = addZeroToDate(date.getDate());

  return `${day}/${month}/${year}`;
};

const addZeroToDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  }
  return `${n}`;
};
