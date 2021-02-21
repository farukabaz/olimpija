import React, { useState } from 'react';
import './NewProducts.css';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import ProductCard from '../ProductCard/ProductCard';
import HeaderCard from '../ProductCard/HeaderCard';
import ModalItem from '../ModalItem/ModalItem';

const NewProducts = ({products}) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => count > 0 ? setCount(count - 1) : setCount(0);

    const [product, setProduct] = useState(products[0]);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {setOpen(false); setCount(0)};

    function clickedOnProductCard(product){
        setProduct(product);
        onOpenModal();
    }

    return (
        <div id="newProducts" className="products">
            <div className="products-all">

                <HeaderCard topText="NOVO U" bottomText="PONUDI"/>
                {products.map((product) => <ProductCard key={product.id.toString()} onClick={clickedOnProductCard} value={product} />)}
                {/* {products.map((product) => { return(<ProductCard onClick={clickedOnProductCard} product={product}/>) })} */}
                <Modal classNames={{ overlay: 'customOverlay',modal: 'customModal', closeButton: 'closeButton',}} open={open} onClose={onCloseModal} center>
                    <ModalItem product={product} decreaseCount={decreaseCount} increaseCount={increaseCount} count={count}/>
                </Modal>  

            </div>
        </div>
    )
}

export default NewProducts



