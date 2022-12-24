import React, { useState, useEffect, useContext } from 'react';

import Filter from '../components/filter';
import ProductItem from '../components/product-Item';
import Skeleton from '../components/product-Item/skeleton';
import Aside from '../components/aside';
import '../scss/style.scss';
import Pagination from '../components/pagination';
import { AppContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.type);
  const sort = useSelector((state) => state.filter.sort);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchValue, activeTitle, activePage, setActivePage } = useContext(AppContext);

  const category = filter > 0 ? `category=${filter}` : '';
  const sortFilter = sort.sortProperty;
  const search = searchValue ? `search=${searchValue}` : '';

  const pageSize = 4;
  const startIndex = (activePage - 1) * pageSize;
  const NumberOfPages = Math.ceil(items.length / pageSize);
  const sliceItems = items.slice(startIndex, pageSize * activePage);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://638d373d4190defdb73ffb73.mockapi.io/items?${category}&sortBy=${sortFilter}&order=desc&${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [sortFilter, filter, searchValue, activePage]);

  return (
    <section className="product">
      <div className="container">
        <h2 className="title product__title">
          {activeTitle}
          <sup>{items.length} товаров</sup>
        </h2>
        <div className="product__inner">
          <Aside />
          <div className="product-content">
            <Filter />
            <div className="product-content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => (
                    <div className="product-content__item-wrapper" key={index}>
                      <Skeleton />
                    </div>
                  ))
                : sliceItems.map((product) => <ProductItem {...product} key={product.id} />)}
            </div>
            {NumberOfPages > 1 && !isLoading && (
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
