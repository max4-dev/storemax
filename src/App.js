import React, { createContext, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/notFound';
// import Sales from './components/sales';
import './scss/style.scss';

import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
