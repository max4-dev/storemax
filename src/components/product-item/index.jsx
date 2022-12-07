import React from 'react';

const ProductItem = ({ title, imageUrl, id, price }) => {
  return (
    <div className="product-content__item" key={id}>
      <img className="product-content__img" src={imageUrl} alt="" />
      <h5 className="product-content__title">{title}</h5>
      <p className="product-content__text">ID: {id}</p>
      <div className="product-content__badges">
        <span className="product-content__price">{price} ₽</span>
        <a className="product-content__link" href="#">
          Посмотреть товар
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
