import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
// import axios from "axios";
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { publicRequest } from '../apiCalls/productApi';

const ListCameraSystems = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const cat = location.state;
  console.log(product);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          `/product/getProducts/subcatquery/?subCategory=${cat}`
        );
        // console.log(res);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [cat]);
  return (
    <div>
      <Navbar />
      <div>ListCameraSystems</div>
      <SearchBox />
      <Footer />
    </div>
  );
};

export default ListCameraSystems;
