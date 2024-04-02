import './_Formulaire.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function Formulaire() {
  return (
    <section className='sign-in-content'>
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon"/>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username"/>
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password"/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me"/>
                <label for="remember-me">Remember me</label>
            </div>
            <NavLink className='sign-in-button' to="/user">Sign In</NavLink>
            
            {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
            
          </form>
        </section>
  )
}

export default Formulaire
