import React, { useState } from 'react';

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const sortList = ['Цена', 'Название', 'Популярность'];
  const sortName = sortList[selected];

  const handleChangeSelect = (index) => {
    setSelected(index);
    setOpen(!open);
  };

  return (
    <div className="product-content__filter">
      <button className="product-content__filter-btn">
        <span onClick={() => setOpen(!open)}>{sortName}</span>
      </button>
      {open && (
        <div className="popup-filter">
          <ul className="popup-filter__list">
            {sortList.map((sort, index) => (
              <li
                className={
                  'popup-filter__item' + (selected === index ? ' popup-filter__item--active' : '')
                }
                onClick={() => handleChangeSelect(index)}
                key={sort}>
                {sort}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
