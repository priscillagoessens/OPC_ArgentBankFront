import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import "./_Login.scss"

export default function Login() {
  return (
    <div>
        <NavLink className='main-nav-item' to="/login">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </NavLink>
    </div>
  )
}
