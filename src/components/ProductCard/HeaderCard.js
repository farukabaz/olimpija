import React from 'react'
import './HeaderCard.css'

const HeaderCard = ({topText, bottomText}) => {
    return (
        <div className="header-card-row">
            <div className="bottom-right-header">
                {topText}<br></br>{bottomText}
            </div>
        </div>
    )
}

export default HeaderCard
