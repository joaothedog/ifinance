import { useState } from 'react';
import * as Component from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';
type Props = {
  onAdd: (item: Item) => void;
};

export const InsertArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  const categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    const errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida');
    }

    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida');
    }

    if (titleField === '') {
      errors.push('Título inválido');
    }

    if (valueField <= 0) {
      errors.push('Valor inválido');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setCategoryField('');
    setDateField('');
    setTitleField('');
    setValueField(0);
  };

  return (
    <Component.Container>
      <Component.Inputs>
        <input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
        <select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option>Selecione</option>
            {categoryKeys.map((key, index) => {
              return (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
              );
            })}
          </>
        </select>
        <input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
          placeholder="Título"
        />
        <input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
          placeholder="R$ 0,00"
        />
      </Component.Inputs>
      <Component.Button>
        <button onClick={handleAddEvent}>Adicionar</button>
      </Component.Button>
    </Component.Container>
  );
};
