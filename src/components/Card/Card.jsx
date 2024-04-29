import React from 'react'
import './_Card.scss'

function Card({icon, title, text}) {
  return (
    <div className='feature-item'>
        <img className='feature-item-icon' src={icon} alt={title} />
        <h3 className='feature-item-title'>{title}</h3>
        <p>{text}</p> 
    </div>
  )
}

export default Card
