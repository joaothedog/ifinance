import * as Component from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <Component.TableLine>
      <Component.TableColumnm>{formatDate(item.date)}</Component.TableColumnm>
      <Component.TableColumnm>{item.category}</Component.TableColumnm>
      <Component.TableColumnm>{item.title}</Component.TableColumnm>
      <Component.TableColumnm>R$ {item.value}</Component.TableColumnm>
    </Component.TableLine>
  );
};
