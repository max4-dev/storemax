import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/cartItem';
import { clearProducts } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleClear = () => {
    dispatch(clearProducts());
  };

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
            {items.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <div className="cart-bottom">
            <div className="cart-bottom__counter">
              Всего товаров: <span>{totalCount} шт.</span>
            </div>
            <p className="cart-bottom__price">
              Сумма заказа: <span>{totalPrice} ₽</span>
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
