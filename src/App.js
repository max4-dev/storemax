import React from 'react';
import Home from './pages/home';
import NotFound from './pages/notFound';
// import Sales from './components/sales';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';
import FullProduct from './pages/fullProduct';
import MainLayout from './layouts/mainLayout';

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
