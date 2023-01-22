import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, minusProduct, removeProduct } from '../redux/slices/cartSlice';
import { typeList } from './aside';

const CartItem = ({ id, imageUrl, title, price, category, count }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  const handlePlusProduct = (id) => {
    dispatch(addProduct({ id }));
  };

  const handleMinusProduct = (id) => {
    dispatch(minusProduct(id));
  };

  return (
    <div className="cart__item">
      <img className="cart__img" src={imageUrl} alt="" />
      <div className="cart__name">
        <a className="cart__name-link" href="#">
          <h4 className="cart__name-title">{title}</h4>
        </a>
        <p className="cart__name-text">{typeList[category].name}</p>
      </div>
      <div className="cart-counter">
        <button className="cart-counter__btn" onClick={() => handleMinusProduct(id)}>
          <img className="cart-counter__img" src="images/icons/minus.svg" alt="" />
        </button>
        <span className="cart-counter__num">{count}</span>
        <button className="cart-counter__btn" onClick={() => handlePlusProduct(id)}>
          <img className="cart-counter__img" src="images/icons/plus.svg" alt="" />
        </button>
      </div>
      <h5 className="cart__price">{(price * count).toLocaleString('ru-RU')}₽</h5>
      <button className="cart__delete" onClick={() => handleDelete(id)}>
        <img className="cart__delete-img" src="images/icons/close.svg" alt="" />
      </button>
    </div>
  );
};

export default CartItem;
