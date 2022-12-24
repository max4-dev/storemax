import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../App';
import { setFilter } from '../redux/slices/filterSlice';

const typeList = [
  { name: 'Все товары' },
  { name: 'Одежда' },
  { name: 'Техника' },
  { name: 'Продукты питания' },
];

const Aside = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.type);

  const { setActiveTitle, setActivePage } = useContext(AppContext);

  return (
    <aside className="product-aside aside">
      <ul className="aside__list">
        {typeList.map((type, index) => (
          <li
            className={filter === index ? 'aside__item aside__item--active' : 'aside__item'}
            onClick={() => {
              dispatch(setFilter(index));
              setActiveTitle(type.name);
              setActivePage(1);
            }}
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
