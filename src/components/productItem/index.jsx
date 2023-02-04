import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/slices/cartSlice';

const ProductItem = ({ title, imageUrl, id, price, category }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartItem = items.find((item) => item.id === id);

  const addedCount = cartItem ? cartItem.count : 0;

  const handleAddProduct = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
      category,
    };
    dispatch(addProduct(item));
  };

  return (
    <div className="product-content__item-wrapper">
      <div className="product-content__item" key={id}>
        <button className="product-content__btn" onClick={handleAddProduct}>
          {addedCount ? <span>{addedCount}</span> : ''}
          <img src="images/icons/cart.svg" alt="" />
        </button>
        <div className={`product-content__box-img product-content__box-img--${category}`}>
          <img className="product-content__img" src={imageUrl} alt="" />
        </div>
        <h5 className="product-content__title">{title}</h5>
        <p className="product-content__text">ID: {id}</p>
        <div className="product-content__badges">
          <span className="product-content__price">{price.toLocaleString('ru-RU')} ₽</span>
          <Link className="product-content__link" to={'/product/' + id}>
            Посмотреть товар
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
