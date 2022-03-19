import React from 'react';
import Navbar from '../components/Navbar';
import SliderBox from '../components/SliderBox';
import ProductCategory from "../components/ProductCategory";
import BestSellers from '../components/BestSellers';
import  DoorBell from "../components/DoorBell";

const Home = () => (
  <div>
    <Navbar />
    <SliderBox />
    <ProductCategory /> 
    <BestSellers />
    <DoorBell />
  </div>
);

export default Home;
