import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import qs from 'qs';

import Filter, { sortList } from '../components/filter';
import ProductItem from '../components/product-Item';
import Skeleton from '../components/product-Item/skeleton';
import Aside from '../components/aside';
import '../scss/style.scss';
import Pagination from '../components/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../redux/slices/filterSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const type = useSelector((state) => state.filter.type);
  const sort = useSelector((state) => state.filter.sort);
  const search = useSelector((state) => state.filter.search);
  const title = useSelector((state) => state.filter.title);
  const activePage = useSelector((state) => state.filter.activePage);

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = type > 0 ? `category=${type}` : '';
  const sortFilter = sort.sortProperty;
  const searchValue = search ? `search=${search}` : '';

  const pageSize = 4;
  const startIndex = (activePage - 1) * pageSize;
  const NumberOfPages = Math.ceil(items.length / pageSize);
  const sliceItems = items.slice(startIndex, pageSize * activePage);

  const goodsFetch = () => {
    setIsLoading(true);
    axios
      .get(
        `https://638d373d4190defdb73ffb73.mockapi.io/items?${category}&sortBy=${sortFilter}&order=desc&${searchValue}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (!isSearch.current) {
      goodsFetch();
    }

    isSearch.current = false;
  }, [sortFilter, type, search, activePage]);

  useEffect(() => {
    if (isMounted.current) {
      const querryString = qs.stringify({
        sortProperty: sort.sortProperty,
        activePage,
        type,
      });
      navigate(`?${querryString}`);
    }
    isMounted.current = true;
  }, [sortFilter, type, search, activePage]);

  return (
    <section className="product">
      <div className="container">
        <h2 className="title product__title">
          {title}
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
              <Pagination activePage={activePage} NumberOfPages={NumberOfPages} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
