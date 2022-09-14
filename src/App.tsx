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

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (const i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredList]);

  return (
    <Component.Container>
      <Component.Header>
        <Component.HeaderText>iFinance</Component.HeaderText>
      </Component.Header>

      <Component.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/*insert area*/}
        <TableArea list={filteredList} />
      </Component.Body>
    </Component.Container>
  );
};

export default App;
