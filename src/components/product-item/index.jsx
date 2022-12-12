import React from 'react';

const ProductItem = ({ title, imageUrl, id, price, category }) => {
  return (
    <div className="product-content__item-wrapper">
      <div className="product-content__item" key={id}>
        <div className={`product-content__box-img product-content__box-img--${category}`}>
          <img className="product-content__img" src={imageUrl} alt="" />
        </div>
        <h5 className="product-content__title">{title}</h5>
        <p className="product-content__text">ID: {id}</p>
        <div className="product-content__badges">
          <span className="product-content__price">{price} ₽</span>
          <a className="product-content__link" href="#">
            Посмотреть товар
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
