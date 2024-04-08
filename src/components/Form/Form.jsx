
import './_Form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';



function Form() {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const dispatch = useDispatch();
  const navigate =  useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    let userCredential={
      email, password
    }
    dispatch(loginUser(userCredential)).then((result)=>{
      if(result.payload){
        setEmail('');
        setPassword('');
        navigate('/profile')
      }
    })
  };

  return (
    <section className='sign-in-content'>
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon"/>
          <h1>Sign In</h1>
          <form onSubmit={(e)=> handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" 
                id="email" 
                value={email} onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" 
                id="password" 
                value={password} onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type='submit' className='sign-in-button'>
              Sign In
            </button> 
                  
          </form>
        </section>
  )
}

export default Form
