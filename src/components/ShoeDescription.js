import React from 'react'
import UserInputs from './UserInputs'

function ShoeDescription({company, title, description, price, discount, oldPrice}) {
  return (
    <div className="shoe-description">
        <h6>{company}</h6>
        <h1 className="description-title">{title}</h1>
        <p className="shoe-para">{description}</p>
        <div className="price-container">
            <h4 className="price">${price}.00</h4>
            <div className="discount">%{discount}</div>
        </div>
        <p className="old-price">${oldPrice}.00</p>
        <UserInputs />
    </div>
  )
}

export default ShoeDescription