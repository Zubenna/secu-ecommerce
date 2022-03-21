import React from 'react';
import Navbar from '../components/Navbar';
import SliderBox from '../components/SliderBox';
import ProductCategory from "../components/ProductCategory";
import BestSellers from '../components/BestSellers';
import DoorBell from "../components/DoorBell";
import Testimony from '../components/Testimony';
import PopularProducts from '../components/PopularProducts';
import SearchBox from '../components/SearchBox';
import Footer from "../components/Footer";

const Home = () => (
  <div>
    <Navbar />
    <SliderBox />
    <ProductCategory /> 
    <BestSellers />
    <DoorBell />
    <Testimony />
    <PopularProducts />
    <SearchBox />
    <Footer />
  </div>
);

export default Home;
