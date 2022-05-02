import './styles/main.css';
import Home from './pages/Home';
import ListSubCatProducts from './pages/ListSubCatProducts';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="listsubproducts">
        <Route index element={<ListSubCatProducts />} />
        <Route path=":productId" element={<ProductDetail />} />
      </Route>
    </Routes>
    {/* <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='users'>
            <Route index element={<ListPage />} />
            <Route path=':userId' element={<SinglePage />} />
            <Route path='new' element={<NewPage />} />
          </Route>
        </Route>
      </Routes> */}
  </BrowserRouter>
);

export default App;
