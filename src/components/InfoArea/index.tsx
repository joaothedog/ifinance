import * as Component from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { on } from 'stream';
import { AnalyzedItem } from '../AnalyzedItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePreviousMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <Component.Container>
      <Component.AreaMes>
        <Component.MonthArrow onClick={handlePreviousMonth}>
          ◀
        </Component.MonthArrow>
        <Component.MonthTitle>
          {formatCurrentMonth(currentMonth)}
        </Component.MonthTitle>
        <Component.MonthArrow onClick={handleNextMonth}>▶</Component.MonthArrow>
      </Component.AreaMes>
      <Component.MonthAnalyzer>
        <AnalyzedItem title="Receita" value={income} />
        <AnalyzedItem title="Despesas" value={expense} />
        <AnalyzedItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? 'red' : 'green'}
        />
      </Component.MonthAnalyzer>
    </Component.Container>
  );
};
