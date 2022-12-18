import React, { createContext, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/notFound';
// import Sales from './components/sales';
import './scss/style.scss';

import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';

export const SearchContext = createContext('');
export const TypeContext = createContext(0);
export const PageContext = createContext(1);
export const TitleContext = createContext('Все товары');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [activeType, setActiveType] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeTitle, setActiveTitle] = useState('Все товары');

  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <TypeContext.Provider value={{ activeType, setActiveType }}>
          <PageContext.Provider value={{ activePage, setActivePage }}>
            <TitleContext.Provider value={{ activeTitle, setActiveTitle }}>
              <Header />
              <main className="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </TitleContext.Provider>
          </PageContext.Provider>
        </TypeContext.Provider>
      </SearchContext.Provider>
    </>
  );
}

export default App;
