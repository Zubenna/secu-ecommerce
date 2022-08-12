import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Style from '../styles/Register.module.css';
import { useState } from 'react';
import { register } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.user.message.msg);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, {
      first_name,
      last_name,
      username,
      address,
      phone_number,
      email,
      password,
      confirm_password,
    });
    console.log('The register message', message);
    if (message === 'Account created successfully') {
      registerSucess();
    }
   
  };
  const registerSucess = () => {
    navigate('/registerSuccess');
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center pb-2 text-2xl mt-14 font-extrabold">
          Create New Customer Account
        </h1>
        <div className="w-24 h-4 flex mx-auto">
          <hr className="text-center border-0 h-1 bg-blue-800 w-24" />
        </div>
        <div className={Style.wrapper}>
          <form className={Style.regisForm}>
            <h3 className="text-left mb-2 text-xl font-bold">
              PERSONAL INFORMATION
            </h3>
            <hr className={Style.hRule} />
            <div className="flex mt-6">
              <label className="text-lg">First Name</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter first name"
              className={Style.regInput}
            />
            <div className="flex">
              <label className="text-lg">Last Name</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter last name"
              className={Style.regInput}
            />
            <label className="text-lg">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
              className={Style.regInput}
            />
            <div className="flex">
              <label className="text-lg">Enter Address</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="textarea"
              placeholder="Enter address"
              className={Style.addInput}
            />
            <div className="flex">
              <label className="text-lg">Enter Phone Number</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Enter phone number"
              className={Style.regInput}
            />

            <h3 className="text-left mt-6 text-xl font-bold">
              SIGN-IN INFORMATION
            </h3>
            <hr className={Style.hRule} />
            <div className="flex mt-6">
              <label className="text-lg">Email Address</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className={Style.regInput}
            />
            <div className="flex">
              <label className="text-lg">Password</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className={Style.regInput}
            />
            <div className="flex">
              <label className="text-lg">Confirm Password</label>
              <span style={{ color: '#ff0000' }}>*</span>
            </div>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm your password"
              className={Style.regInput}
            />
            <div className="flex mt-6 items-center">
              <input
                onClick={handleRegister}
                type="submit"
                value="Submit"
                className={Style.btnStyle}
              />
              <div className="flex">
                <span className="mr-4">Have an Account?</span>
                <Link to="/login" className="text-blue-600 font-bold">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default Register;
