import React from 'react'
import './Services.css'
import {FaTruck, FaMoneyBillAlt, FaMedal} from 'react-icons/fa'
import {GoPackage} from 'react-icons/go'

const Services = () => {
    return (
        <div className='services'>
            <div className='services-container'>
            <ul className='services-menu'>
                <li className='services-item'>
                    <a>
                        <FaTruck/>
                    </a>
                    Dostava u roku 24h
                </li>
                <li className='services-item'>
                    <a>
                        <FaMoneyBillAlt/>
                    </a>
                    Plaćanje pouzećem
                </li>
                <li className='services-item'>
                    <a>
                        <GoPackage/>
                    </a>
                    Mogućnost otvaranja paketa prije plaćanja 
                </li>
                <li className='services-item'>
                    <a>
                        <FaMedal/>
                    </a>
                    Originalni testeri
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Services
