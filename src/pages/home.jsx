import React, { useState, useEffect } from 'react';

import Filter from '../components/filter';
import ProductItem from '../components/product-item';
import Skeleton from '../components/product-item/skeleton';
import Aside from '../components/aside';
import '../scss/style.scss';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://638d373d4190defdb73ffb73.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="product">
      <div className="container">
        <h2 className="title product__title">
          Одежда<sup>{items.length} товаров</sup>
        </h2>
        <div className="product__inner">
          <Aside />
          <div className="product-content">
            <Filter />
            <div className="product-content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((product) => <ProductItem {...product} key={product.id} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
