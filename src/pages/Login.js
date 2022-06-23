import Style from '../styles/Login.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);
  const message = useSelector((state) => state.user.message);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    message === 'Logged in Successfully' && navigate('/');
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-center pb-2 text-2xl mt-14 font-extrabold">
        Login or Create an Acount
      </h1>
      <div className="w-24 h-4 flex mx-auto">
        <hr className="text-center border-0 h-1 bg-blue-800 w-24" />
      </div>
      <div className={Style.wrapper}>
        <div className={Style.loginContainer}>
          <h2 className="text-left text-2xl font-extrabold">
            Registered Customers
          </h2>
          <hr className={Style.hRule} />
          <p className="text-md font-bold py-2">
            If you have an account with us, please log in.
          </p>
          <form>
            <div className="flex">
              <label className="text-md">Email Address</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className={Style.logInput}
            />
            <div className="flex">
              <label className="text-md">Password</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className={Style.logInput}
            />
            <div className="flex items-center">
              <input
                onClick={handleLogin}
                disabled={isFetching}
                type="submit"
                value="Sign In"
                className={Style.btnStyle}
              />

              <Link to="/" className="font-bold text-md">
                Forgot Your Password?
              </Link>
            </div>
            {error && (
              <p className="text-lg text-rose-500">Something went wrong</p>
            )}
          </form>
        </div>
        <div className={Style.registerContainer}>
          <h1 className="text-left text-2xl font-extrabold">New Customers</h1>
          <hr className={Style.hRule} />
          <p className="mb-6 pt-2">
            By creating an account with our store, you will be able to move
            through the checkout process faster, view your orders in your
            account and more.
          </p>
          <Link to="/register">
            <input
              type="submit"
              value="Create an Account"
              className={Style.btnStyle}
            />
          </Link>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default Login;
