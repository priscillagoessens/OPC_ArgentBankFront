import React from 'react'
import './_Title.scss'

export default function Title({name, lastname}) {

  return (
    <div className="header">
    <h1>Welcome back<br />{name} {lastname}</h1>
    </div>
  )
}
