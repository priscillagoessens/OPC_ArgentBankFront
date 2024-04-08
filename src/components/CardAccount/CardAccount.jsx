import React from 'react'
import Button from '../Button/Button'
import "./_CardAccount.scss"

export default function CardAccount() {
  const handleClick = () => {
    console.log('Le bouton a été cliqué !');
  };
  return (
    <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button
            onClick={handleClick}
            className="transaction-button"
          >
            Cliquez ici
          </Button>
        </div>
      </section>
  )
}
