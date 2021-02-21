import React, {useState} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

import './Brands.css'

const Brands = ({slides}) => {
    
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };
    const previusSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        
        <div className='brands'>
            <p className='brands-name-heading'>
                BRENDOVI
            </p> 
            <section className='slider'>
                <AiOutlineArrowLeft className='left-arrow' onClick={previusSlide}/>
                <AiOutlineArrowRight className='right-arrow' onClick={nextSlide}/>
                {slides.map((slide, index)=>{
                    return ( 
                        <div 
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        >
                            {index === current && (
                                <div className='brands-container'>
                                    <ul className='brands-menu'>
                                        <li className='brands-item'>
                                            <img src={slide.brandImageOne} className='brands-logo' alt='Loading Error'/>
                                        </li>
                                        <li className='brands-item'>
                                            <img src={slide.brandImageTwo} className='brands-logo' alt='Loading Error'/>
                                        </li>
                                        <li className='brands-item'>
                                            <img src={slide.brandImageThree} className='brands-logo' alt='Loading Error'/>
                                        </li>
                                        <li className='brands-item'>
                                            <img src={slide.brandImageFour} className='brands-logo' alt='Loading Error'/>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>
        </div>
    )
}

export default Brands

/*return (
        <div className='brands'>
            <p className='brands-name-heading'>
                BRENDOVI
            </p> 
            <div className='brands-container'>
                <ul className='brands-menu'>
                    <li className='brands-item'>
                        <img className='brands-logo' src='/images/armani-logo.png'/>
                    </li>
                    <li className='brands-item'>
                        <img className='brands-logo' src='/images/armani-logo.png'/>
                    </li>
                    <li className='brands-item'>

                    </li>
                    <li className='brands-item'>

                    </li>
                </ul>
            </div>
        </div>
    )*/