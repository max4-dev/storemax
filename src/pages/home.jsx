import React, { useState, useEffect } from 'react';

import Filter from '../components/filter';
import ProductItem from '../components/product-Item';
import Skeleton from '../components/product-Item/skeleton';
import Aside from '../components/aside';
import '../scss/style.scss';
import Pagination from '../components/pagination';

const Home = ({
  searchValue,
  activeType,
  setActiveType,
  activePage,
  setActivePage,
  activeTitle,
  setActiveTitle,
}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState({ name: 'Цена', filterProps: 'price' });

  const category = activeType > 0 ? `category=${activeType}` : '';
  const filter = activeFilter.filterProps;
  const search = searchValue ? `search=${searchValue}` : '';

  const pageSize = 4;
  const startIndex = (activePage - 1) * pageSize;
  const NumberOfPages = Math.ceil(items.length / pageSize);
  const sliceItems = items.slice(startIndex, pageSize * activePage);

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
  }, [activeFilter, activeType, searchValue, activePage]);

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
            onChangeType={(index) => {
              setActiveType(index);
              setActivePage(1);
            }}
            setActiveTitle={setActiveTitle}
          />
          <div className="product-content">
            <Filter
              value={activeFilter}
              onChangeFilter={(index) => {
                setActiveFilter(index);
                setActivePage(1);
              }}
            />
            <div className="product-content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => (
                    <div className="product-content__item-wrapper" key={index}>
                      <Skeleton />
                    </div>
                  ))
                : sliceItems.map((product) => <ProductItem {...product} key={product.id} />)}
            </div>
            {NumberOfPages > 1 && (
              <Pagination
                activePage={activePage}
                setActivePage={setActivePage}
                NumberOfPages={NumberOfPages}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
