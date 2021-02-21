import React from 'react'
import "./ModalItem.css";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";


const ModalItem = ({product, decreaseCount, increaseCount, count}) => {
    return(
        <div className="modal-div">
            <div className="modal-title">
                <h2>{product.title}</h2>
            </div>

            <div className="modal-item-div">
                <div>
                    <img alt="loading..." src={product.parfemImg}/>
                </div>
                <div className="modal-item-desc">
                    <p>Evoking the dry, resin-like scent of pencil shavings. Some materials can smell woody even though they are not woods: 
                        the grassy plant patchouli smells dry, pungent, earthy and woody
                    </p>
                    <h4>{product.oldPrice} KM</h4>
                    <h3>{product.price} KM</h3>
                    <div className="modal-icons">
                        <FiMinusCircle onClick={decreaseCount} style={{fontSize: "2.5vw"}}/>
                        <h2>{count}</h2>
                        <FiPlusCircle onClick={increaseCount} style={{fontSize: "2.5vw"}}/>
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>                        
        </div>
    )
}

export default ModalItem
