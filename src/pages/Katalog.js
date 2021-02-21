import React from 'react'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import NewProducts from '../components/NewProducts/NewProducts';

import { ProductsData } from '../data/ProductsData';

import Categories from '../components/Categories/Categories'
import Brands from '../components/Brands/Brands'
import { BrandsData } from '../data/BrandsData';

import GlobalStyle from '../globalStyles';

const Katalog = () => {
    return (
        <div>
            <GlobalStyle/>
            <Navbar/>
            <Header/>
            <Categories slides={BrandsData}/>
            <NewProducts topTitle={"KATEGORIJA"} bottomTitle={"JEDAN"} products={ProductsData}/>
            <NewProducts topTitle={"KATEGORIJA"} bottomTitle={"DRUGA"} products={ProductsData}/>
            <Brands slides={BrandsData}/>
            <NewProducts topTitle={"KATEGORIJA"} bottomTitle={"TRECA"} products={ProductsData}/>
            <NewProducts topTitle={"KATEGORIJA"} bottomTitle={"CETVRTA"} products={ProductsData}/>
            <Footer/>
        </div>
    )
}

export default Katalog
