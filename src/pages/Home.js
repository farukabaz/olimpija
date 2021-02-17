import React, {useState} from 'react'

import Brands from '../components/Brands/Brands';
import Footer from '../components/Footer/Footer';
import Hero from '../components/HeroSection/Hero';
import Navbar from '../components/Navbar/Navbar';
import NewProducts from '../components/NewProducts/NewProducts';
import OnSale from '../components/OnSale/OnSale';
import Services from '../components/Services/Services';

import { SliderData } from '../data/SliderData';
import { ProductsData } from '../data/ProductsData';

import GlobalStyle from '../globalStyles';

function Home() {

  // Function for dropdown menu 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Hero slides={SliderData}/>
      <Services/>
      <NewProducts products={ProductsData}/>
      <Brands/>
      <OnSale/>
      <Footer/>
    </>
  );
}

export default Home;
