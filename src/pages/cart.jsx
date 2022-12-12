import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <section className="cart">
      <div className="container container-s">
        <div className="cart__inner">
          <div className="cart__top">
            <h2 className="title cart__title">Корзина</h2>
            <button className="cart__clear">Очистить корзину</button>
          </div>
          <div className="cart__items">
            <div className="cart__item">
              <img className="cart__img" src="images/product/clothes/1.jpg" alt="" />
              <div className="cart__name">
                <a className="cart__name-link" href="#">
                  <h4 className="cart__name-title">Рюкзак adidas Classic Fabric Backpack</h4>
                </a>
                <p className="cart__name-text">Спортивный, Школа</p>
              </div>
              <div className="cart-counter">
                <button className="cart-counter__btn">
                  <img className="cart-counter__img" src="images/icons/minus.svg" alt="" />
                </button>
                <span className="cart-counter__num">3</span>
                <button className="cart-counter__btn">
                  <img className="cart-counter__img" src="images/icons/plus.svg" alt="" />
                </button>
              </div>
              <h5 className="cart__price">4 699 ₽</h5>
              <button className="cart__delete">
                <img className="cart__delete-img" src="images/icons/close.svg" alt="" />
              </button>
            </div>
            <div className="cart__item">
              <img className="cart__img" src="images/product/clothes/1.jpg" alt="" />
              <div className="cart__name">
                <a className="cart__name-link" href="#">
                  <h4 className="cart__name-title">Рюкзак adidas Classic Fabric Backpack</h4>
                </a>
                <p className="cart__name-text">Спортивный, Школа</p>
              </div>
              <div className="cart-counter">
                <button className="cart-counter__btn">
                  <img className="cart-counter__img" src="images/icons/minus.svg" alt="" />
                </button>
                <span className="cart-counter__num">3</span>
                <button className="cart-counter__btn">
                  <img className="cart-counter__img" src="images/icons/plus.svg" alt="" />
                </button>
              </div>
              <h5 className="cart__price">4 699 ₽</h5>
              <button className="cart__delete">
                <img className="cart__delete-img" src="images/icons/close.svg" alt="" />
              </button>
            </div>
            <div className="cart__item">
              <img className="cart__img" src="images/product/clothes/1.jpg" alt="" />
              <div className="cart__name">
                <a className="cart__name-link" href="#">
                  <h4 className="cart__name-title">Рюкзак adidas Classic Fabric Backpack</h4>
                </a>
                <p className="cart__name-text">Спортивный, Школа</p>
              </div>
              <div className="cart-counter">
                <button className="cart-counter__btn">
                  <img className="cart-counter__img" src="images/icons/minus.svg" alt="" />
                </button>
                <span className="cart-counter__num">3</span>
                <button className="cart-counter__btn">
                  <img className="cart-counter__img" src="images/icons/plus.svg" alt="" />
                </button>
              </div>
              <h5 className="cart__price">4 699 ₽</h5>
              <button className="cart__delete">
                <img className="cart__delete-img" src="images/icons/close.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="cart-bottom">
            <div className="cart-bottom__counter">
              Всего пицц: <span>3 шт.</span>
            </div>
            <p className="cart-bottom__price">
              Сумма заказа: <span>900 ₽</span>
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
