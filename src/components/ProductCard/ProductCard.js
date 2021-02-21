import React from 'react';
//import { HashLink } from 'react-router-hash-link';
import './ProductCard.css';

const ProductCard = ({value, onClick}) => {

    let product = value;

    if (product.quantity > 0 ){
        return(
            <div onClick={() => onClick(product)} className={'product-card ' + product.sex }>     
                <img className="perfume-type-icon" src={product.type} alt="F"/>
                <img alt='parfem' className='product-img' src={product.parfemImg}/>
                <h2>{product.title}</h2>
                <h4>{product.oldPrice} KM</h4>
                <h3>{product.price} KM</h3>
            </div>
        )
    }
    else {
        return (
            <div className={'product-card card-not-available' + product.sex }>
                <img style={{'opacity': '0.2'}} className="perfume-type-icon" src={product.type} alt="F"/>
                <img style={{'opacity': '0.2'}} alt='parfem' className='product-img' src={product.parfemImg}/>
                <h2 style={{'opacity': '0.2'}}>{product.title}</h2>
                <h4 style={{'opacity': '0.2'}}>{product.oldPrice} KM</h4>
                <h3 style={{'opacity': '0.2'}}>{product.price} KM</h3>
                <div className="overlay"><h1>OUT OF STOCK</h1></div>
            </div>
        )
    }
}



export default ProductCard
