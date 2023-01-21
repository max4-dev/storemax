import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setTitle, setActivePage } from '../redux/slices/filterSlice';

export const typeList = [
  { name: 'Все товары' },
  { name: 'Одежда' },
  { name: 'Техника' },
  { name: 'Продукты питания' },
];

const Aside = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.type);

  const handleChangeTitle = (index, type) => {
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
