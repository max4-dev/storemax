import React, { useState, useEffect } from 'react';

import Filter from '../components/filter';
import ProductItem from '../components/product-item';
import Skeleton from '../components/product-item/skeleton';
import Aside from '../components/aside';
import '../scss/style.scss';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState({ name: 'Цена', filterProps: 'price' });
  const [activeType, setActiveType] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://638d373d4190defdb73ffb73.mockapi.io/items?category=${
        activeType > 0 ? activeType : ''
      }&sortBy=${activeFilter.filterProps}&order=desc`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeFilter, activeType]);

  return (
    <section className="product">
      <div className="container">
        <h2 className="title product__title">
          Одежда<sup>{items.length} товаров</sup>
        </h2>
        <div className="product__inner">
          <Aside value={activeType} onChangeType={(index) => setActiveType(index)} />
          <div className="product-content">
            <Filter value={activeFilter} onChangeFilter={(index) => setActiveFilter(index)} />
            <div className="product-content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => (
                    <div className="product-content__item-wrapper" key={index}>
                      <Skeleton />
                    </div>
                  ))
                : items.map((product) => <ProductItem {...product} key={product.id} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
