import React from 'react'
import './_Button.scss'

export default function Button({children, onClick, className}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
