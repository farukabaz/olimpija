import React from 'react'
import './css/Kontakt.css'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


import GlobalStyle from '../globalStyles';

const Kontakt = () => {
    return (
        <div>
            <GlobalStyle/>
            <Navbar/>
            <Header/>
            <div className='kontakt'>
                <div className='kontakt-img'>
                    <img alt="loading..." src='images/logo.jpg'/>
                </div>
                <div className='kontakt-desc'>
                    <h2>KONTAKT INFO</h2>
                    <h3>instagram: @olimpija_parfemi</h3>
                    <h3>facebook: Olimpija Parfemi</h3>
                    <h3>kontakt telefon: 061/225-883</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Kontakt

