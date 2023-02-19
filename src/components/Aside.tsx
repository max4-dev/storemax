import {FC} from 'react';
import { useSelector } from 'react-redux';
import { setFilter, setTitle, setActivePage } from '../redux/slices/filterSlice';
import { RootState, useAppDispatch } from '../redux/store';

export const typeList = [
  { name: 'Все товары' },
  { name: 'Одежда' },
  { name: 'Техника' },
  { name: 'Продукты питания' },
];

const Aside: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useSelector((state: RootState) => state.filter.type);
  
  const handleChangeTitle = (index: number, type: {name: string}) => {
    dispatch(setFilter(index));
    dispatch(setTitle(type.name));
    dispatch(setActivePage(1));
  };

  return (
    <aside className="product-aside aside">
      <ul className="aside__list">
        {typeList.map((type, index) => (
          <li
            className={filter === index ? 'aside__item aside__item--active' : 'aside__item'}
            onClick={() => handleChangeTitle(index, type)}
            key={index}>
            {type.name}
            <img src="images/icons/arrow-right.svg" alt="" />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
