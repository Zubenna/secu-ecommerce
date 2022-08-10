import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Style from '../styles/Cart.module.css';
// import imgOne from '../images/BestSellers/bestEight.webp';
import { useDispatch } from 'react-redux';
import { PaystackButton } from 'react-paystack';
import { addOrder } from '../redux/apiCalls';
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
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const orderMessage = useSelector((state) => state.order.message);
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const amount = (cart.cartTotalAmount + 40 + 10) * 100;
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch, cart]);

  const removeItemFromCart = (item) => {
    dispatch(removeProduct(item));
  };

  const decreaseProductQuant = (product) => {
    dispatch(decreaseProduct(product));
  };
  const increaseProductQuant = (product) => {
    dispatch(addProduct(product));
  };
  // console.log('Total', cart.cartTotalAmount);
  // console.log('PayStackApi', publicKey);

  const componentProps = {
    email: currentUser.email,
    amount,
    metadata: {
      name: currentUser.first_name,
      phone: currentUser.phone_number,
      address: currentUser.address,
    },
    publicKey,
    text: 'CHECKOUT NOW',
    onSuccess: () => {
      const products = cart.products;
      const userId = currentUser._id;
      const address = currentUser.address;
      const isPaid = true;
      const userName = currentUser.first_name + ' ' + currentUser.last_name;
      const orderInfo = { products, userId, amount, address, isPaid, userName };
      addOrder(orderInfo, dispatch);
      orderMessage === 'New Order Created' && navigate('/success');
    },
    // alert('Thanks for doing business with us! Come back soon!!'),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
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
                      <img src={product.image} alt="" />
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
                          onClick={() => decreaseProductQuant(product)}
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
                  <span>{(cart.cartTotalAmount + 40 + 10).toFixed()}</span>
                </div>
                {/* <button className="p-2 font-bold bg-black text-white text-xl">
                  CHECKOUT NOW
                </button> */}
                {currentUser ? (
                  <PaystackButton
                    className="p-2 font-bold bg-black text-white text-md"
                    {...componentProps}
                  />
                ) : (
                  navigate('/login')
                )}
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
