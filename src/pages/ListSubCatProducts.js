import React, { useEffect, useState } from 'react';
// import testOne from '../images/BestSellers/bestEight.webp';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Style from '../styles/ListSubCatProduct.module.css';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import axios from 'axios';
// import { publicRequest } from '../apiCalls/productApi';
import Product from '../components/Product';

const ListSubCatProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const cat = location.state;
  // console.log(cat);
  // console.log('Products', products);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `products/getByCat?category=${cat}`
        );
        setProducts(res.data);
        // console.log('here', res.data);
      } catch {}
    };
    getProduct();
  }, [cat]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <h2 className="my-4 text-3xl font-extrabold text-dark text-center">
          List of Products
        </h2>
        <div className={Style.container}>
          {products.length === 0 ? (
            <p>Loading Products....</p>
          ) : (
            products?.map((prod) => <Product key={prod._id} prod={prod} />)
          )}
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default ListSubCatProducts;
