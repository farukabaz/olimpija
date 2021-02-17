import React from 'react'
import './Brands.css'

const Brands = () => {
    return (
        <div className='brands'>
            <section className='brands-name'>
                <p className='brands-name-heading'>
                    BRENDOVI
                </p> 
            </section>
            <div className='brands-container'>
            <ul className='brands-menu'>
                <li className='brands-item'>
                    <img className='brands-logo' src='/images/armani-logo.png'/>
                </li>
                <li className='brands-item'>
                <img className='brands-logo' src='/images/armani-logo.png'/>
                </li>
                <li className='brands-item'>
                <img className='brands-logo' src='/images/armani-logo.png'/>
                </li>
                <li className='brands-item'>
                <img className='brands-logo' src='/images/armani-logo.png'/>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Brands
