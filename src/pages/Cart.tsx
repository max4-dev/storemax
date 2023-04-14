import {FC} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/';
import { selectTotalCount } from '../redux/cart/selectors';
import { clearProducts } from '../redux/cart/slice';
import { RootState, useAppDispatch } from '../redux/store';

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleClear = () => {
    dispatch(clearProducts());
  };

  if (items.length < 1) {
    return (
      <div className="cart cart--empty">
        <div className="container">
          <div className="cart__inner">
            <h2 className="title">Корзина пустая😕</h2>
            <p className="cart__text">
              Вероятней всего, вы не добавили товары в корзину. Для того, чтобы добавить товары,
              перейди на главную страницу.
            </p>
            <Link className="cart__link" to="/">
              <span>Вернуться на главную</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="cart">
      <div className="container container-s">
        <div className="cart__inner">
          <div className="cart__top">
            <h2 className="title cart__title">Корзина</h2>
            <button className="cart__clear" onClick={handleClear}>
              Очистить корзину
            </button>
          </div>
          <div className="cart__items">
            {items.map((item: { _id: string, imageUrl: string, title: string, price: number, category: number, count: number}) => (
              <CartItem {...item} key={item._id} />
            ))}
          </div>
          <div className="cart-bottom">
            <div className="cart-bottom__counter">
              Всего товаров: <span>{totalCount} шт.</span>
            </div>
            <p className="cart-bottom__price">
              Сумма заказа: <span>{totalPrice.toLocaleString('ru-RU')}₽</span>
            </p>
          </div>
          <div className="cart-buttons">
            <Link to="/" className="cart-buttons__back">
              Вернуться назад
            </Link>
            <button className="cart-buttons__pay">Оплатить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
