import React, { useState } from 'react';

const Filter = ({ value, onChangeFilter }) => {
  const [open, setOpen] = useState(false);

  const sortList = [
    { name: 'Цена', filterProps: 'price' },
    { name: 'Название', filterProps: 'title' },
    { name: 'Популярность', filterProps: 'rating' },
  ];

  const handleChangeSelect = (index) => {
    onChangeFilter(index);
    setOpen(!open);
  };

  return (
    <div className="product-content__filter">
      <button className="product-content__filter-btn">
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </button>
      {open && (
        <div className="popup-filter">
          <ul className="popup-filter__list">
            {sortList.map((sort) => (
              <li
                className={
                  'popup-filter__item' +
                  (value.filterProps === sort.filterProps ? ' popup-filter__item--active' : '')
                }
                onClick={() => handleChangeSelect(sort)}
                key={sort.filterProps}>
                {sort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
