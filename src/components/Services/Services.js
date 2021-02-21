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
                    <span>
                        <FaTruck/>
                    </span>
                    Dostava u roku 24h
                </li>
                <li className='services-item'>
                    <span>
                        <FaMoneyBillAlt/>
                    </span>
                    Plaćanje pouzećem
                </li>
                <li className='services-item'>
                    <span>
                        <GoPackage/>
                    </span>
                    Mogućnost otvaranja paketa prije plaćanja 
                </li>
                <li className='services-item'>
                    <span>
                        <FaMedal/>
                    </span>
                    Originalni testeri
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Services
