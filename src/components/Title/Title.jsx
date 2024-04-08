import React from 'react'
import './_Title.scss'
import Button from '../Button/Button'

export default function Title() {
  const handleClick = () => {
    console.log('Le bouton a été cliqué !');
  };
  return (
    <div className="header">
    <h1>Welcome back<br /></h1>
    <Button
      onClick={handleClick}
      className="edit-button"
    >
      Edit Name
    </Button>
    </div>
  )
}