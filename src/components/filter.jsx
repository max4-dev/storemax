import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = useState(false);

  const sortList = [
    { name: 'Цена', sortProperty: 'price' },
    { name: 'Название', sortProperty: 'title' },
    { name: 'Популярность', sortProperty: 'rating' },
  ];

  const handleChangeSelect = (obj) => {
    // onChangeFilter(index);
    dispatch(setSort(obj));
    setOpen(!open);
  };

  return (
    <div className="product-content__filter">
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
