import { useEffect, useRef, FC } from 'react';
import qs from 'qs';

import Filter, { sortList } from '../components/Filter';
import ProductItem from '../components/productItem';
import Skeleton from '../components/productItem/Skeleton';
import '../scss/style.scss';
import Pagination from '../components/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters, setSearch } from '../redux/slices/filterSlice';
import { fetchGoods } from '../redux/slices/goodsSlice';
import Aside from '../components/Aside';

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, status } = useSelector((state: any) => state.goods);
  const {type, sort,search, title, activePage} = useSelector((state: any) => state.filter);

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const category = type > 0 ? `category=${type}` : '';
  const sortFilter = sort.sortProperty;
  const searchValue = search ? `search=${search}` : '';

  const pageSize = 4;
  const startIndex = (activePage - 1) * pageSize;
  const NumberOfPages = Math.ceil(items.length / pageSize);
  const sliceItems = items.slice(startIndex, pageSize * activePage);

  const getGoods = async () => {
    dispatch(
      //@ts-ignore
      fetchGoods({
        category,
        sortFilter,
        searchValue,
      }),
    );
  };

  const subtitleName = (num: number) => {
    if (num % 10 === 1) {
      return 'товар';
    } else if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
      return 'товара';
    }
    return 'товаров';
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
    getGoods();

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

  if (status === 'error') {
    return (
      <div className="cart cart--empty">
        <div className="container">
          <div className="cart__inner">
            <h2 className="title">Произошла ошибка😕</h2>
            <p className="cart__text">
              К сожалению, не удалось загрузить товары. Повторите попытку позже.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="product">
      <div className="container">
        <h2 className="title product__title">
          {title}
          <sup>
            {items.length} {subtitleName(items.length)}
          </sup>
        </h2>
        <div className="product__inner">
          <Aside />
          <div className="product-content">
            <Filter />
            <div className="product-content__items">
              {status === 'loading'
                ? [...new Array(6)].map((_, index) => (
                    <div className="product-content__item-wrapper" key={index}>
                      <Skeleton />
                    </div>
                  ))
                : sliceItems.map((product: {title: string, imageUrl: string, id: string, price: number, category: number}) => <ProductItem {...product} key={product.id} />)}
            </div>
            {NumberOfPages > 1 && status === 'success' && (
              <Pagination activePage={activePage} NumberOfPages={NumberOfPages} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
