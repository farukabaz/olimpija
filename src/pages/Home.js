import React from 'react'

import Footer from '../components/Footer/Footer';
import Hero from '../components/HeroSection/Hero';
import Navbar from '../components/Navbar/Navbar';
import NewProducts from '../components/NewProducts/NewProducts';
import OnSale from '../components/OnSale/OnSale';
import Services from '../components/Services/Services';

import { SliderData } from '../data/SliderData';
import { ProductsData } from '../data/ProductsData';
import { TopSellersData } from '../data/TopSellersData';

import Brands from '../components/Brands/Brands'
import { BrandsData } from '../data/BrandsData';

import GlobalStyle from '../globalStyles';

function Home() {

  // if enabled add: import React, {useState} from 'react';
  // Function for dropdown menu 
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Hero slides={SliderData}/>
      <Services/>
      <NewProducts products={ProductsData}/>
      <Brands slides={BrandsData}/>
      <OnSale products={TopSellersData}/>
      <Footer/>
    </>
  );
}

export default Home;
