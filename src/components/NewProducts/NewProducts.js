import React, { useState, useEffect } from 'react';
import './NewProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import HeaderCard from '../ProductCard/HeaderCard';

const NewProducts = ({products}) => {
    return (
        <div className="products">
            <div className="products-all">
                <HeaderCard topText="NOVO U" bottomText="PONUDI"/>
                {products.map((product) => { return(<ProductCard product={product}/>) })}
            </div>
        </div>
    )
}

export default NewProducts



