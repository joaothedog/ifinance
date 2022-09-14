import * as Component from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { on } from 'stream';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};

export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
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
      <Component.MonthAnalyzer>...</Component.MonthAnalyzer>
    </Component.Container>
  );
};
