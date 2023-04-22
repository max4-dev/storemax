import { useEffect } from 'react';
import Home from './pages/Home';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import loadable from '@loadable/component';
import Login from './pages/Login';
import Register from './pages/Register';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';
import { selectIsAuth } from './redux/auth/slice';
import { fetchAuthMe } from './redux/auth/asyncActions';

const Cart = loadable(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));
const FullProduct = loadable(() => import(/* webpackChunkName: "FullProduct" */'./pages/FullProduct'));
const NotFound = loadable(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'));
const Admin = loadable(() => import(/* webpackChunkName: "Admin" */'./pages/Admin'));

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product/:productId" element={<FullProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
