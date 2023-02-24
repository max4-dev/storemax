import Home from './pages/Home';
import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loadable from 'react-loadable';
import { Loader } from './components';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */'./pages/Cart'),
  loading: () => <Loader />,
});

const FullProduct = Loadable({
  loader: () => import(/* webpackChunkName: "FullProduct" */'./pages/FullProduct'),
  loading: () => <Loader />,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'),
  loading: () => <Loader />,
});

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
