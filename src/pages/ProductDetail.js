import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Style from '../styles/ProductDetail.module.css';
import imgOne from '../images/BestSellers/bestEleven.webp';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

const ProductDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state;
  const handleClick = () => {
    dispatch(addProduct(product));
  };
  return (
    <div>
      <Navbar />
      <div className={Style.wrapper}>
        <h1 className="text-center my-8 text-black text-3xl font-bold">
          Product Detail
        </h1>
        <div className="flex">
          <div className={Style.ImgContainer}>
            <img src={imgOne} alt="" />
          </div>
          <div className={Style.InfoContainer}>
            <h1 className="font-bold text-lg">{product.description}</h1>
            <div className="flex items-center">
              <span>{product.rating}</span>
              <p className="px-2 cursor-pointer text-md text-blue-500">
                Write Review
              </p>
            </div>
            <div className="flex items-center">
              <span className="pr-2 text-md font-bold">{product.brand}</span>
              <span className="px-2 border-x-2 border-gray-800">
                SKU: RLK8-520D4-A
              </span>
              <span className="pl-2">Model: RLK8-520D4-A</span>
            </div>
            <p className="font-bold mt-4 text-md">Product Highlights</p>
            <p className="py-3">{product.description}</p>
            <hr />
            <div className="flex items-center">
              <p className="pl-4 text-2xl font-bold">$ {product.price}</p>
            </div>
            <button
              onClick={handleClick}
              className="bg-green-700 w-36 mt-4 text-xl font-bold text-white p-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default ProductDetail;
