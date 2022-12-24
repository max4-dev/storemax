import React, { createContext, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/notFound';
// import Sales from './components/sales';
import './scss/style.scss';

import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';

export const AppContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [activeType, setActiveType] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeTitle, setActiveTitle] = useState('Все товары');

  return (
    <>
      <AppContext.Provider
        value={{
          searchValue,
          setSearchValue,
          activeType,
          setActiveType,
          activePage,
          setActivePage,
          activeTitle,
          setActiveTitle,
        }}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
