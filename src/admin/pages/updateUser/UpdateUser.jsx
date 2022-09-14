import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import SearchBox from '../../../components/SearchBox';
import Style from './updateUser.module.css';
import { useState } from 'react';
import { updateUser } from '../../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/sidebar/Sidebar';

const UpdateUser = () => {
  const navigate = useNavigate();
  const message = useSelector((state) => state.user.message.msg);
  // console.log('Front', message);
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(userId, inputs, dispatch);
    message === 'User updated successfully' && navigate('/admin');
  };
  return (
    <div>
      <Navbar />
      <div className={Style.userBox}>
        <div className={Style.sideBox}>
          <Sidebar />
        </div>
        <div className={Style.formBox}>
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
                onChange={handleChange}
                type="text"
                name="frst_name"
                placeholder={user.first_name}
                className={Style.regInput}
              />
              <div className="flex">
                <label className="text-lg">Last Name</label>
                <span style={{ color: '#ff0000' }}>*</span>
              </div>
              <input
                onChange={handleChange}
                type="text"
                name="last_name"
                placeholder={user.last_name}
                className={Style.regInput}
              />
              <label className="text-lg">Username</label>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder={user.username}
                className={Style.regInput}
              />
              <div className="flex">
                <label className="text-lg">Enter Address</label>
                <span style={{ color: '#ff0000' }}>*</span>
              </div>
              <input
                onChange={handleChange}
                type="text"
                name="address"
                placeholder={user.address}
                className={Style.addInput}
              />
              <div className="flex">
                <label className="text-lg">Enter Phone Number</label>
                <span style={{ color: '#ff0000' }}>*</span>
              </div>
              <input
                onChange={handleChange}
                type="text"
                name="phone_number"
                placeholder={user.phone_number}
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
                onChange={handleChange}
                type="email"
                name="email"
                placeholder={user.email}
                className={Style.regInput}
              />
              <div className="flex mt-6">
                <label className="text-lg">Admin Status</label>
                <span style={{ color: '#ff0000' }}>*</span>
              </div>
              <select name="isAdmin" onChange={handleChange}>
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
              {/* onChange={handleChange}
              type="email" name="email" placeholder={user.email}
              className={Style.regInput}
              /> */}
              {/* <div className="flex">
                <label className="text-lg">Password</label>
                <span style={{ color: '#ff0000' }}>*</span>
              </div>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className={Style.regInput}
              /> */}
              {/* <div className="flex">
                <label className="text-lg">Confirm Password</label>
                <span style={{ color: '#ff0000' }}>*</span>
              </div>
              <input
                onChange={handleChange}
                type="password"
                name="confirm_password"
                className={Style.regInput}
              /> */}
              <div className="flex mt-6 items-center">
                <input
                  onClick={handleUpdate}
                  type="submit"
                  value="Update"
                  className={Style.btnStyle}
                />
                {/* <div className="flex">
                <span className="mr-4">Have an Account?</span>
                <Link to="/login" className="text-blue-600 font-bold">
                  Login
                </Link>
              </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default UpdateUser;
