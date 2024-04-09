import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png'
import Login from '../Login/Login'
import Logout from '../Logout/Logout';
import './_Header.scss';
import { useSelector } from 'react-redux';
import {selectUser} from '../../store/authSlice';

export default function Header() { 
  const user = useSelector(selectUser);
  return (
    <div>
      <nav className='main-nav'>
        <Link to="/">
          <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo"/>
        </Link>
        {user !== null && user !== undefined ? <Logout/> : <Login/>}
      </nav>
    </div>
  )
}
