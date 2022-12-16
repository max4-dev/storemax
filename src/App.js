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

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setActiveType={setActiveType}
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
