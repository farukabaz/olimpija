import React from 'react';
import './NewProducts.css';

const NewProducts = ({products}) => {
    return (
        <div className="products">
            <div className="header-card-row">
                <div className="bottom-right-header">
                    NOVO U<br></br> PONUDI
                </div>
            </div>
            {products.map((product) => 
                {
                    return (
                        <div className={'product-card ' + product.sex }>
                            <img alt='parfem' className='product-img' src={product.parfemImg}/>
                            <h2>{product.title}</h2>
                            <h4>{product.oldPrice} KM</h4>
                            <h3>{product.price} KM</h3>
                        </div>
                        )
                    
                }
            )}


        </div>
    )
}

export default NewProducts
