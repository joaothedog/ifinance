import * as Component from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { useState, useEffect } from 'react';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Component.Container>
      <Component.Header>
        <Component.HeaderText>iFinance</Component.HeaderText>
      </Component.Header>

      <Component.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        {/*insert area*/}
        <TableArea list={filteredList} />
      </Component.Body>
    </Component.Container>
  );
};

export default App;
