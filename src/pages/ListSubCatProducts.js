import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
// import Style from '../styles/ListSubCatProduct.module.css';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { publicRequest } from '../apiCalls/productApi';
import Product from '../components/Product';

const ListSubCatProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const cat = location.state;
  // console.log(cat);
  console.log('Products', products);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          `product/getProducts/subcatquery?subCategory=${cat}`
        );
        setProducts(res.data);
      } catch {}
    };
    getProduct();
  }, [cat]);
  return (
    <div>
      <Navbar />
      <div className="flex px-12 py-16 justify-between flex-wrap w-full">
        {products.length === 0 ? (
          <p>Loading Products....</p>
        ) : (
          products?.map((prod) => <Product key={prod._id} prod={prod} />)
        )}
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default ListSubCatProducts;
