import React from 'react'
import logo from '../../assets/img/argentBankLogo.png'
import Login from '../Login/Login'
import './_Header.scss';


export default function Header() {
  return (
    <div>
      <nav className='main-nav'>
      <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo"/>
      <Login/>
      </nav>
    </div>
  )
}
