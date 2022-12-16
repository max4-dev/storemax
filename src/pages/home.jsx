import React, { useState, useEffect } from 'react';

import Filter from '../components/filter';
import ProductItem from '../components/product-item';
import Skeleton from '../components/product-item/skeleton';
import Aside from '../components/aside';
import '../scss/style.scss';

const Home = ({ searchValue, activeType, setActiveType }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState({ name: 'Цена', filterProps: 'price' });
  const [activeTitle, setActiveTitle] = useState('Все товары');

  const category = activeType > 0 ? `category=${activeType}` : '';
  const filter = activeFilter.filterProps;
  const search = searchValue ? `search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://638d373d4190defdb73ffb73.mockapi.io/items?${category}&sortBy=${filter}&order=desc&${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeFilter, activeType, searchValue]);

  return (
    <section className="product">
      <div className="container">
        <h2 className="title product__title">
          {activeTitle}
          <sup>{items.length} товаров</sup>
        </h2>
        <div className="product__inner">
          <Aside
            value={activeType}
            onChangeType={(index) => setActiveType(index)}
            setActiveTitle={setActiveTitle}
          />
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
