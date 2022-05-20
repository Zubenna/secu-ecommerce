import './styles/main.css';
import Home from './pages/Home';
import ListSubCatProducts from './pages/ListSubCatProducts';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import AdminHome from './admin/pages/home/Home';
import AdminProduct from './admin/pages/product/Product';
import UpdateProduct from './admin/pages/updateProduct/UpdateProduct';
import Users from './admin/pages/userList/UserList';
import AdminProList from './admin/pages/productList/ProductList';
import NewProduct from './admin/pages/newProduct/NewProduct';
import OrderSuccess from './pages/OrderSuccess';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="prolist" element={<AdminProList />} />
        <Route path="users" element={<Users />} />
        <Route path="product/:proId" element={<AdminProduct />} />
        <Route path="updateprod/:proId" element={<UpdateProduct />} />
        <Route path="newproduct" element={<NewProduct />} />
        <Route path="success" element={<OrderSuccess />} />
        {/* <Route path=":proId" element={<AdminProduct />} /> */}

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
        <Route
          path="/"
          element={user ? <Navigate to="/" /> : <Navigate to="/login" />}
        />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
