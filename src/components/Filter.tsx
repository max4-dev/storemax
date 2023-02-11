import { useState, FC } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, setOrder, setSort } from '../redux/slices/filterSlice';

export const sortList = [
  { name: 'Цена', sortProperty: 'price' },
  { name: 'Название', sortProperty: 'title' },
  { name: 'Популярность', sortProperty: 'rating' },
];

type ClickOutside = MouseEvent & {
  composedPath: () => Node[]
}

const Filter: FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.filter.sort);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ClickOutside;
      const path = _event.composedPath();
      if (filterRef.current && !path.includes(filterRef.current) && !open) {
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

  const handleChangeOrder = () => {
    setActive(!active)
    dispatch(
      setOrder(active ? 'desc' : 'asc')
    )
  }
  

  return (
    <div className="product-content__filter" ref={filterRef}>
      <button className="product-content__filter-btn">
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
        <span onClick={handleChangeOrder} className={'product-content__filter-asc' + (active ? ' product-content__filter-asc--active' : '')}></span>
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
