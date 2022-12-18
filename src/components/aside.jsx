import React, { useContext } from 'react';
import { PageContext, TitleContext, TypeContext } from '../App';

const Aside = () => {
  const typeList = [
    { name: 'Все товары' },
    { name: 'Одежда' },
    { name: 'Техника' },
    { name: 'Продукты питания' },
    // { name: 'Спорт и отдых' },
    // { name: 'Детские товары' },
    // { name: 'Красота и здоровье' },
    // { name: 'Цифровые товары' },
  ];

  const { activeType, setActiveType } = useContext(TypeContext);
  const { setActiveTitle } = useContext(TitleContext);
  const { setActivePage } = useContext(PageContext);

  return (
    <aside className="product-aside aside">
      <ul className="aside__list">
        {typeList.map((type, index) => (
          <li
            className={activeType === index ? 'aside__item aside__item--active' : 'aside__item'}
            onClick={() => {
              setActiveType(index);
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
