import testOne from '../images/BestSellers/bestEight.webp';
import Style from '../styles/Product.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
const Product = (props) => {
  const dispatch = useDispatch();
  const { prod } = props;
  const uniqueKey = prod._id;
  // console.log('Per Product', prod);
  const handleClick = () => {
    dispatch(addProduct({ ...prod }));
  };

  return (
    <div className={Style.productBox}>
      <Link to={`/listsubproducts/${uniqueKey}`} state={prod}>
        <img src={testOne} alt="" />
        <p className="px-2 text-center line-clamp-2">{prod.description}</p>
        <p className="py-2 text-center font-bold text-lg">${prod.price}</p>
        <p className="font-bold text-center">{prod.rating}</p>
      </Link>
      <button
        onClick={handleClick}
        className="py-2 px-8 rounded text-center font-bold bg-green-700 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
