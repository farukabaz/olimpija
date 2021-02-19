import React from 'react';
import './OnSale.css';
import ProductCard from '../ProductCard/ProductCard';
import HeaderCard from '../ProductCard/HeaderCard';

const NewProducts = ({products}) => {
    return (
        <div className="products">
            <div className="products-all">
                <HeaderCard topText="TOP" bottomText="SELLERS"/>
                {products.map((product) => { return(<ProductCard product={product}/>) })}
            </div>
        </div>
    )
}

export default NewProducts
