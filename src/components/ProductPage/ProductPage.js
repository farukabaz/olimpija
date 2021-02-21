import React from 'react'
import { useParams } from "react-router-dom";
import './ProductPage.css'

const ProductPage = () => {
    let { id } = useParams();


    return (
        <div className="product-home">
            <h2>{id}</h2>
        </div>
    )
}

export default ProductPage