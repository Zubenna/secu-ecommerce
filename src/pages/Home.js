import React from 'react';
import Navbar from '../components/Navbar';
import SliderBox from '../components/SliderBox';
import ProductCategory from "../components/ProductCategory";
import BestSellers from '../components/BestSellers';

const Home = () => (
  <div>
    <Navbar />
    <SliderBox />
    <ProductCategory />
    <BestSellers />
  </div>
);

export default Home;
