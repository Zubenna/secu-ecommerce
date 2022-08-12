import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { resetAction } from '../redux/apiCalls';
const RegisterSuccess = () => {
  //   const dispatch = useDispatch();
  //   resetAction(dispatch);
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="rounded-2xl p-4 bg-sky-900 w-10/12 my-4 mx-auto h-80">
          <h3 className="font-bold text-center pt-3 text-white text-3xl">
            You have registered sucessfully
          </h3>

          <div className="mt-16 mx-auto w-44 flex justify-center">
            <Link
              to="/login"
              className="w-full  text-center p-2 font-bold bg-black text-white text-md"
            >
              PLEASE LOGIN
            </Link>
          </div>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};
export default RegisterSuccess;
