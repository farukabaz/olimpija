import React from 'react'
import './Footer.css'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Footer() { 
    return (
        <div className='footer-container'>
            
            <div className='footer-conatiner-left'>
                <div className='footer-title'>
                    <p>Lets find your scent</p>
                </div>
                <div className='footer-media'>
                    <div className='footer-media-icon'>
                        <p>Facebook</p>
                        <a href='https://www.facebook.com/parfemiOlimpija'>
                            <FaFacebookF/>
                        </a>
                    </div>
                    <div className='footer-media-icon'>
                        <p>Instagram</p>
                        <a href='https://www.instagram.com/loop_ensemble/'>
                            <FaInstagram/>
                        </a>
                    </div>   
                </div>
            </div>

            <div className='footer-conatiner-right'>
                <div className='footer-subtitles'>
                    <Link to='./' className='footer-subtitles-text'>
                        <p>Muski</p>
                    </Link>
                    <Link to='./' className='footer-subtitles-text'>
                        <p>Zenski</p>
                    </Link>
                    <Link to='./katalog' className='footer-subtitles-text'>
                        <p>Katalog</p>
                    </Link>
                    <Link to='./' className='footer-subtitles-text'>
                        <p>Mail</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
