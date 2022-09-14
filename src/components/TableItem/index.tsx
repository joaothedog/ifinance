import * as Component from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <Component.TableLine>
      <Component.TableColumnm>{formatDate(item.date)}</Component.TableColumnm>
      <Component.TableColumnm>
        <Component.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Component.Category>
      </Component.TableColumnm>
      <Component.TableColumnm>{item.title}</Component.TableColumnm>
      <Component.TableColumnm>
        <Component.Value
          color={categories[item.category].expense ? 'red' : 'green'}
        >
          R$ {item.value}
        </Component.Value>
      </Component.TableColumnm>
    </Component.TableLine>
  );
};
