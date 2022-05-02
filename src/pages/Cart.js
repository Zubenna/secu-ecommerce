import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Style from '../styles/Cart.module.css';
import imgOne from '../images/BestSellers/bestEight.webp';
import imgTwo from '../images/BestSellers/bestEleven.webp';
import { useDispatch } from 'react-redux';
import {
  addProduct,
  removeProduct,
  decreaseProduct,
  getTotalPrice,
} from '../redux/cartRedux';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch, cart]);

  const removeItemFromCart = (item) => {
    dispatch(removeProduct(item));
  };

  const decreseProductQuant = (product) => {
    dispatch(decreaseProduct(product));
  };
  const increaseProductQuant = (product) => {
    dispatch(addProduct(product));
  };
  console.log('Total', cart.cartTotalAmount);
  return (
    <div>
      <Navbar />
      <div className="py-2 px-12">
        <h1 className="text-center font-extrabold mt-12 text-2xl text-black">
          YOUR BAG
        </h1>
        {cart.products.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <>
            <div className="flex mt-12 justify-between items-center">
              <Link to="/">
                <button className="p-2 font-bold bg-black text-white text-md">
                  CONTINUE SHOPPING
                </button>
              </Link>
              <div>
                <span className="p-2 decoration-solid">
                  Shopping Bag Contains {cartQuantity} items.
                </span>
                <Link to="/" className="p-2 decoration-solid">
                  Your Whishlist (0)
                </Link>
              </div>
              <button className="p-2 font-bold text-white bg-black text-md">
                CHECKOUT NOW
              </button>
            </div>
            <div className={Style.productWrapper}>
              <div className="flex flex-col">
                {cart.products.map((product) => (
                  <div key={product._id} className={Style.proDetail}>
                    <div className={Style.imgBox}>
                      <img src={imgOne} alt="" />
                    </div>
                    <div className={Style.infoBox}>
                      <h2 className="pl-2 font-bold">{product.name}</h2>
                      <span className="pl-2 text-xl">{product.rating}</span>
                      <p className="text-lg p-2">{product.description}</p>
                      <span className="pl-2 pb-2 font-bold">
                        Quantity: {product.itemQuantity}
                      </span>
                      <span className="pl-2 pb-2 text-md">
                        Unit Price: ${product.price}
                      </span>
                      <span className="pl-2 pb-2 text-md">
                        Sub Total: $
                        {parseFloat(
                          (product.price * product.itemQuantity).toFixed(2)
                        )}
                      </span>
                    </div>
                    <div className={Style.priceBox}>
                      <div className="flex items-center">
                        <Remove
                          className="cursor-pointer"
                          onClick={() => decreseProductQuant(product)}
                        />
                        <p className="text-3xl p-2">{product.itemQuantity}</p>
                        <Add
                          className="cursor-pointer"
                          onClick={() => increaseProductQuant(product)}
                        />
                      </div>
                      <button
                        onClick={() => removeItemFromCart(product)}
                        className="mt-2 p-2 font-bold text-white bg-black text-md"
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={Style.proSummary}>
                <h1 className="text-center font-bold">ORDER SUMMARY</h1>
                <div className="flex justify-between items-center">
                  <h3 className="p-2 font-bold">Subtotal:</h3>
                  <span>${cart.cartTotalAmount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold p-2">Estimated Shipping:</h3>
                  <span>$40</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold p-2">Shipping Discount:</h3>
                  <span>$10</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-2xl p-2">Total:</h3>
                  <span>${cart.cartTotalAmount + 40 + 10}</span>
                </div>
                <button className="p-2 font-bold bg-black text-white text-xl">
                  CHECKOUT NOW
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default Cart;
