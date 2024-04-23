import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo-S.webp'
import Login from '../Login/Login'
import Logout from '../Logout/Logout';
import './_Header.scss';
import { useSelector } from 'react-redux';


export default function Header() { 
  const isLogIn = useSelector((state)=>state.user.isCo);

  return (
    <div>
      <nav className='main-nav'>
        <Link to="/">
          <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo"/>
        </Link>
        {isLogIn ? <Logout/> : <Login/>}
      </nav>
    </div>
  )
}
