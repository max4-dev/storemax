import Home from './pages/Home';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import loadable from '@loadable/component';
import Login from './pages/Login';
import Register from './pages/Register';

const Cart = loadable(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));
const FullProduct = loadable(() => import(/* webpackChunkName: "FullProduct" */'./pages/FullProduct'));
const NotFound = loadable(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product/:productId" element={<FullProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
