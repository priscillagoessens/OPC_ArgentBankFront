

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/action';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state)=> state.auth.error);

  //action qui dispatch et redirige vers /profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password})).then(()=>{
      navigate('/profile');
    }) 
  }

  return (
    <section className='sign-in-content'>
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon"/>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" 
            id="email" 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" 
            id="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type='submit' className='sign-in-button'>
          Sign In
        </button> 
        {error &&(
          <div className='sign-in-content_error'>{error}</div>
        )}
      </form>
    </section>
  )
}

export default LoginForm
