import React, { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/notFound';
// import Sales from './components/sales';
import './scss/style.scss';

import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [activeType, setActiveType] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeTitle, setActiveTitle] = useState('Все товары');

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setActiveType={setActiveType}
        setActivePage={setActivePage}
        setActiveTitle={setActiveTitle}
      />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                activeType={activeType}
                setActiveType={setActiveType}
                activePage={activePage}
                setActivePage={setActivePage}
                activeTitle={activeTitle}
                setActiveTitle={setActiveTitle}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
