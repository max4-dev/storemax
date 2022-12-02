import Aside from './components/aside';
import Filter from './components/filter';
import Header from './components/header';
import ProductItem from './components/product-item';
import Sales from './components/sales';
import './scss/style.scss';

import products from './assets/products.json';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sales />
        <section className="product">
          <div className="container">
            <h2 className="title product__title">
              Одежда<sup>6 товаров</sup>
            </h2>
            <div className="product__inner">
              <Aside />
              <div className="product-content">
                <Filter />
                <div className="product-content__items">
                  {products.map((product) => (
                    <ProductItem {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="logo">
          <a href="#">
            <img className="logo__img" src="images/footer-logo.jpg" alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
