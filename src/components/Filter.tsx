import { useState, FC } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, setSort } from '../redux/slices/filterSlice';

export const sortList = [
  { name: 'Цена', sortProperty: 'price' },
  { name: 'Название', sortProperty: 'title' },
  { name: 'Популярность', sortProperty: 'rating' },
];

const Filter: FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.filter.sort);

  const [open, setOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const path = event.composedPath();
      if (!path.includes(filterRef.current) && !open) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChangeSelect = (obj: {}) => {
    dispatch(setSort(obj));
    dispatch(setActivePage(1));
    setOpen(!open);
  };

  return (
    <div className="product-content__filter" ref={filterRef}>
      <button className="product-content__filter-btn">
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </button>
      {open && (
        <div className="popup-filter">
          <ul className="popup-filter__list">
            {sortList.map((item) => (
              <li
                className={
                  'popup-filter__item' +
                  (sort.sortProperty === item.sortProperty ? ' popup-filter__item--active' : '')
                }
                onClick={() => handleChangeSelect(item)}
                key={item.sortProperty}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
