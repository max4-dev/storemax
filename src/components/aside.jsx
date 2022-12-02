import React, { useState } from 'react';

const Aside = () => {
  const [activeType, setActiveType] = useState(0);

  const typeList = [
    { name: 'Одежда' },
    { name: 'Техника' },
    { name: 'Спорт и отдых' },
    { name: 'Детские товары' },
    { name: 'Продукты питания' },
    { name: 'Красота и здоровье' },
    { name: 'Цифровые товары' },
  ];

  return (
    <aside className="product-aside aside">
      <ul className="aside__list">
        {typeList.map((type, index) => (
          <li
            className={activeType === index ? 'aside__item aside__item--active' : 'aside__item'}
            onClick={() => setActiveType(index)}
            key={index}>
            {type.name}
            <img src="images/icons/arrow.svg" alt="" />
          </li>
        ))}
        {/* <li className="aside__item aside__item--active">
          <a className="aside__link" href="#">
            Одежда
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li>
        <li className="aside__item">
          <a className="aside__link" href="#">
            Техника
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li>
        <li className="aside__item">
          <a className="aside__link" href="#">
            Спорт и отдых
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li>
        <li className="aside__item">
          <a className="aside__link" href="#">
            Детские товары
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li>
        <li className="aside__item">
          <a className="aside__link" href="#">
            Продукты питания
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li>
        <li className="aside__item">
          <a className="aside__link" href="#">
            Красота и здоровье
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li>
        <li className="aside__item">
          <a className="aside__link" href="#">
            Цифровые товары
          </a>
          <img src="images/icons/arrow.svg" alt="" />
        </li> */}
      </ul>
    </aside>
  );
};

export default Aside;
