import React from 'react'
import Button from '../Button/Button'
import "./_CardAccount.scss"

export default function CardAccount({ title, amount, description }) {
  const handleClick = () => {
    console.log('Le bouton a été cliqué !');
  };
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button onClick={handleClick} className="transaction-button">
          View Transactions
        </Button>
      </div>
    </section>
  )
}
