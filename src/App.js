import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Sales from './components/sales';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import FullProduct from './pages/FullProduct';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="product/:productId" element={<FullProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
