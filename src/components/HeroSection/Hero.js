import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components/macro'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import './Hero.css'

const HeroSection = styled.section`
height: 94vh;
max-height: 1100px;
position: relative; 
overflow: hidden;
`;
const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;
const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
}
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh; 
object-fit: cover;
`;
const SliderButtons = styled.div `
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;
const PrevArrow = styled(AiOutlineArrowLeft)`
width: 50px;
height: 50px;
color: white;
cursor: pointer;
background: #4E6673;
color: #F4DFAF;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #F4DFAF;
    color: #4E6673;
    transform: scale(1.05);
}
`;
const NextArrow = styled(AiOutlineArrowRight)`
width: 50px;
height: 50px;
color: white;
cursor: pointer;
background: #4E6673;
color: #F4DFAF;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #F4DFAF;
    color: #4E6673;
    transform: scale(1.05);
}
`;

const Hero = ({slides}) => {


    // Setting up function with arrows to go to next and previous slide
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    // Use automatic slide effect 
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        // Time for which slide will change to next
        timeout.current = setTimeout(nextSlide, 3000)
        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    // Function for next slide
    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // Function for prev slide
    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // If there is no data or some error it should work (just in case)
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt}/>
                                    <div className='center-image'>
                                        <img alt='parfem' className='parfem-image' src={slide.parfemImg}/>
                                    </div>
                                    <div className='hero-content'>
                                        <h2 style={{color: slide.titleColor}}>{slide.title}</h2>
                                    </div>
                                </HeroSlider>
                            )} 
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero