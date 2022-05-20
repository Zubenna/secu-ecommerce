import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAction } from '../redux/apiCalls';
const OrderSuccess = () => {
  const dispatch = useDispatch();
  resetAction(dispatch);
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="rounded-2xl p-4 bg-sky-500 w-10/12 my-4 mx-auto h-80">
          <h3 className="font-bold text-center pt-3 text-black text-3xl">
            You have successfully paid for your items
          </h3>
          <h4 className="font-bold text-center pt-3 text-white text-2xl">
            Your Transaction is now completed
          </h4>
          <h4 className="font-bold text-center pt-3 text-white text-xl">
            Thanks for doing business with us! Come back soon!!
          </h4>
          <div className="mt-24 mx-auto w-44 flex justify-center">
            <Link
              to="/"
              className="w-full  text-center p-2 font-bold bg-black text-white text-md"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};
export default OrderSuccess;
